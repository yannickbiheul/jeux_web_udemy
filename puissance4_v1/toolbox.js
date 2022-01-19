// let readline = require("readline-sync");

let toolbox = {
    /**
     * Permet de saisir une chaine de caractères
     * @param {String} txt 
     * @returns 
     */
    // saisieString: function(txt) {
    //     return readline.question(txt);
    // },
    /**
     * Permet d'initialiser un tableau de tableaux en fonction d'un nombre de lignes et de colonnes passés en paramètres
     * @param {Number} nbLignes 
     * @param {Number} nbColonnes 
     * @param {*} car 
     * @returns 
     */
    initialiserTableauVide: function(nbLignes, nbColonnes, car = '') {
        let tab = [];
        for (let i = 0; i < nbLignes; i++) {
            let ligne = [];
            for (let j = 0; j < nbColonnes; j++) {
                ligne.push(car);
            }
            tab.push(ligne);
        }
        return tab;
    },
}

// module.exports = toolbox;