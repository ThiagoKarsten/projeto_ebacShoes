function navigateTo(section) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('main').style.display = 'block';
  }
  
  function toggleForm(target) {
    document.getElementById('login').style.display = target === 'login' ? 'flex' : 'none';
    document.getElementById('cadastro').style.display = target === 'cadastro' ? 'flex' : 'none';
  }
  
  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';
    document.querySelectorAll('.top-nav button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showPage('${page}')"]`).classList.add('active');
  }
  
  function backToLogin() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.checkin').forEach(btn => {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', function () {
        const curso = btn.closest('.card').querySelector('strong').textContent;
        alert(`Você fez check-in no curso: ${curso}`);
      });
    });
  });
  