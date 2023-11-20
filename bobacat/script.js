
  // JavaScript for smooth scrolling
  function scrollToPage(pageIndex) {
    const container = document.querySelector('.container');
    const pageWidth = document.querySelector('.page').offsetWidth;
    container.style.transform = `translateX(-${pageIndex * pageWidth}px)`;
  }

  // JavaScript for circle cursor
  const circleCursor = document.querySelector('.circle-cursor');
  document.addEventListener('mousemove', (e) => {
    circleCursor.style.left = `${e.pageX}px`;
    circleCursor.style.top = `${e.pageY}px`;
  });
//button to image
function scrollToImage() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.scrollIntoView({ behavior: 'smooth' });
  }