const countdownEl = document.getElementById('countdown');
const targetDate = new Date("September 20, 2025 15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownEl.textContent = "¡Ya comenzó la fiesta! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.textContent = `${days} días, ${hours} hrs, ${minutes} min, ${seconds} seg.`;
}

updateCountdown();
setInterval(updateCountdown, 1000);



var animation = bodymovin.loadAnimation({
container: document.getElementById('animContainer'), 
renderer: 'svg',
loop: true,
autoplay:true,
path:'/assets'





})