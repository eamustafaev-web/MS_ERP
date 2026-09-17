/* ==========================================================================
   PAYHOME — JAVASCRIPT BAZASI VƏ DAXİL OLMA İDARƏETMƏSİ
   ========================================================================== */

// DOM Elementləri
const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("passwordInput");
const togglePasswordBtn = document.getElementById("togglePasswordBtn");
const logoutBtn = document.getElementById("logoutBtn");

const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const mainNav = document.getElementById("mainNav");
const mainContent = document.getElementById("mainContent");
const toast = document.getElementById("toast");

// Toast bildirişi
function showToast(message) {
  if (!toast) return;
  toast.hidden = false;
  toast.textContent = message;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

// 1. Parolun görünməsini dəyişmək (Göz ikonu)
togglePasswordBtn?.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordBtn.textContent = isPassword ? "🙈" : "👁️";
});

// 2. Daxil olma (Login Submit)
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("usernameInput").value.trim();
  const pass = passwordInput.value;

  if (!user || !pass) {
    showToast("Zəhmət olmasa istifadəçi adı və parolu daxil edin.");
    return;
  }

  // Giriş uğurludur
  loginScreen.hidden = true;
  appScreen.hidden = false;
  showToast(`Xoş gəldiniz, ${user}!`);
});

// 3. Çıxış etmə (Logout)
logoutBtn?.addEventListener("click", () => {
  appScreen.hidden = true;
  loginScreen.hidden = false;
  showToast("Sistemdən çıxış edildi.");
});

// 4. Modullar arası naviqasiya
const modules = {
  dashboard: {
    title: "İdarə Paneli",
    subtitle: "Şirkət üzrə ümumi icmal və statistik göstəricilər"
  },
  properties: {
    title: "Obyektlər və Zəncir",
    subtitle: "Obyektlərin idarə edilməsi və sənəd zənciri"
  },
  contracts: {
    title: "Müqavilələr",
    subtitle: "Alqı-satqı, icarə və xidmət müqavilələri"
  },
  finance: {
    title: "Maliyyə",
    subtitle: "Kassa, bank əməliyyatları və daxilolmalar"
  }
};

function switchModule(moduleId) {
  const mod = modules[moduleId];
  if (!mod) return;

  pageTitle.textContent = mod.title;
  pageSubtitle.textContent = mod.subtitle;

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.module === moduleId);
  });

  mainContent.innerHTML = `
    <div class="welcome-card card">
      <div class="welcome-icon">🏢</div>
      <h2>${mod.title}</h2>
      <p>${mod.subtitle}</p>
      <div class="step-status-box">
        <span>● Bölmə:</span>
        <strong>${mod.title} aktivdir</strong>
      </div>
    </div>
  `;

  showToast(`${mod.title} bölməsinə keçildi.`);
}

mainNav?.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-module]");
  if (!btn) return;
  switchModule(btn.dataset.module);
});
