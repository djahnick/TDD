// index.js

/**
 * Stub de la fonction solveNQueens.
 * @param {number} n - Taille de l'échiquier (nombre de dames)
 * @returns {string[][]} - Tableau de solutions
 */
// index.js

function solveNQueens(n) {
    // Cas trivial : échiquier 1x1
    if (n === 1) {
        return [['#']];
    }
    return []; // Pour les autres valeurs, on ne fait rien pour l'instant
}

module.exports = solveNQueens;



