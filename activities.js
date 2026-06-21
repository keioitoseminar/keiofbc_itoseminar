// ===================================================================
// activities.html 専用：カテゴリフィルター
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.activity-item');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach((item) => {
        const categories = item.dataset.category || '';
        const show = filter === 'all' || categories.split(' ').includes(filter);
        item.style.display = show ? '' : 'none';
      });
    });
  });
});
