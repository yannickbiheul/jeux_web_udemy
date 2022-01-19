// let toolbox = require("./toolbox.js");

let jeu = {
    puissance4: [],
    nbColonnes: 7,
    nbLignes: 6,
    joueur1car: "X",
    joueur2car: "O",

    /**
     * Permet d'initialiser le jeu
     */
    initialisation: function() {
        this.puissance4 = toolbox.initialiserTableauVide(this.nbLignes, this.nbColonnes, 0);
    },

    /**
     * Permet d'afficher un tableau de puissance 4
     */
    afficherPuissance4: function() {
        const jeu = document.querySelector("#jeu");
        jeu.innerHTML = "";

        let content = "<table>";
        for (let i = 0; i < this.nbLignes; i++) {
            content += "<tr>";
            for (let j = 0; j < this.nbColonnes; j++) {
                content += "<td class='border text-center' style='width:75px;height:75px;'>";
                if (this.puissance4[i][j] === 0) {
                    content += "";
                } else if (this.puissance4[i][j] === 1) {
                    content += "<img src='images/J1.png' class='bg-success rounded-circle' style='width:50px;height:50px;'>";
                } else if (this.puissance4[i][j] === 2) {
                    content += "<img src='images/J2.png' class='bg-danger rounded-circle' style='width:50px;height:50px;'>";
                }
                content += "</td>";
            }
            content += "</tr>";
        }
        content += "<tr>";
        
        content += "<td><button type='button' class='btn btn-secondary' onClick='jouer(1)'>Colonne 1</button></td>";
        content += "<td><button type='button' class='btn btn-secondary' onClick='jouer(2)'>Colonne 2</button></td>";
        content += "<td><button type='button' class='btn btn-secondary' onClick='jouer(3)'>Colonne 3</button></td>";
        content += "<td><button type='button' class='btn btn-secondary' onClick='jouer(4)'>Colonne 4</button></td>";
        content += "<td><button type='button' class='btn btn-secondary' onClick='jouer(5)'>Colonne 5</button></td>";
        content += "<td><button type='button' class='btn btn-secondary' onClick='jouer(6)'>Colonne 6</button></td>";
        content += "<td><button type='button' class='btn btn-secondary' onClick='jouer(7)'>Colonne 7</button></td>";
        content += "</tr>";
        content += "</table>";
        jeu.innerHTML = content;
    },
    /**
     * Affiche le caractère du joueur dans la case
     * @param {*} joueur 
     * @param {*} ligne 
     * @param {*} colonne 
     */
    jouerCase: function(joueur, ligne, colonne) {
        this.puissance4[ligne][colonne-1] = joueur;
    },

    /**
     * Fonction permettant de retourner la 1ère ligne vide d'une colonne.
     * @param {Number} colonne retourne -1 si la colonne est pleine
     * @returns 
     */
    retournerLigneCaseVideColonne: function(colonne) {
        for (let i = this.nbLignes-1; i >= 0; i--) {
            if (this.verifCaseVide(i, colonne)) return i;
        }
        return -1;
    },

    /**
     * Fonction permettant de retourner si une cellule est vide (retourne true / false)
     * @param {Number} ligne 
     * @param {Number} colonne 
     * @returns 
     */
    verifCaseVide: function(ligne, colonne) {
        return this.puissance4[ligne][colonne-1] === 0;
    },

    /**
     * Fonction permettant de saisir une colonne
     * @returns 
     */
    saisirColonne: function() {
        return parseInt(toolbox.saisieString("Quelle colonne ? : "));
    },

    /**
     * Fonction permettant de vérifier si un joueur a gagné
     * @param {Number} joueur 
     * @returns 
     */
    verificationFinJeu: function(joueur) {
        if (this.verificationLigneFinJeu(joueur) || this.verificationColonneFinJeu(joueur) || this.verificationDiagonaleFinJeu(joueur)) {
            return true;
        }
        return false;
    },

    /**
     * Fonction permettant de vérifier si un joueur a gagné sur une ligne
     * @param {Number} joueur 
     * @returns 
     */
    verificationLigneFinJeu: function(joueur) {
        for (let i = this.nbLignes-1; i >= 0; i--) {
            for (let j = 0; j < this.nbColonnes-3; j++) {
                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i][j+1] === joueur &&
                    this.puissance4[i][j+2] === joueur &&
                    this.puissance4[i][j+3] === joueur) {
                    return true;
                }
            }
        }
        return false;
    },

    /**
     * Fonction permettant de vérifier si un joueur a gagné en colonne
     * @param {*} joueur 
     * @returns 
     */
    verificationColonneFinJeu: function(joueur) {
        for (let i = 0; i < this.nbColonnes; i++) {
            for (let j = this.nbLignes-4; j >= 0; j--) {
                if (this.puissance4[j][i] === joueur &&
                    this.puissance4[j+1][i] === joueur &&
                    this.puissance4[j+2][i] === joueur &&
                    this.puissance4[j+3][i] === joueur) {
                    return true;
                }
            }
        }
    },

    /**
     * Fonction permettant de vérifier si un joueur a gagné en diagonale
     * @param {*} joueur 
     * @returns 
     */
    verificationDiagonaleFinJeu: function(joueur) {
        for (let i = this.nbLignes-1; i >= 3; i--) {
            for (let j = 0; j < this.nbColonnes; j++) {
                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i-1][j+1] === joueur &&
                    this.puissance4[i-2][j+2] === joueur &&
                    this.puissance4[i-3][j+3] === joueur) {
                    return true;
                }
                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i-1][j-1] === joueur &&
                    this.puissance4[i-2][j-2] === joueur &&
                    this.puissance4[i-3][j-3] === joueur) {
                    return true;
                }
            }
        }
        return false;
    },
}

// module.exports = jeu;