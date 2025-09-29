// Saudação dinâmica no topo
window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-content h1");
  header.textContent = "Bem-vindo(a) ao meu portfólio!";

  // Efeito de destaque nos projetos
  document.querySelectorAll(".projeto").forEach(function (proj) {
    proj.addEventListener("mouseenter", function () {
      proj.style.transform = "scale(1.03)";
      proj.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
    });
    proj.addEventListener("mouseleave", function () {
      proj.style.transform = "scale(1)";
      proj.style.boxShadow = "none";
    });
  });
});
