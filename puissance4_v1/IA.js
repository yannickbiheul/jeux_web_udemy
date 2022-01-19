let IA = {
    choixColonne() {
        let tabColonne = this.getTableauCellulesPossibles();
        return tabColonne[0];
    },

    getTableauCellulesPossibles: function() {
        let tabColonne = [];
    },
}