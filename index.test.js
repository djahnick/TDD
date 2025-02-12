// index.test.js

const solveNQueens = require('./index');

describe('N-Queens Problem', () => {
    test('La fonction solveNQueens existe', () => {
        expect(typeof solveNQueens).toBe('function');
    });

    test('Devrait retourner 1 solution pour n = 1', () => {
        const solutions = solveNQueens(1);
        expect(Array.isArray(solutions)).toBe(true);
        expect(solutions.length).toBe(1);
        // Pour n = 1, la solution doit être ["#"]
        expect(solutions[0]).toEqual(['#']);
    });
});
