//Get the button:
mybutton = document.getElementById('topButton');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const imgOverlay = document.createElement('div');
imgOverlay.id = 'imgOverlay';
document.body.appendChild(imgOverlay);

const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('click', (e) => {
    imgOverlay.className = 'active';
    const img = document.createElement('img');
    img.src = image.src;
    while (imgOverlay.firstChild) {
      imgOverlay.removeChild(imgOverlay.firstChild);
    }
    imgOverlay.appendChild(img);
  });
});

imgOverlay.addEventListener('click', (e) => {
  if (e.target == e.currentTarget) {
    imgOverlay.classList.remove('active');
  };
});
