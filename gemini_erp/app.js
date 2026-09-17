const store = {
  kpis: [
    { label: "Aktiv layihə", value: "12" },
    { label: "Satışa çıxarılan əmlak", value: "48" },
    { label: "Aylıq daxilolma", value: "286 400 ₼" },
    { label: "Açıq öhdəlik", value: "94 120 ₼" }
  ],
  projects: [
    { code: "MW-24-01", name: "Nərimanov Residence", address: "Bakı, Nərimanov", budget: "4.8 mln ₼", status: "İcra", progress: 72 },
    { code: "MW-24-04", name: "Gəncə Business Hub", address: "Gəncə, Kəpəz", budget: "2.1 mln ₼", status: "Layihələndirmə", progress: 28 },
    { code: "MW-25-02", name: "Sumqayıt Park Houses", address: "Sumqayıt", budget: "6.4 mln ₼", status: "İcra", progress: 54 },
    { code: "MW-25-07", name: "MW Loft Yasamal", address: "Bakı, Yasamal", budget: "1.9 mln ₼", status: "Təhvil", progress: 91 }
  ],
  propertyFeed: [
    { title: "2 otaqlı, Nərimanov", meta: "Satıldı · 178 000 ₼" },
    { title: "Ofis 86 m², Gəncə", meta: "İcarəyə verildi" },
    { title: "Park Houses, A blok", meta: "Bron edildi" },
    { title: "Loft 41 m²", meta: "Qiymət yeniləndi" }
  ],
  properties: [
    { title: "NR-A-12", kind: "Mənzil", status: "Satışda", detail: "68 m² · 3/12 mərtəbə · 164 000 ₼" },
    { title: "GBH-204", kind: "Ofis", status: "İcarədə", detail: "112 m² · 24 ay müqavilə" },
    { title: "PH-B-07", kind: "Mənzil", status: "Bron", detail: "51 m² · ilkin ödəniş alındı" },
    { title: "Yasamal Loft 3", kind: "Studio", status: "Satışda", detail: "39 m² · 96 500 ₼" },
    { title: "Anbar Xırdalan", kind: "Obyekt", status: "Şirkət aktivi", detail: "840 m² · öz istifadə" },
    { title: "NR-C-parking", kind: "Parkinq", status: "Satışda", detail: "12 yer · paket satış" }
  ],
  contracts: [
    { no: "MQ-118", party: "Əliyev Rəşad", type: "Alqı-satqı", amount: "164 000 ₼", term: "2026-11", status: "Aktiv" },
    { no: "MQ-121", party: "Caspian Fit MMC", type: "İcarə", amount: "2 400 ₼/ay", term: "2027-03", status: "Aktiv" },
    { no: "MQ-090", party: "Qaya İnşaat", type: "Podrat", amount: "780 000 ₼", term: "2026-12", status: "İcra" },
    { no: "MQ-077", party: "Şərq Metal", type: "Təchizat", amount: "54 300 ₼", term: "2026-09", status: "Bağlanıb" }
  ],
  financeKpis: [
    { label: "Kassa / bank", value: "412 900 ₼" },
    { label: "Bu ay xərc", value: "67 450 ₼" },
    { label: "Gözləyən ödəniş", value: "18 200 ₼" }
  ],
  finance: [
    { date: "16.09.2026", desc: "Müştəri ilkin ödənişi", account: "Kapital Bank", amount: "+35 000 ₼" },
    { date: "15.09.2026", desc: "Armatura tədarükü", account: "Anbar xərci", amount: "-12 480 ₼" },
    { date: "14.09.2026", desc: "Əmək haqqı avansı", account: "Kadrlar", amount: "-9 600 ₼" },
    { date: "12.09.2026", desc: "İcarə daxilolması", account: "Əmlak", amount: "+2 400 ₼" }
  ],
  warehouse: [
    { sku: "CEM-42.5", name: "Portland sement", warehouse: "Xırdalan", qty: 240, unit: "ton", min: 80 },
    { sku: "ARM-12", name: "Armatura 12 mm", warehouse: "Sahə anbarı", qty: 18, unit: "ton", min: 12 },
    { sku: "BLK-200", name: "Qazobeton blok", warehouse: "Xırdalan", qty: 6200, unit: "ədəd", min: 2000 },
    { sku: "PNT-INT", name: "Daxili boya", warehouse: "Yasamal", qty: 90, unit: "vedrə", min: 40 }
  ],
  hr: [
    { name: "Nigar Məmmədova", role: "Layihə meneceri", site: "Nərimanov Residence" },
    { name: "Elvin Quliyev", role: "Sahə mühəndisi", site: "Park Houses" },
    { name: "Aysel Hüseynova", role: "Əmlak brokeri", site: "Satış ofisi" },
    { name: "Kamran İsmayılov", role: "Mühasib", site: "Baş ofis" }
  ],
  partners: [
    { name: "Qaya İnşaat", category: "Podratçı", contact: "050 111 22 33", project: "MW-24-01", rating: "4.6" },
    { name: "Şərq Metal", category: "Təchizatçı", contact: "055 900 10 10", project: "MW-25-02", rating: "4.8" },
    { name: "Caspian Fit MMC", category: "İcarəçi", contact: "012 310 45 00", project: "GBH-204", rating: "4.4" },
    { name: "Urban Design Studio", category: "Memar", contact: "051 222 08 08", project: "MW-24-04", rating: "4.9" }
  ],
  reports: [
    { title: "Tikinti irəliləyişi", detail: "Həftəlik fiziki həcm və kənaraçıxma" },
    { title: "Əmlak satış hunisi", detail: "Lead → baxış → bron → akt" },
    { title: "Pul axını", detail: "Daxilolma, xərc və kassa qalığı" },
    { title: "Material sərfiyyatı", detail: "Normativə qarşı faktiki silinmə" }
  ]
};

const els = {
  nav: document.getElementById("mainNav"),
  title: document.getElementById("pageTitle"),
  subtitle: document.getElementById("pageSubtitle"),
  sidebar: document.getElementById("sidebar"),
  menuToggle: document.getElementById("menuToggle"),
  search: document.getElementById("globalSearch"),
  toast: document.getElementById("toast")
};

function statusBadge(status) {
  const warn = ["Layihələndirmə", "Bron", "İcra"].includes(status);
  const idle = ["Bağlanıb", "Təhvil"].includes(status);
  const cls = idle ? "idle" : warn ? "warn" : "";
  return `<span class="badge ${cls}">${status}</span>`;
}

function progressBar(value) {
  return `<div class="progress" title="${value}%"><i style="width:${value}%"></i></div>`;
}

function fillKpis(targetId, items) {
  document.getElementById(targetId).innerHTML = items
    .map((item) => `<article class="kpi"><span>${item.label}</span><strong>${item.value}</strong></article>`)
    .join("");
}

function renderDashboard() {
  fillKpis("kpiGrid", store.kpis);
  document.getElementById("dashProjects").innerHTML = store.projects
    .map(
      (p) => `<tr>
        <td>${p.name}</td>
        <td>${p.address}</td>
        <td>${statusBadge(p.status)}</td>
        <td>${progressBar(p.progress)}</td>
      </tr>`
    )
    .join("");
  document.getElementById("propertyFeed").innerHTML = store.propertyFeed
    .map((item) => `<li><span>${item.title}</span><span class="muted">${item.meta}</span></li>`)
    .join("");
}

function renderProjects() {
  document.getElementById("projectsTable").innerHTML = store.projects
    .map(
      (p) => `<tr>
        <td>${p.code}</td>
        <td>${p.name}</td>
        <td>${p.address}</td>
        <td>${p.budget}</td>
        <td>${statusBadge(p.status)}</td>
        <td>${progressBar(p.progress)}</td>
      </tr>`
    )
    .join("");
}

function renderProperties() {
  document.getElementById("propertyCards").innerHTML = store.properties
    .map(
      (item) => `<article class="property-card">
        <h3>${item.title}</h3>
        <p>${item.kind} · ${item.status}</p>
        <p>${item.detail}</p>
      </article>`
    )
    .join("");
}

function renderContracts() {
  document.getElementById("contractsTable").innerHTML = store.contracts
    .map(
      (c) => `<tr>
        <td>${c.no}</td>
        <td>${c.party}</td>
        <td>${c.type}</td>
        <td>${c.amount}</td>
        <td>${c.term}</td>
        <td>${statusBadge(c.status)}</td>
      </tr>`
    )
    .join("");
}

function renderFinance() {
  fillKpis("financeKpis", store.financeKpis);
  document.getElementById("financeTable").innerHTML = store.finance
    .map(
      (row) => `<tr>
        <td>${row.date}</td>
        <td>${row.desc}</td>
        <td>${row.account}</td>
        <td>${row.amount}</td>
      </tr>`
    )
    .join("");
}

function renderWarehouse() {
  document.getElementById("warehouseTable").innerHTML = store.warehouse
    .map(
      (row) => `<tr>
        <td>${row.sku}</td>
        <td>${row.name}</td>
        <td>${row.warehouse}</td>
        <td>${row.qty}</td>
        <td>${row.unit}</td>
        <td>${row.min}</td>
      </tr>`
    )
    .join("");
}

function renderHr() {
  document.getElementById("hrCards").innerHTML = store.hr
    .map(
      (person) => `<article class="person-card">
        <h3>${person.name}</h3>
        <p>${person.role}</p>
        <p>${person.site}</p>
      </article>`
    )
    .join("");
}

function renderPartners() {
  document.getElementById("partnersTable").innerHTML = store.partners
    .map(
      (p) => `<tr>
        <td>${p.name}</td>
        <td>${p.category}</td>
        <td>${p.contact}</td>
        <td>${p.project}</td>
        <td>${p.rating}</td>
      </tr>`
    )
    .join("");
}

function renderReports() {
  document.getElementById("reportGrid").innerHTML = store.reports
    .map(
      (r) => `<article class="report-card">
        <h3>${r.title}</h3>
        <p>${r.detail}</p>
      </article>`
    )
    .join("");
}

const renderers = {
  dashboard: renderDashboard,
  projects: renderProjects,
  properties: renderProperties,
  contracts: renderContracts,
  finance: renderFinance,
  warehouse: renderWarehouse,
  hr: renderHr,
  partners: renderPartners,
  reports: renderReports
};

function showToast(message) {
  els.toast.hidden = false;
  els.toast.textContent = message;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.hidden = true;
  }, 2200);
}

function openModule(moduleId) {
  document.querySelectorAll(".module").forEach((section) => {
    section.classList.toggle("is-visible", section.id === `module-${moduleId}`);
  });
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.module === moduleId);
  });
  const section = document.getElementById(`module-${moduleId}`);
  els.title.textContent = section.dataset.title;
  els.subtitle.textContent = section.dataset.subtitle;
  renderers[moduleId]();
  els.sidebar.classList.remove("is-open");
}

els.nav.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-module]");
  if (!btn) return;
  openModule(btn.dataset.module);
});

els.menuToggle.addEventListener("click", () => {
  els.sidebar.classList.toggle("is-open");
});

els.search.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const q = els.search.value.trim();
  if (!q) return;
  showToast(`Axtarış: “${q}” — nümunə məlumatlarda filtr növbəti mərhələdə bağlanacaq.`);
});

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "add-project") {
    showToast("Yeni layihə forması növbəti mərhələdə əlavə olunacaq.");
  }
});

openModule("dashboard");

const THEME_KEY = "mw-erp-theme";
const FONT_MAP = {
  Inter: '"Inter", "Segoe UI", sans-serif',
  Roboto: '"Roboto", "Segoe UI", sans-serif',
  Poppins: '"Poppins", "Segoe UI", sans-serif'
};
const DEFAULT_THEME = {
  bgColor: "#d7ddd9",
  bgImage: "",
  sidebarColor: "#0c2f24",
  font: "Inter"
};
const DEFAULT_BG_IMAGE =
  "radial-gradient(1200px 400px at 10% -10%, rgba(47, 138, 91, 0.18), transparent 50%), linear-gradient(180deg, #cfd6d2, var(--app-bg))";

function safeImageUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return "";
    return parsed.href;
  } catch {
    return "";
  }
}

function readTheme() {
  try {
    return { ...DEFAULT_THEME, ...JSON.parse(localStorage.getItem(THEME_KEY) || "{}") };
  } catch {
    return { ...DEFAULT_THEME };
  }
}

function applyTheme(theme) {
  const root = document.documentElement.style;
  const imageUrl = safeImageUrl(theme.bgImage);
  root.setProperty("--app-bg", theme.bgColor || DEFAULT_THEME.bgColor);
  root.setProperty("--app-bg-image", imageUrl ? `url("${imageUrl}")` : DEFAULT_BG_IMAGE);
  root.setProperty("--sidebar-bg", theme.sidebarColor || DEFAULT_THEME.sidebarColor);
  root.setProperty("--font-family", FONT_MAP[theme.font] || FONT_MAP.Inter);
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  applyTheme(theme);
}

function syncThemeForm(theme) {
  document.getElementById("bgColor").value = theme.bgColor;
  document.getElementById("bgImage").value = theme.bgImage;
  document.getElementById("sidebarColor").value = theme.sidebarColor;
  document.getElementById("fontFamily").value = FONT_MAP[theme.font] ? theme.font : "Inter";
}

function currentThemeFromForm() {
  return {
    bgColor: document.getElementById("bgColor").value,
    bgImage: document.getElementById("bgImage").value.trim(),
    sidebarColor: document.getElementById("sidebarColor").value,
    font: document.getElementById("fontFamily").value
  };
}

function persistFromForm() {
  saveTheme(currentThemeFromForm());
}

const settingsToggle = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");
const settingsBackdrop = document.getElementById("settingsBackdrop");

function setSettingsOpen(open) {
  settingsPanel.classList.toggle("is-open", open);
  settingsPanel.setAttribute("aria-hidden", String(!open));
  settingsToggle.setAttribute("aria-expanded", String(open));
  settingsBackdrop.hidden = !open;
}

settingsToggle.addEventListener("click", () => {
  setSettingsOpen(!settingsPanel.classList.contains("is-open"));
});
document.getElementById("settingsClose").addEventListener("click", () => setSettingsOpen(false));
settingsBackdrop.addEventListener("click", () => setSettingsOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setSettingsOpen(false);
});

["bgColor", "sidebarColor", "fontFamily"].forEach((id) => {
  document.getElementById(id).addEventListener("input", persistFromForm);
});
document.getElementById("bgImage").addEventListener("change", persistFromForm);
document.getElementById("clearBgImage").addEventListener("click", () => {
  document.getElementById("bgImage").value = "";
  persistFromForm();
});
document.getElementById("resetTheme").addEventListener("click", () => {
  syncThemeForm(DEFAULT_THEME);
  saveTheme({ ...DEFAULT_THEME });
  showToast("Standart görünüş bərpa olundu.");
});

const savedTheme = readTheme();
syncThemeForm(savedTheme);
applyTheme(savedTheme);

