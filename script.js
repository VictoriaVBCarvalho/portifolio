// Saudação dinâmica no topo
window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-content h1");
  const hora = new Date().getHours();
  let saudacao = "Seja bem-vindo(a)!";
  if (hora >= 5 && hora < 12) saudacao = "Bom dia!";
  else if (hora >= 12 && hora < 18) saudacao = "Boa tarde!";
  else saudacao = "Boa noite!";
  header.textContent = saudacao;

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
