document.addEventListener('DOMContentLoaded', function () {
    const langButtons = document.querySelectorAll('.lang-button');
    const langContents = document.querySelectorAll('.lang-content');

    // Verberge alle Sprachinhalte außer dem englischen Inhalt zu Beginn
    langContents.forEach(content => {
        const lang = content.getAttribute('data-lang');
        if (lang !== 'en') {
            content.style.display = 'none';
        }
    });

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deaktiviere die aktive Klasse für alle Sprachbuttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedLang = button.getAttribute('data-lang');

            // Verberge alle Sprachinhalte und zeige nur den ausgewählten Inhalt
            langContents.forEach(content => {
                content.style.display = 'none';
                if (content.getAttribute('data-lang') === selectedLang) {
                    content.style.display = 'block';
                }
            });
        });
    });

    // Standardmäßig Englisch auswählen
    langButtons[0].click();
});
