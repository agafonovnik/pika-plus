function hidePikabuPlusNews() {
  const pikabuPlusElements = document.querySelectorAll('.user__label[data-type="pikabu-plus"]');
  pikabuPlusElements.forEach(element => {
    const newsItem = element.closest('.story__main');
    if (newsItem) {
      const titleElement = newsItem.querySelector('.story__title-link');
      if (titleElement) {
        const titleText = titleElement.textContent.trim();
        console.log(`Скрыта новость: "${titleText}"`);
      }
      newsItem.style.display = 'none';
    }
  });
}
hidePikabuPlusNews();
const observer = new MutationObserver(hidePikabuPlusNews);
observer.observe(document.body, { childList: true, subtree: true });