function navigateTo(section) {
  document.getElementById("login").style.display = "none";
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("main").style.display = "block";
}

function toggleForm(target) {
  document.getElementById("login").style.display =
    target === "login" ? "flex" : "none";
  document.getElementById("cadastro").style.display =
    target === "cadastro" ? "flex" : "none";
}

function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
  document.getElementById(page).style.display = "block";
  document
    .querySelectorAll(".top-nav button")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`[onclick="showPage('${page}')"]`)
    .classList.add("active");
}

function backToLogin() {
  document.getElementById("main").style.display = "none";
  document.getElementById("login").style.display = "flex";
}

function toggleProfileMenu() {
    var menu = document.getElementById('profileMenu');
    var chevronIcon = document.getElementById('chevronIcon');
    
    // Alterna a visibilidade do menu de perfil
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      chevronIcon.classList.add('rotate'); // Gira a seta
    } else {
      menu.style.display = "none";
      chevronIcon.classList.remove('rotate'); // Retira a rotação da seta
    }
  }
  
