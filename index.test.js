// index.test.js

const solveNQueens = require('./index');
const { formatSolution, isSafe } = require('./index');

describe('N-Queens Problem', () => {
    test('La fonction solveNQueens existe', () => {
        expect(typeof solveNQueens).toBe('function');
    });

    test('Devrait retourner 1 solution pour n = 1', () => {
        const solutions = solveNQueens(1);
        expect(Array.isArray(solutions)).toBe(true);
        expect(solutions.length).toBe(1);
        expect(solutions[0]).toEqual(['#']);
    });
});

describe('Format Solution', () => {
    test('Formatte correctement un plateau pour [1, 3, 0, 2] et n = 4', () => {
        const queens = [1, 3, 0, 2];
        const expectedBoard = [
            "O#OO",
            "OOO#",
            "#OOO",
            "OO#O"
        ];
        expect(formatSolution(queens, 4)).toEqual(expectedBoard);
    });
});

describe('isSafe function', () => {
    test('Retourne true si la position est sûre', () => {
        // Exemple : Une reine à la ligne 0, colonne 1.
        const queens = [1];
        // Pour la ligne 1, colonne 3 ne partage ni la même colonne ni la diagonale.
        expect(isSafe(queens, 1, 3)).toBe(true);
    });

    test('Retourne false pour la même colonne', () => {
        const queens = [1];
        // Essayer de placer une reine en (1,1) échoue car la colonne 1 est déjà occupée.
        expect(isSafe(queens, 1, 1)).toBe(false);
    });

    test('Retourne false pour une position en diagonale', () => {
        const queens = [1];
        // Essayer de placer une reine en (1,0) échoue car (0,1) et (1,0) sont en diagonale.
        expect(isSafe(queens, 1, 0)).toBe(false);
    });
});
