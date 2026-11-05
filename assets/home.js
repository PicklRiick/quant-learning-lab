(() => {
  'use strict';
  const courses = window.QUANT_COURSES || [];
  const known = new Set(courses.map(c => c.slug));
  const progressKey = 'quant-learning-progress-v1';
  const cards = [...document.querySelectorAll('.course-card')];
  const search = document.getElementById('course-search');
  const incomplete = document.getElementById('incomplete-only');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  let filter = 'all';
  let completed = [];
  let last = '';
  function readState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(progressKey) || '[]');
      completed = Array.isArray(parsed) ? [...new Set(parsed.filter(s => known.has(s)))] : [];
      last = localStorage.getItem('quant-learning-last-v1') || '';
      document.getElementById('storage-note').textContent = '进度仅保存在当前浏览器';
    } catch (_) {
      completed = [];
      last = '';
      document.getElementById('storage-note').textContent = '本机存储暂不可用，课程仍可正常阅读';
    }
  }
  function updateProgress() {
    readState();
    const count = completed.length;
    const percent = Math.round(count / courses.length * 100) || 0;
    document.getElementById('done-count').textContent = count;
    document.getElementById('progress-percent').textContent = percent + '%';
    document.getElementById('progress-ring').style.setProperty('--progress', percent + '%');
    document.getElementById('progress-hint').textContent = count === courses.length ? '十课已完成，回顾你的研究流程与产出。' : '每完成一课，就离研究闭环近一步。';
    const current = courses.find(c => c.slug === last && !completed.includes(last)) || courses.find(c => !completed.includes(c.slug)) || courses[0];
    if (current) {
      document.getElementById('continue-title').textContent = current.title;
      document.getElementById('continue-description').textContent = current.description;
      document.getElementById('continue-link').href = current.href;
      document.getElementById('continue-number').textContent = String(current.number).padStart(2,'0');
      document.getElementById('continue-label').textContent = count === courses.length ? '回顾与巩固' : (known.has(last) || count ? '接着上次，继续向前' : '从这里开始');
      document.getElementById('continue-action').textContent = count === courses.length ? '重新回顾第 1 课' : `${known.has(last) || count ? '继续' : '开始'}第 ${current.number} 课`;
    }
    cards.forEach(card => {
      const done = completed.includes(card.dataset.slug);
      card.classList.toggle('is-complete', done);
      card.querySelector('.completion-label').hidden = !done;
      const link = card.querySelector('.course-open');
      link.firstChild.textContent = done ? '回顾课程 ' : '开始学习 ';
    });
    applyFilters();
  }
  function applyFilters() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    cards.forEach(card => {
      const visible = (filter === 'all' || card.dataset.group === filter) && (!query || card.dataset.search.toLocaleLowerCase().includes(query)) && (!incomplete.checked || !completed.includes(card.dataset.slug));
      card.hidden = !visible;
      if (visible) count++;
    });
    document.getElementById('result-count').textContent = `共 ${count} 次课程`;
    document.getElementById('empty-state').hidden = count !== 0;
  }
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    filterButtons.forEach(b => { b.classList.toggle('selected', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    applyFilters();
  }));
  search.addEventListener('input', applyFilters);
  incomplete.addEventListener('change', applyFilters);
  document.getElementById('reset-filters').addEventListener('click', () => {
    search.value = '';
    incomplete.checked = false;
    filterButtons[0].click();
    search.focus();
  });
  document.querySelectorAll('.sidebar nav a').forEach(link => link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar nav a').forEach(a => a.classList.toggle('active', a === link));
  }));
  window.addEventListener('storage', updateProgress);
  window.addEventListener('pageshow', updateProgress);
  updateProgress();
})();
