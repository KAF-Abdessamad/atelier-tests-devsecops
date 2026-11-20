const { genererToken, classer } = require('../../src/utils');

describe('genererToken', () => {
  test('génère un token', () => {
    const token = genererToken();
    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
  });
});

describe('classer', () => {
  test('retourne parfait pour 20', () => {
    expect(classer(20)).toBe('parfait');
  });

  test('retourne admis pour une note supérieure ou égale à 10', () => {
    expect(classer(15)).toBe('admis');
  });

  test('retourne refusé pour une note inférieure à 10', () => {
    expect(classer(5)).toBe('refusé');
  });
});