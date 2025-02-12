// index.test.js

const solveNQueens = require('./index');
const { formatSolution } = require('./index');

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
