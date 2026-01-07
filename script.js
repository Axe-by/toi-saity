const date = new Date("2026-02-07 18:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const d = date - now;

  days.innerText = Math.floor(d / (1000*60*60*24));
  hours.innerText = Math.floor((d / (1000*60*60)) % 24);
  minutes.innerText = Math.floor((d / (1000*60)) % 60);
  seconds.innerText = Math.floor((d / 1000) % 60);
}, 1000);

function sendWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const text = `Сәлеметсіз бе! Мен ${name}. Раянаға арналған тұсау кесер тойына: ${status}`;
  window.open(`https://wa.me/77076212009?text=${encodeURIComponent(text)}`);
}

const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
