(() => {
  const preloader = document.querySelector("[data-chessent-preloader]");

  if (!preloader) {
    return;
  }

  let isClosed = false;

  const closePreloader = () => {
    if (isClosed) {
      return;
    }

    isClosed = true;
    preloader.classList.add("is-hidden");

    window.setTimeout(() => {
      preloader.remove();
    }, 650);
  };

  if (document.readyState === "complete") {
    window.setTimeout(closePreloader, 120);
  } else {
    window.addEventListener("load", () => {
      window.setTimeout(closePreloader, 180);
    }, { once: true });

    window.setTimeout(closePreloader, 4000);
  }

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      closePreloader();
    }
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const inquiryForm = document.querySelector("[data-chessent-inquiry]");

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(inquiryForm);
      const name = formData.get("name") || "";
      const phone = formData.get("phone") || "";
      const email = formData.get("email") || "";
      const service = formData.get("service") || "";
      const message = formData.get("message") || "";

      const subject = encodeURIComponent(`Website enquiry from ${name || "CHESS visitor"}`);
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email}`,
          `Service / concern: ${service}`,
          "",
          "Message:",
          message
        ].join("\n")
      );

      window.location.href = `mailto:chessentskullbase@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  const assignAnimations = (selector, animations, options = {}) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {
      if (element.hasAttribute("data-aos")) {
        return;
      }

      const animation = Array.isArray(animations)
        ? animations[index % animations.length]
        : animations;

      element.setAttribute("data-aos", animation);
      element.setAttribute("data-aos-delay", String((options.baseDelay || 0) + (index * (options.step || 70))));
      element.setAttribute("data-aos-duration", String(options.duration || 760));
      element.setAttribute("data-aos-easing", options.easing || "ease-out-cubic");
      element.setAttribute("data-aos-anchor-placement", options.anchorPlacement || "top-bottom");
    });
  };

  assignAnimations(".page-hero .section-kicker", "fade-down", { duration: 620 });
  assignAnimations(".page-hero .section-heading", "fade-right", { baseDelay: 60, duration: 760 });
  assignAnimations(".page-hero .breadcrumb", "fade-up", { baseDelay: 120, duration: 620 });

  assignAnimations(".hero8-section-area .chessent-hero-eyebrow", "fade-down", { duration: 620 });
  assignAnimations(".hero8-section-area .hero-header-area h1", "fade-right", { baseDelay: 60, duration: 840 });
  assignAnimations(".hero8-section-area .hero-header-area p", "fade-up", { baseDelay: 120, duration: 760 });
  assignAnimations(".hero8-section-area .chessent-hero-actions", "fade-up", { baseDelay: 180, duration: 720 });
  assignAnimations(".hero8-section-area .chessent-hero-image-frame", "zoom-in", { duration: 820 });
  assignAnimations(".hero8-section-area .chessent-hero-trust-card", "fade-left", { baseDelay: 120, duration: 760 });

  assignAnimations(".chessent-about-feature-card", ["fade-right", "fade-up", "fade-right"], { duration: 720 });
  assignAnimations(".contact-card", ["fade-right", "fade-left"], { duration: 760 });
  assignAnimations(".contact-value-section .surface-card", ["fade-up", "zoom-in-up", "fade-up"], { duration: 720 });
  assignAnimations(".service-card", ["fade-up", "fade-up", "zoom-in-up"], { duration: 720 });
  assignAnimations(".team-card", ["zoom-in", "zoom-in-up", "zoom-in"], { duration: 720 });
  assignAnimations(".team-support-card", ["fade-up", "fade-up", "fade-up", "zoom-in-up"], { duration: 720 });
  assignAnimations(".testimonial-card, .chessent-testimonial-card", ["fade-up", "fade-left", "fade-right"], { duration: 760 });
  assignAnimations(".faq-card, .accordion-item", "fade-up", { duration: 680, step: 55 });
  assignAnimations(".gallery-card", ["zoom-in", "zoom-in-up", "zoom-in"], { duration: 700, step: 45 });
  assignAnimations(".chessent-video-card, .video-card", ["fade-up", "zoom-in-up", "fade-up"], { duration: 720 });
  assignAnimations(".support-card", ["fade-up", "fade-left", "fade-right"], { duration: 720 });
  assignAnimations(".chessent-why-point", ["fade-right", "fade-up"], { duration: 720 });
  assignAnimations(".value-stack .surface-card", ["fade-up", "zoom-in-up", "fade-up"], { duration: 700 });
  assignAnimations(".mosaic-grid .media-shell, .split-panel .media-shell", ["zoom-in", "fade-left", "fade-up"], { duration: 760 });
  assignAnimations(".map-shell", "zoom-in", { duration: 760 });
  assignAnimations(".chessent-footer-cta-main", "fade-right", { duration: 780 });
  assignAnimations(".chessent-footer-cta-side", "fade-left", { baseDelay: 80, duration: 780 });
  assignAnimations(".chessent-footer-grid > *", ["fade-up", "fade-up", "fade-up", "fade-up"], { duration: 700, step: 70 });

  if (window.AOS) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.AOS.init({
      disable: prefersReducedMotion,
      once: true,
      duration: 760,
      offset: 36,
      easing: "ease-out-cubic",
      mirror: false,
      startEvent: "DOMContentLoaded"
    });

    window.setTimeout(() => {
      window.AOS.refreshHard();
    }, 80);
  }
});
