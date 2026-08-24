// Small progressive enhancements keep the static page responsive when external assets load slowly.
(function () {
  const images = document.querySelectorAll('img');
  images.forEach(function (image) {
    image.loading = 'lazy';
    image.addEventListener('load', function () {
      image.classList.add('is-loaded');
    }, { once: true });
  });

}());
