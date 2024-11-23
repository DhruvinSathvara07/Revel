//OFF CANVAS
document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.querySelector(".navbar-toggler");
    const offcanvas = document.getElementById("offcanvasExample");

    toggler.addEventListener("click", () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
            offcanvasInstance.show();
        }
    });
});


