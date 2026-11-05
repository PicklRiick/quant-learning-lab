/* Course exercises. All drafts stay in this browser; no network requests. */
(() => {
  'use strict';

  document.querySelectorAll('.quiz-question').forEach((question) => {
    const feedback = question.querySelector('.feedback');
    if (feedback) {
      feedback.setAttribute('role', 'status');
      feedback.setAttribute('aria-live', 'polite');
      feedback.setAttribute('aria-atomic', 'true');
    }
    const buttons = question.querySelectorAll('button[data-correct]');
    buttons.forEach((button) => {
      button.type = 'button';
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        buttons.forEach((item) => {
          item.removeAttribute('data-state');
          item.setAttribute('aria-pressed', 'false');
        });
        const correct = button.dataset.correct === 'true';
        button.dataset.state = correct ? 'correct' : 'wrong';
        button.setAttribute('aria-pressed', 'true');
        if (feedback) feedback.textContent = (correct ? '回答正确。' : '再想一想。') +
          (correct ? button.dataset.good || '' : button.dataset.bad || '');
      });
    });
  });

  document.querySelectorAll('[data-hypothesis-card]').forEach((form, formIndex) => {
    const fields = [...form.querySelectorAll('textarea, input')].filter((field) =>
      !['button', 'submit', 'reset', 'hidden'].includes(field.type));
    const result = form.querySelector('.worksheet-result');
    if (result) {
      result.setAttribute('role', 'status');
      result.setAttribute('aria-live', 'polite');
      result.setAttribute('aria-atomic', 'true');
      result.textContent = '填写后检查字段完整度；完整度不代表策略有效或能够盈利。';
    }
    const draftKey = `quant-learning-draft-v1:${location.pathname}:${formIndex}`;
    const fieldKey = (field, index) => field.id || field.name || `field-${index}`;
    const labelFor = (field, index) => {
      const label = field.labels && field.labels[0];
      return label ? label.textContent.replace(/[：:]\s*$/, '').trim() : fieldKey(field, index);
    };
    const values = () => Object.fromEntries(fields.map((field, index) => [fieldKey(field, index), field.value]));
    const status = document.createElement('p');
    status.className = 'draft-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.setAttribute('aria-atomic', 'true');
    const actions = document.createElement('div');
    actions.className = 'worksheet-actions';
    const exportButton = document.createElement('button');
    exportButton.type = 'button';
    exportButton.textContent = '导出策略卡 JSON';
    const clearButton = document.createElement('button');
    clearButton.type = 'button';
    clearButton.textContent = '清除本课草稿';
    actions.append(exportButton, clearButton);
    form.append(actions, status);

    function saveDraft() {
      try {
        localStorage.setItem(draftKey, JSON.stringify({ version: 1, updatedAt: new Date().toISOString(), fields: values() }));
        status.textContent = '草稿已自动保存在本机浏览器，可随时导出备份。';
      } catch (_error) {
        status.textContent = '本机存储不可用，草稿未保存。请导出 JSON 备份后再离开本页。';
      }
    }
    try {
      const raw = localStorage.getItem(draftKey);
      if (raw) {
        const draft = JSON.parse(raw);
        if (draft.version !== 1 || !draft.fields || typeof draft.fields !== 'object' || Array.isArray(draft.fields)) {
          throw new Error('Invalid draft');
        }
        fields.forEach((field, index) => {
          const key = fieldKey(field, index);
          if (Object.prototype.hasOwnProperty.call(draft.fields, key) && typeof draft.fields[key] === 'string') {
            field.value = draft.fields[key];
          }
        });
        status.textContent = '已恢复本机草稿。修改会自动保存，仅限当前浏览器。';
      } else {
        status.textContent = '修改后自动保存在本机浏览器；建议定期导出备份。';
      }
    } catch (_error) {
      status.textContent = '无法读取本机草稿；可能是存储受限或草稿损坏。当前内容仍可填写并导出。';
    }
    fields.forEach((field) => field.addEventListener('input', saveDraft));

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const missing = fields.map((field, index) => field.value.trim() ? null : labelFor(field, index)).filter(Boolean);
      const score = fields.length ? Math.round((fields.length - missing.length) / fields.length * 100) : 0;
      if (result) result.textContent = missing.length
        ? `字段完整度：${score}%。还缺：${missing.join('、')}。请补齐后继续检查规则是否明确、数据何时可见、成交如何执行。`
        : `字段完整度：${score}%。字段已填齐，仍需检查规则、数据可见时间、成本和验证方法；这不代表策略有效或能够盈利。`;
      saveDraft();
    });
    exportButton.addEventListener('click', () => {
      let objectURL;
      try {
        const payload = { version: 1, lesson: location.pathname.split('/').pop(), exportedAt: new Date().toISOString(), fields: values() };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
        objectURL = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = objectURL;
        link.download = `strategy-card-${location.pathname.split('/').pop().replace(/\.html$/, '')}.json`;
        document.body.append(link);
        link.click();
        link.remove();
        status.textContent = '已发起 JSON 下载，请在浏览器下载记录中确认保存。';
        setTimeout(() => URL.revokeObjectURL(objectURL), 1000);
      } catch (_error) {
        if (objectURL) URL.revokeObjectURL(objectURL);
        status.textContent = '此浏览器无法导出文件，请手动复制填写内容备份。';
      }
    });
    clearButton.addEventListener('click', () => {
      try {
        localStorage.removeItem(draftKey);
        fields.forEach((field) => { field.value = ''; });
        if (result) result.textContent = '草稿已清空，请重新填写后检查字段完整度。';
        status.textContent = '本课的本机草稿已清除。';
      } catch (_error) {
        status.textContent = '本机存储不可用，无法确认草稿已删除。当前填写内容已保留，可先导出备份。';
      }
    });
  });
})();
