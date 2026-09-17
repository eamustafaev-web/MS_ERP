/* ==========================================================================
   MW MMC — ERP TƏMİZ JAVASCRIPT BAZASI (v3.0)
   ========================================================================== */

// DOM Elementləri
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const mainNav = document.getElementById("mainNav");
const mainContent = document.getElementById("mainContent");
const toast = document.getElementById("toast");

// Sadə modullar konfiqurasiyası
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

// Modula keçid funksiyası
function switchModule(moduleId) {
  const mod = modules[moduleId];
  if (!mod) return;

  // Başlıqları yenilə
  pageTitle.textContent = mod.title;
  pageSubtitle.textContent = mod.subtitle;

  // Düymə aktivliyini yenilə
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.module === moduleId);
  });

  // Əgər Obyektlər moduludursa, baza məlumatı göstər
  if (moduleId === "properties") {
    mainContent.innerHTML = `
      <div class="welcome-card card">
        <div class="welcome-icon">🏢</div>
        <h2>Obyektlər və Zəncir Modulu (Addım 1)</h2>
        <p>Baza naviqasiya işləkdir. Növbəti addımda bu sahəyə <strong>Binaların Qovluq Ağacı</strong> və ya <strong>Cədvəl</strong> əlavə edəcəyik.</p>
        <div class="step-status-box">
          <span>Hazırki Addım:</span>
          <strong>1-ci Addım təsdiqini gözləyir</strong>
        </div>
      </div>
    `;
  } else {
    mainContent.innerHTML = `
      <div class="welcome-card card">
        <div class="welcome-icon">📊</div>
        <h2>${mod.title}</h2>
        <p>${mod.subtitle}</p>
        <div class="step-status-box">
          <span>Status:</span>
          <strong>Bu modul növbəti mərhələlərdə doldurulacaq</strong>
        </div>
      </div>
    `;
  }

  showToast(`${mod.title} bölməsinə keçid edildi.`);
}

// Naviqasiya klikləri
mainNav.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-module]");
  if (!btn) return;
  switchModule(btn.dataset.module);
});

// Konsolda status
console.log("MW ERP v3.0 baza təmiz şəkildə işə salındı.");
