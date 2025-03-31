// Fonction qui démarre l'animation de clignotement au chargement de la page
window.onload = function() {
    var alertBox = document.getElementById("alertBox");
    // Ajouter la classe d'animation au panneau d'alerte
    alertBox.classList.add("blink-animation");

    // Pour arrêter l'animation après 10 secondes
    setTimeout(function() {
        alertBox.classList.remove("blink-animation");
    }, 10000); // L'animation s'arrête après 10 secondes
};

