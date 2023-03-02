import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGalleryRef = document.querySelector(".gallery");

const handleCreateImgElements = (galleryItems) => {
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
    </div>`;
    })
    .join("");
};

containerGalleryRef.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  handleShowImgElement(e.target.dataset.source);
});

const handleShowImgElement = (e) => {
  const instance = basicLightbox.create(`
    <img src="${e}">
`);
  instance.show();

  containerGalleryRef.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
};

containerGalleryRef.innerHTML = handleCreateImgElements(galleryItems);
