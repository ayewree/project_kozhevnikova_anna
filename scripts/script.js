"use script"

// Задание 3.2, 3.3
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.intensive__img');
    
    images.forEach(img => {
        const description = img.nextElementSibling;
        
        img.addEventListener('mouseenter', () => {
            img.style.opacity = 0.7;
            description.style.opacity = 1;
            description.removeAttribute('hidden');
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.opacity = 1;
            description.style.opacity = 0;
            setTimeout(() => description.setAttribute('hidden', true), 300);
        });
    });
});

// Задание 3.4 - Динамическое обновление имен преподавателей
document.addEventListener('DOMContentLoaded', function() {
  const teachersContainer = document.querySelector('.teachers');
  
  if (teachersContainer) {
    const teachersNames = [
      "Анна Смирнова",
      "Дмитрий Иванов",
      "Елена Петрова"
    ];
    const nameElements = teachersContainer.querySelectorAll('.teachers__name');
    nameElements.forEach((item, index) => {
      if (teachersNames[index]) {
        item.textContent = teachersNames[index];
      }
    });
    console.log('Имена преподавателей обновлены:', teachersNames);
  } else {
    console.log('Блок преподавателей не найден');
  }
});

// Модальное окно (выбор формата скачивания материала)

document.addEventListener('DOMContentLoaded', function() {
const downloadButtonModal = document.querySelector(".download_button")
const modalApplication = document.querySelector(".download_modal")

if (downloadButtonModal && modalApplication) {
  downloadButtonModal.addEventListener("click", () => {
    modalApplication.removeAttribute("hidden");
  });
}

window.addEventListener("click", (event) => {
  if (event.target === modalApplication) {
    modalApplication.setAttribute("hidden", true);
  }
});

const closeModalButton = document.querySelector(".modal_close");

closeModalButton.addEventListener("click", () => {
  modalApplication.setAttribute("hidden", true);
});
});


//Задание 3.5 Карточки
document.addEventListener('DOMContentLoaded', function() {
    const cardsPrice = document.querySelector('.price');
    
    if (cardsPrice) {
        const priceList = cardsPrice.querySelector('.price__list');
        
        const cardsPriceData = {
            free: {
                level: 'БЕСПЛАТНЫЙ',
                price: '0 ₽',
                description: 'Базовый доступ к материалам<br>Ограниченное количество уроков<br>12 стандартных шаблонов упражнений',
                button: 'Начать бесплатно'
            },
            standard: {
                level: 'СТАНДАРТ',
                price: '400 ₽/мес',
                description: 'Полный доступ к материалам<br>Неограниченное количество уроков<br>12 стандартных шаблонов упражнений',
                button: 'Выбрать тариф'
            },
            pro: {
                level: 'ПРО',
                price: '800 ₽/мес',
                description: 'Все возможности STANDARD<br>Доступ к эксклюзивным материалам<br>+8 шаблонов упражнений<br>Создание контента с помощю ИИ',
                button: 'Выбрать тариф'
            }
        };

        const createCard = (level, price, description, button) => {
            return `
                <li class="price__item">
                    <p class="price__level">${level}</p>
                    <p class="price__price">${price}</p>
                    <p class="price__description">${description.replace(/<br>/g, '<br>')}</p>
                    <button class="price__button button">${button}</button>
                </li>
            `;
        };

        priceList.innerHTML = '';

        for (const cardKey in cardsPriceData) {
            const card = cardsPriceData[cardKey];
            const cardElement = createCard(card.level, card.price, card.description, card.button);
            priceList.insertAdjacentHTML('beforeend', cardElement);
        }
    }
});

// Задание 3.6 Динамическая галерея изображений
document.addEventListener('DOMContentLoaded', function() {
  const cardsImages = document.querySelector(".article_images");

if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".article_images_list");
    const apiUrl = "images.json";

    const createCard = (imageUrl, imageAlt, imageWidth) => {
        const image = `
            <li class="article_images_item">
                <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
            </li>
        `;
        return image;
    };

    fetch(apiUrl)
        .then((response) => response.json())
        .then((images) => {
            console.log(images);
            console.log(typeof images);

            images.forEach((item) => {
                const cardElement = createCard(
                    item.imageUrl,
                    item.imageAlt,
                    item.imageWidth
                );
                cardListImages.insertAdjacentHTML("beforeend", cardElement);
            });

            const pictures = document.querySelectorAll(".images__picture");
            if (pictures) {
                pictures.forEach((picture) => {
                    picture.addEventListener("click", () => {
                        const parentItem = picture.parentElement;
                        const parentPictures = parentItem.querySelectorAll(".images__picture");

                        parentPictures.forEach((parentPicture) => {
                            if (parentPicture !== picture) {
                                parentPicture.style.display = "block";
                            } else {
                                parentPicture.style.display = "none";
                            }
                        });
                    });
                });
            }
        })
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });
}
})

//Предзагрузчик
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");

if (preloader && content) {
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    content.style.display = "block";
    preloader.remove();
  }, 3000);
}

//Задание 3.7

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
})