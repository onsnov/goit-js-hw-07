import { galleryItems } from './gallery-items.js';

 const galleryList = document.querySelector(".gallery");

 
galleryList.innerHTML = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" 
        alt="${description}" />
  </a>
</li>
        `;
    })
  .join("");

    var lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });

  





