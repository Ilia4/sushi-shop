document.querySelectorAll('.slider-container').forEach((sliderContainer) => {
    const leftArrow = sliderContainer.querySelector('.arrow.left');
    const rightArrow = sliderContainer.querySelector('.arrow.right');
    const promoBlock = sliderContainer.querySelector('.promo-block');

    // Прокрутка влево
    leftArrow.addEventListener('click', () => {
        promoBlock.scrollBy({ left: -200, behavior: 'smooth' });
    });

    // Прокрутка вправо
    rightArrow.addEventListener('click', () => {
        promoBlock.scrollBy({ left: 200, behavior: 'smooth' });
    });
});

// Открытие и закрытие модального окна
const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeButton = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Переключение вкладок
const tabs = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tabContents.forEach((content) => content.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

