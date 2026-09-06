
const medicineGrid = document.getElementById("medicineGrid");
const searchInput = document.getElementById("medicineSearch");
const categoryFilter = document.getElementById("categoryFilter");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("medicineModal");
const modalContent = document.getElementById("modalContent");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");

function populateCategories() {
  [...new Set(medicines.map(m => m.category))].sort().forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function renderMedicines(list) {
  medicineGrid.innerHTML = "";
  emptyState.classList.toggle("hidden", list.length !== 0);

  list.forEach(med => {
    const card = document.createElement("article");
    card.className = "medicine-card reveal visible";
    card.tabIndex = 0;
    card.innerHTML = `
      <span class="med-badge">${med.category}</span>
      <h3>${med.name}</h3>
      <div class="generic">${med.generic}</div>
      <p>${med.summary}</p>
      <div class="card-footer"><span>View details</span><span>→</span></div>
    `;
    card.addEventListener("click", () => openMedicine(med.id));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") openMedicine(med.id);
    });
    medicineGrid.appendChild(card);
  });
}

function filterMedicines() {
  const q = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = medicines.filter(m =>
    (category === "all" || m.category === category) &&
    [m.name, m.generic, m.category, m.summary].join(" ").toLowerCase().includes(q)
  );
  renderMedicines(filtered);
}

function openMedicine(id) {
  const med = medicines.find(m => m.id === id);
  if (!med) return;
  modalContent.innerHTML = `
    <div class="modal-title">
      <span class="med-badge">${med.category}</span>
      <h2 id="modalTitle">${med.name}</h2>
      <p>${med.generic}</p>
    </div>
    <div class="modal-section">
      <h4>What it is commonly used for</h4>
      <p>${med.summary}</p>
      <ul>${med.uses.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
    <div class="modal-section precaution-box">
      <h4>Important precautions</h4>
      <ul>${med.precautions.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
    <div class="modal-section">
      <h4>Possible side effects</h4>
      <ul>${med.sideEffects.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
    <div class="modal-section">
      <h4>General note</h4>
      <p>${med.note}</p>
    </div>
    <div class="modal-section">
      <p><strong>Reminder:</strong> This page is educational and does not replace advice from a doctor or pharmacist.</p>
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

searchInput.addEventListener("input", filterMedicines);
categoryFilter.addEventListener("change", filterMedicines);

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = document.querySelectorAll(".section-anchor");
const navItems = document.querySelectorAll(".nav-link");

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(s => activeObserver.observe(s));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:chmpadevi080@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});

document.getElementById("year").textContent = new Date().getFullYear();
populateCategories();
renderMedicines(medicines);
