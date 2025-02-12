// index.js

/**
 * Convertit le tableau 'queens' en une représentation visuelle de l'échiquier.
 * @param {number[]} queens - Tableau où queens[i] représente la colonne de la reine à la ligne i.
 * @param {number} n - Taille de l'échiquier.
 * @returns {string[]} - Plateau sous forme de tableau de chaînes.
 */
function formatSolution(queens, n) {
    const board = [];
    for (let i = 0; i < n; i++) {
        let rowStr = '';
        for (let j = 0; j < n; j++) {
            rowStr += (j === queens[i] ? '#' : 'O');
        }
        board.push(rowStr);
    }
    return board;
}

/**
 * Vérifie si la position (row, col) est sûre par rapport aux reines déjà placées.
 * @param {number[]} queens - Tableau des positions des reines déjà placées.
 * @param {number} row - Ligne où placer la nouvelle reine.
 * @param {number} col - Colonne où placer la nouvelle reine.
 * @returns {boolean} - true si la position est sûre, false sinon.
 */
function isSafe(queens, row, col) {
    for (let i = 0; i < row; i++) {
        if (queens[i] === col || Math.abs(row - i) === Math.abs(col - queens[i])) {
            return false;
        }
    }
    return true;
}

/**
 * Résout le problème des N-Dames.
 * Pour n = 1, retourne directement [["#"]].
 * Pour n > 1, prépare la structure de backtracking.
 * @param {number} n - Taille de l'échiquier (nombre de dames).
 * @returns {string[][]} - Tableau de solutions.
 */
function solveNQueens(n) {
    if (n === 1) {
        return [['#']];
    }
    const solutions = [];
    const queens = new Array(n).fill(-1);

    // Squelette de la fonction backtracking
    function backtrack(row) {
        if (row === n) {
            // Quand toutes les reines sont placées, ajouter la solution formatée.
            solutions.push(formatSolution(queens, n));
            return;
        }
        // Parcourir toutes les colonnes de la ligne row (pour l'instant, boucle vide)
        for (let col = 0; col < n; col++) {
            // TODO: Implémenter la logique de placement
            // Par exemple, ici nous pourrions simplement écrire un commentaire.
        }
    }

    backtrack(0);
    return solutions;
}

// Interface en ligne de commande (si exécuté directement)
if (require.main === module) {
    const input = process.argv[2];
    if (!input) {
        console.log("Usage: node index.js <N>");
        process.exit(1);
    }
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log("Veuillez entrer un entier positif pour N.");
        process.exit(1);
    }
    const solutions = solveNQueens(n);
    console.log(`Nombre de solutions trouvées pour N = ${n} : ${solutions.length}\n`);
    solutions.forEach((solution, index) => {
        console.log(`Solution ${index + 1} :`);
        solution.forEach(line => console.log(line));
        console.log("");
    });
}

// Exporter les fonctions pour les tests
module.exports = solveNQueens;
module.exports.formatSolution = formatSolution;
module.exports.isSafe = isSafe;
