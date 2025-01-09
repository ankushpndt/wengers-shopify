// product grid/list
function listgridJavascript() {
Array.from(document.querySelectorAll(".wblistgridbtn")).forEach(link => {
    link.addEventListener('click', function(event) {
        Array.from(document.querySelectorAll(".wblistgridbtn")).forEach(e => e.classList.remove('active'));
        this.classList.add('active');
        if(this.classList.contains('listv')){
            document.getElementById('product-grid').classList.add('product-list');
            document.getElementById('product-grid').classList.remove('product-grid');
        }else if(this.classList.contains('gridv')){
            document.getElementById('product-grid').classList.add('product-grid');
            document.getElementById('product-grid').classList.remove('product-list');
        }
    }); 
});
};
document.addEventListener("shopify:section:load", listgridJavascript);
listgridJavascript();

// on scroll play video
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
function videoScroll() {
  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight, videoEl = document.querySelectorAll('video[autoplay]');
    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i];
      if (thisVideoEl.closest('media-gallery')) {
        continue;
      }
      videoHeight = thisVideoEl.clientHeight,
      videoClientRect = thisVideoEl.getBoundingClientRect().top;
      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(countDown, 1000); // Start the countdown interval
  countDown(); // Initial call to display immediately

  function countDown() {
    const countCardSections = document.querySelectorAll('.countd_all');
    countCardSections.forEach((countdownSection) => {
      const countDownDate = new Date(countdownSection.getAttribute('data-date')).getTime();
      const now = Date.now();
      const distance = countDownDate - now;

      const daysElement = countdownSection.querySelector('.main_cdays .wb_cdays');
      const hoursElement = countdownSection.querySelector('.main_chours .wb_chours');
      const minutesElement = countdownSection.querySelector('.main_cminutes .wb_cminutes');
      const secondsElement = countdownSection.querySelector('.main_cseconds .wb_cseconds');

      // Use countd_all as the parent context to find the message element
      const messageElement = countdownSection.querySelector('.main_ctext');

      if (distance < 0 || isNaN(countDownDate)) {
        // Timer is over
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        if (messageElement && messageElement.textContent.trim() !== '') {
          // If message exists
          daysElement.parentElement.style.display = "none";
          hoursElement.parentElement.style.display = "none";
          minutesElement.parentElement.style.display = "none";
          secondsElement.parentElement.style.display = "none";
          countdownSection.style.display = "inline-block"; // Show countdown section
          messageElement.style.display = "block"; // Show message
        }
      } else {
        // Update timer values
        daysElement.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
        hoursElement.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutesElement.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        secondsElement.textContent = Math.floor((distance % (1000 * 60)) / 1000);
        if (messageElement) {
          messageElement.style.display = "none"; // Hide message while counting down
        }
      }
    });
  }
});


