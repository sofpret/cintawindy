document.addEventListener("DOMContentLoaded", () => {
  const total = 20;
  for (let i = 0; i < total; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${5 + Math.random() * 5}s`;
    document.body.appendChild(flower);
  }
});

