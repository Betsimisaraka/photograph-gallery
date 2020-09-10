const images = Array.from(document.querySelectorAll('img'));
const openImage = document.querySelector('.show_images');

function open() {
  openImage.classList.add('open');
}

function showImages(el) {
  console.log(el);
  if (!el) {
    console.info('No image to show');
    return;
  }
  openImage.querySelector('img').src = el.src;
  openImage.querySelector('source').srcset = el.srcset;
  currentImage = el;
  open();
}

images.forEach(image => {
  image.addEventListener('click', e => showImages(e.currentTarget));
});

images.forEach(image => {
  image.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
          showImages(e.currentTarget);
      }
  });
});