document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  const faqButtons = document.querySelectorAll(".faq-toggle");
  const revealTargets = document.querySelectorAll(".fade-up");
  const applyForm = document.querySelector("#apply-form");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      event.preventDefault();
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (nav && nav.classList.contains("active")) {
        nav.classList.remove("active");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (applyForm) {
    applyForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const fullName = applyForm.fullName.value.trim();
      const email = applyForm.email.value.trim();
      const phone = applyForm.phone.value.trim();
      const interest = applyForm.interest.value;
      const messageText = applyForm.message.value.trim();

      if (!fullName || !email || !phone || !messageText) {
        alert("Please complete all fields before sending your application.");
        return;
      }

      const message = `Hello Unity Schools admissions team,%0A%0A` +
        `Name: ${fullName}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A` +
        `Interested campus: ${interest}%0A%0A` +
        `Message: ${messageText}`;

      const whatsappUrl = `https://wa.me/263785610035?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      item.classList.toggle("open");
    });
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observerInstance.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealTargets.forEach((element) => observer.observe(element));
});