// Perlara 3.0 reference site — minimal progressive enhancement.
(function () {
  var page = document.body && document.body.getAttribute('data-page');
  if (!page) return;
  var links = document.querySelectorAll('.nav-links a[data-nav]');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('data-nav') === page) {
      links[i].classList.add('current');
    }
  }
})();
