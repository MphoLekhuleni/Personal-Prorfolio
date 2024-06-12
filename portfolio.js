document.addEventListener('DOMContentLoaded', function() {
    // Navbar button click event listeners
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionName = link.textContent.trim().toLowerCase();
            redirectToPage(sectionName);
        });
    });

    // Social media icons click event listeners
    const socialIcons = document.querySelectorAll('.home-sci a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            const href = icon.getAttribute('href');
            window.open(href, '_blank');
        });
    });

    // Function to handle page redirections
    function redirectToPage(page) {
        switch(page) {
            case 'home':
                window.location.href = 'home.html';
                break;
            case 'about':
                window.location.href = 'about.html';
                break;
            /*case 'services':
                window.location.href = 'services.html';
                break;*/
            case 'portfolio':
                window.location.href = 'portfolio.html';
                break;
            case 'contact':
                window.location.href = 'contact.html';
                break;
            default:
                console.error('Unknown page: ' + page);
        }
    }
});
