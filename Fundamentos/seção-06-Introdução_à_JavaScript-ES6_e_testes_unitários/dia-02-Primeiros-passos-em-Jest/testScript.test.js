const { myRemove, myFizzBuzz } = require('./script');

  describe('testa array esperado', () => {
    it('deve retornar um array contendo', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });

  describe('testa fizzBuzz', () => {
    it('deve retornar fizz, buzz ou fizzBuzz', () => {
      expect(myFizzBuzz(15).toBe('fizzbuzz'));
      expect(myFizzBuzz(3).toBe('fizz'));
      expect(myFizzBuzz(5).toBe('buzz'))
      expect(myFizzBuzz(7).toBe(7))
      expect(myFizzBuzz('xablau').toBe(false))
    });
  });
