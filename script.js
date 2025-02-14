document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  
  // Function to try playing audio
  const tryPlayAudio = () => {
    audio.play().catch(error => {
      console.log("Browser prevented autoplay, will try again on interaction");
    });
  };

  // Try to play immediately
  tryPlayAudio();

  // Try to play again after a short delay
  setTimeout(tryPlayAudio, 1000);

  // Try to play on any user interaction with the page
  document.addEventListener('click', tryPlayAudio, { once: true });
  document.addEventListener('touchstart', tryPlayAudio, { once: true });
  document.addEventListener('keypress', tryPlayAudio, { once: true });
  document.addEventListener('scroll', tryPlayAudio, { once: true });

  // RSVP button click handler
  const rsvpBtn = document.querySelector('.rsvp-btn');
  rsvpBtn.addEventListener('click', () => {
    alert('RSVP functionality will be implemented here!');
  });

  // Lazy loading for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.loading = 'lazy';
  });
});