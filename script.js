// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Button hover effects
document.querySelectorAll(".btn, .card a").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // 1. Smooth scroll to the TOP of the page (the Hero section)
        // This prevents it from jumping halfway down the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // 2. Select the buttons to highlight
        const messengerBtn = document.querySelector('.messenger-btn');
        const whatsappBtn = document.querySelector('.whatsapp-btn');

        // 3. Add the highlight class after a short delay (once scrolling starts)
        setTimeout(() => {
            messengerBtn.classList.add('contact-highlight');
            whatsappBtn.classList.add('contact-highlight');

            // 4. Remove the class after animation finishes (3 seconds)
            setTimeout(() => {
                messengerBtn.classList.remove('contact-highlight');
                whatsappBtn.classList.remove('contact-highlight');
            }, 3000);
        }, 500);
    });
});

// Keep your other scroll reveal logic below if you have any