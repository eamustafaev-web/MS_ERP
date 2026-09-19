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

// Əvvəlcədən daxil olubsa, birbaşa ERP-ni göstər
if (sessionStorage.getItem("payhome_auth") === "true") {
  loginScreen.hidden = true;
  appScreen.hidden = false;
}

// 2. Daxil olma (Login Submit)
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("usernameInput").value.trim();
  const pass = passwordInput.value;

  if (!user || !pass) {
    showToast("Zəhmət olmasa istifadəçi adı və parolu daxil edin.");
    return;
  }

  // Tələb olunan istifadəçi və parol yoxlanışı
  if (user === "root" && pass === "090809") {
    loginScreen.hidden = true;
    appScreen.hidden = false;
    sessionStorage.setItem("payhome_auth", "true");
    showToast(`Xoş gəldiniz, ${user}!`);
  } else {
    showToast("İstifadəçi adı və ya parol yanlışdır!");
  }
});

// 3. Çıxış etmə (Logout)
logoutBtn?.addEventListener("click", () => {
  sessionStorage.removeItem("payhome_auth");
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
  registry: {
    title: "Ümumi Reyestr",
    subtitle: "Müştərilər, mülkiyyətçilər və tərəfdaşların ümumi reyestri"
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

  if (moduleId === "dashboard") {
    mainContent.innerHTML = `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">🏢</div>
          <div class="stat-info">
            <span class="stat-label">Ümumi Obyektlər</span>
            <span class="stat-value">148</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📝</div>
          <div class="stat-info">
            <span class="stat-label">Aktiv Müqavilələr</span>
            <span class="stat-value">94</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">💰</div>
          <div class="stat-info">
            <span class="stat-label">Aylıq Dövriyyə</span>
            <span class="stat-value">124,500 ₼</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">⏳</div>
          <div class="stat-info">
            <span class="stat-label">Gözləyən Ödənişlər</span>
            <span class="stat-value">18,200 ₼</span>
          </div>
        </div>
      </div>

      <div class="dashboard-sections">
        <div class="table-card">
          <div class="table-card-head">
            <h3>Son Müqavilələr və Əməliyyatlar</h3>
            <span class="badge badge-active">Canlı Məlumat</span>
          </div>
          <table class="erp-table">
            <thead>
              <tr>
                <th>Müqavilə №</th>
                <th>Obyekt / Sahə</th>
                <th>Müştəri</th>
                <th>Məbləğ</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>#PH-2026-081</strong></td>
                <td>Bina A, Mənzil 42</td>
                <td>Əli Məmmədov</td>
                <td>85,000 ₼</td>
                <td><span class="badge badge-active">Aktiv</span></td>
              </tr>
              <tr>
                <td><strong>#PH-2026-080</strong></td>
                <td>Bina B, Obyekt 3 (Qeyri-yaşayış)</td>
                <td>Rəşad Quliyev</td>
                <td>142,000 ₼</td>
                <td><span class="badge badge-active">Aktiv</span></td>
              </tr>
              <tr>
                <td><strong>#PH-2026-079</strong></td>
                <td>Bina C, Mənzil 108</td>
                <td>Nigar Həsənova</td>
                <td>67,500 ₼</td>
                <td><span class="badge badge-pending">Gözləmədə</span></td>
              </tr>
              <tr>
                <td><strong>#PH-2026-078</strong></td>
                <td>Bina A, Mənzil 15</td>
                <td>Samir Əliyev</td>
                <td>92,000 ₼</td>
                <td><span class="badge badge-active">Aktiv</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="table-card">
          <div class="table-card-head">
            <h3>Sürətli Bildirişlər</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 14px; font-size: 13px;">
            <div style="padding: 10px 12px; background: #f8faf9; border-radius: 8px; border-left: 3px solid var(--green-main);">
              <strong>Yeni Müqavilə:</strong> #PH-2026-081 təsdiqləndi.
              <div style="font-size: 11px; color: #788780; margin-top: 4px;">12 dəqiqə əvvəl</div>
            </div>
            <div style="padding: 10px 12px; background: #fffdf5; border-radius: 8px; border-left: 3px solid #d97706;">
              <strong>Ödəniş Xatırlatması:</strong> 3 müqavilə üzrə qrafik yaxınlaşır.
              <div style="font-size: 11px; color: #788780; margin-top: 4px;">1 saat əvvəl</div>
            </div>
            <div style="padding: 10px 12px; background: #f8faf9; border-radius: 8px; border-left: 3px solid var(--green-main);">
              <strong>Kassa Qalıqı:</strong> Günlük kassa hesabatı yeniləndi.
              <div style="font-size: 11px; color: #788780; margin-top: 4px;">Bugün, 09:30</div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
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
  }

  showToast(`${mod.title} bölməsinə keçildi.`);
}

mainNav?.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-module]");
  if (!btn) return;
  switchModule(btn.dataset.module);
});
