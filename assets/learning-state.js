/* Shared lesson navigation and browser-local progress. */
(() => {
  'use strict';
  const lessons = [
    ['0001-from-idea-to-testable-hypothesis', '从想法到假设'],
    ['0002-market-signal-map-to-first-card', '市场信号地图'],
    ['0003-python-financial-data-workflow', 'Python 数据工作流'],
    ['0004-minimal-backtest-and-bias-control', '回测与偏差'],
    ['0005-futures-basics-and-commodities-bridge', '期货基础'],
    ['0006-position-sizing-and-risk-budget', '仓位与风险预算'],
    ['0007-portfolio-construction-and-diversification', '组合构建'],
    ['0008-costs-liquidity-and-execution', '成本与执行'],
    ['0009-statistical-validation-and-model-failure', '统计验证'],
    ['0010-commodities-and-copper-application-bridge', '商品与铜应用']
  ];
  const match = location.pathname.match(/\/lessons\/([^/]+)\.html$/);
  if (!match) return;
  const slug = match[1];
  const index = lessons.findIndex((lesson) => lesson[0] === slug);
  if (index < 0) return;
  const page = document.querySelector('main') || document.body;
  const section = document.createElement('section');
  section.className = 'learning-controls';
  section.setAttribute('aria-label', '学习进度与课程导航');
  const heading = document.createElement('h2');
  heading.textContent = '本课学完了吗？';
  const description = document.createElement('p');
  description.textContent = '完成课后输出并能用自己的话解释本课概念后，标记完成。进度仅保存在当前浏览器。';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'completion-button';
  const status = document.createElement('p');
  status.className = 'progress-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  const nav = document.createElement('nav');
  nav.className = 'lesson-navigation';
  nav.setAttribute('aria-label', '课程导航');
  function addLink(href, text) {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    nav.append(link);
  }
  if (index > 0) addLink(`${lessons[index - 1][0]}.html`, `← 上一课：${lessons[index - 1][1]}`);
  addLink('../index.html#courses', '回到课程目录');
  if (index < lessons.length - 1) addLink(`${lessons[index + 1][0]}.html`, `下一课：${lessons[index + 1][1]} →`);
  section.append(heading, description, button, status, nav);
  page.append(section);
  const progressKey = 'quant-learning-progress-v1';
  const knownSlugs = new Set(lessons.map((lesson) => lesson[0]));
  let completed = new Set();
  function readProgress() {
    const raw = localStorage.getItem(progressKey);
    if (!raw) return new Set();
    const value = JSON.parse(raw);
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) throw new Error('Invalid progress');
    return new Set(value.filter((item) => knownSlugs.has(item)));
  }
  function updateButton() {
    const isDone = completed.has(slug);
    button.textContent = isDone ? '✓ 已完成 · 撤销完成' : '标记本课完成';
    button.setAttribute('aria-pressed', String(isDone));
    button.dataset.completed = String(isDone);
  }
  try {
    completed = readProgress();
    status.textContent = `已完成 ${completed.size} / ${lessons.length} 课。`;
  } catch (_error) {
    status.textContent = '无法读取学习进度；可能是本机存储受限或记录损坏。课程仍可正常阅读。';
  }
  updateButton();
  try {
    localStorage.setItem('quant-learning-last-v1', slug);
  } catch (_error) {
    status.textContent = '本机存储不可用，最近学习位置未保存。课程仍可正常阅读。';
  }
  button.addEventListener('click', () => {
    try {
      // Refresh first to preserve progress recorded in another browser tab.
      const next = readProgress();
      const wasDone = next.has(slug);
      if (wasDone) next.delete(slug); else next.add(slug);
      localStorage.setItem(progressKey, JSON.stringify([...next]));
      completed = next;
      updateButton();
      status.textContent = `${wasDone ? '已撤销本课完成标记' : '本课已标记完成'}，已完成 ${completed.size} / ${lessons.length} 课。进度已保存在本机。`;
      window.dispatchEvent(new CustomEvent('quant-learning-progress-changed', { detail: [...completed] }));
    } catch (_error) {
      status.textContent = '无法保存学习进度，本次标记未生效。请检查浏览器的本机存储设置。';
    }
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== progressKey && event.key !== null) return;
    try {
      completed = readProgress();
      updateButton();
      status.textContent = `学习进度已更新：已完成 ${completed.size} / ${lessons.length} 课。`;
    } catch (_error) {
      status.textContent = '无法读取其他页面更新的进度；当前课程仍可正常阅读。';
    }
  });
})();
