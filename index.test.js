const { solveNQueens, formatSolution, isSafe } = require('./index');

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

    test('Devrait retourner aucune solution pour n = 2', () => {
        const solutions = solveNQueens(2);
        expect(Array.isArray(solutions)).toBe(true);
        expect(solutions.length).toBe(0);
    });

    test('Devrait retourner aucune solution pour n = 3', () => {
        const solutions = solveNQueens(3);
        expect(Array.isArray(solutions)).toBe(true);
        expect(solutions.length).toBe(0);
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
        const queens = [1];
        expect(isSafe(queens, 1, 3)).toBe(true);
    });

    test('Retourne false pour la même colonne', () => {
        const queens = [1];
        expect(isSafe(queens, 1, 1)).toBe(false);
    });

    test('Retourne false pour une position en diagonale', () => {
        const queens = [1];
        expect(isSafe(queens, 1, 0)).toBe(false);
    });
});

describe('Full N-Queens Solution for n = 4', () => {
    test('Devrait retourner 2 solutions distinctes pour n = 4', () => {
        const solutions = solveNQueens(4);
        expect(Array.isArray(solutions)).toBe(true);
        expect(solutions.length).toBe(2);
        solutions.forEach(solution => {
            expect(Array.isArray(solution)).toBe(true);
            expect(solution.length).toBe(4);
            solution.forEach(line => {
                expect(typeof line).toBe('string');
                expect(line.length).toBe(4);
            });
        });
    });
});

describe('Full N-Queens Solution for n = 5', () => {
    test('Devrait retourner 10 solutions distinctes pour n = 5', () => {
        const solutions = solveNQueens(5);
        expect(Array.isArray(solutions)).toBe(true);
        expect(solutions.length).toBe(10);
        solutions.forEach(solution => {
            expect(Array.isArray(solution)).toBe(true);
            expect(solution.length).toBe(5);
            solution.forEach(line => {
                expect(typeof line).toBe('string');
                expect(line.length).toBe(5);
            });
        });
    });
});

describe('Full N-Queens Solution for n = 8', () => {
    test('Devrait retourner 92 solutions distinctes pour n = 8', () => {
        const solutions = solveNQueens(8);
        expect(Array.isArray(solutions)).toBe(true);
        expect(solutions.length).toBe(92);
        solutions.forEach(solution => {
            expect(Array.isArray(solution)).toBe(true);
            expect(solution.length).toBe(8);
            solution.forEach(line => {
                expect(typeof line).toBe('string');
                expect(line.length).toBe(8);
            });
        });
    });
});
