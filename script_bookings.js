
document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-form');
    const emailInput = document.getElementById('email');

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        } else {
            // Hier kannst du den Code zum Senden der Buchungsanfrage einfügen
            alert('Ihre Buchungsanfrage wurde gesendet.');
            bookingForm.reset();
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@(?:[a-zA-Z0-9.-]+\.(?:ch|com))$/;
        return emailPattern.test(email);
    }
});
