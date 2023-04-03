import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", onGalleryListClick);

const pictureMaker = pictureGalleryMaker(galleryItems);

galleryList.insertAdjacentHTML("beforeend", pictureMaker);

function pictureGalleryMaker(galleryItems) {
  return galleryItems
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

  
}

function onGalleryListClick(event) {
   event.preventDefault();

   if (!event.target.classList.contains("gallery__image")) {
     return;
   }

 var lightbox = new SimpleLightbox(".gallery a", {
   captionsData: "alt",
   captionDelay: 250,
 });

  //  instance.show();

  //  window.addEventListener("keydown", onEscButtonClick);
  //  function onEscButtonClick(event) {
  //    if (event.key === "Escape") {
  //      instance.close();
  //    }
  //  }
 }




