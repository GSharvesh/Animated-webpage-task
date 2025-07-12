
window.addEventListener('DOMContentLoaded', () => {
  gsap.from(".container", {
    opacity: 0,
    scale: 0.5,
    duration: 1.2,
    ease: "power2.out"
  });
});


document.querySelector(".btn").addEventListener("click", () => {
  gsap.to(".btn", {
    y: -10,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut"
  });

  alert("Button clicked! You entered: " + document.querySelector(".input-box").value);
});
