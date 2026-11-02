// توليد القلوب  بالخلفية
function createFloatingHearts() {
  const container = document.getElementById("heartsContainer");
  const heartIcons = ["❤️", "💖", "✨", "🌸", "💕"];
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 4 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    container.appendChild(heart);
  }
}
createFloatingHearts();

// حركة زر "لأ"   بدون ما يغطي على زر يعني نص نص
const noBtn = document.getElementById("noBtn");
const buttonArea = document.getElementById("buttonArea");

function moveNoButton(e) {
  if (e) e.preventDefault();
  const areaRect = buttonArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // حساب اكبر مسافة لحركة زر لأ
  const maxLeft = areaRect.width / 2 - 40;
  const maxTop = 60;

  const randomX = (Math.random() - 0.5) * maxLeft * 2;
  const randomY = (Math.random() - 0.5) * maxTop * 2;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// التفاعل
function acceptApology() {
  document.getElementById("apologyCard").classList.add("hidden");
  document.getElementById("celebrationCard").classList.remove("hidden");
  triggerConfetti();
}

//  الفتيش
function triggerConfetti() {
  var count = 200;
  var defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      }),
    );
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

// النفخ على الشمعة
let candleBlown = false;
function blowCandle() {
  if (!candleBlown) {
    document.getElementById("flame").style.display = "none";
    document.getElementById("candleInstruction").innerText =
      " كل عام و أنتي بألف خير من كل قلبي ";
    document
      .getElementById("candleInstruction")
      .classList.replace("text-pink-300", "text-green-300");
    triggerConfetti();
    candleBlown = true;
  }
}

// العد التنازلي
function updateCountdown() {
  const now = new Date();
  let year = now.getFullYear();
  let birthday = new Date(year, 10, 8, 0, 0, 0);

  if (now > birthday) {
    birthday = new Date(year + 1, 10, 8, 0, 0, 0);
  }

  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0",
  );
}
setInterval(updateCountdown, 1000);
updateCountdown();
