const messageJ1 = document.querySelector("#j1");
const messageJ2 = document.querySelector("#j2");
const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");
let joueurEnCours = 1;
let finJeu = false;
let pointsJ1 = 0;
let pointsJ2 = 0;

initialisationTableau();

function jouer(colonne) {
    if (!finJeu) {
        let ligneVide = jeu.retournerLigneCaseVideColonne(colonne);

        if (ligneVide !== -1) {
            jeu.jouerCase(joueurEnCours, ligneVide, colonne);
            jeu.afficherPuissance4();
            if (jeu.verificationFinJeu(joueurEnCours)) {
                gererFinJeu();
            }

            if (joueurEnCours === 1) {
                joueurEnCours = 2;
                tour.innerHTML = "Tour du joueur 2";
            } else {
                joueurEnCours = 1;
                tour.innerHTML = "Tour du joueur 1";
            }
        }
    }
    
}

function initialisationTableau() {
    finJeu = false;
    joueurEnCours = 1;
    alert.classList.add("d-none");
    let contentJ1 = "<img src='images/J1.png' class='bg-success rounded-circle' style='width:50px;height:50px;'></br>";
    contentJ1 += pointsJ1;
    messageJ1.innerHTML = contentJ1;
    let contentJ2 = "<img src='images/J2.png' class='bg-danger rounded-circle' style='width:50px;height:50px;'></br>";
    contentJ2 += pointsJ2;
    messageJ2.innerHTML = contentJ2;

    jeu.initialisation();
    jeu.afficherPuissance4();
}

function gererFinJeu() {
    finJeu = true;
    let contentAlert = "Partie terminée, le gagnant est le joueur " + joueurEnCours + " !</br>";
    contentAlert += '<button type="button" class="btn btn-primary" onClick="initialisationTableau()">Recommencer</button>';
    alert.innerHTML = contentAlert;
    alert.classList.remove("d-none");
    if (joueurEnCours === 1) {
        pointsJ1++;
    } else {
        pointsJ2++;
    }
}
