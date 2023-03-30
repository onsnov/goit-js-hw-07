import { galleryItems } from './gallery-items.js';
// Change code below this line

  //console.log(galleryItems);


const galleryList = document.querySelector(".gallery");
galleryList.addEventListener('click', onGalleryListClick)

const pictureMaker = pictureGalleryMaker(galleryItems);

galleryList.insertAdjacentHTML('beforeend', pictureMaker);





// function onCloseModal(event) { 
// // document.event.current.target.classList.remove("gallery__image");
//   console.log(event);

// }


function onGalleryListClick(event) {
   event.preventDefault();
  
    if (!event.target.classList.contains("gallery__image")) {
      return;
    }
  
  const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`);
  
  instance.show();

  window.addEventListener("keydown", onEscButtonClick);
  function onEscButtonClick(event) {
    if (event.key === "Escape") {
     instance.close();
    }
  } 
}

function pictureGalleryMaker(galleryItems) {
  return galleryItems
.map(({ preview, original, description }) => {
  return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>
        `;
    })
    .join("");
  //  console.log(maker);
}



