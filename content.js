const hideElements = () => {
  const selectors = [
    '[aria-label*="like"]',
    '[aria-label*="comment"]',
    '[aria-label*="share"]',
    '.social-details-social-counts',
    '.social-details-actions'
  ];
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.style.display = 'none');
  });
};

hideElements();
setInterval(hideElements, 2000);