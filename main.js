import "./style.css";
import { Mandrake } from "./mandrake";

let cxt;

window.addEventListener("load", function () {
  const canvas = document.getElementById("animation-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  const mandrake = new Mandrake(canvas.width, canvas.height);
  document
    .getElementById("all")
    .addEventListener("click", () => mandrake.setAnimation(0, 355));
  document
    .getElementById("grow")
    .addEventListener("click", () => mandrake.setAnimation(0, 75));
  document
    .getElementById("wink")
    .addEventListener("click", () => mandrake.setAnimation(76, 112));
  document
    .getElementById("float")
    .addEventListener("click", () => mandrake.setAnimation(113, 262));
  document
    .getElementById("hide")
    .addEventListener("click", () => mandrake.setAnimation(263, 355));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mandrake.update();
    mandrake.draw(ctx);

    window.requestAnimationFrame(animate);
  }
  animate();
});
