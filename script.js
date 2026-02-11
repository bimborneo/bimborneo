function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Animasi Scroll Reveal Canggih
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Daftar elemen yang akan dikasih animasi saat di-scroll
const elemenAnimasi = document.querySelectorAll('.tech-card, .timeline-item, .scroll-animate');

elemenAnimasi.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)'; /* Elemen sembunyi 30px di bawah */
    el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'; /* Efek mulus */
    observer.observe(el);
});

function toggleDetail(element) {
    // Mencari pembungkus utama (timeline-item)
    const item = element.closest('.timeline-item');
    const content = item.querySelector('.detail-content');
    
    // Menambah/menghapus class 'active'
    item.classList.toggle('active');
    content.classList.toggle('active');
}