const images = Array.from(document.querySelectorAll('.image_onclick'));
const openImage = document.querySelector('.show_images');

function showImages(element) {
  openImage.querySelector('.image_changes').src = element.src;
  openImage.querySelector('source').srcset = element.srcset;
  currentImage = element;
  currentImage.style.opacity = 1;
}

images.forEach(image => {
  image.addEventListener('click', e => showImages(e.currentTarget));
});