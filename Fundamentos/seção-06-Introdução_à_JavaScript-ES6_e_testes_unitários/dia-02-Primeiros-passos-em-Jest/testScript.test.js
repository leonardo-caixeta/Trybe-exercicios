const { myRemove, myFizzBuzz, encode, decode, techList } = require('./script');

  describe('testa array', () => {
    it('deve retornar um array contendo', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });

  describe('testa fizzBuzz', () => {
    it('deve retornar fizz, buzz ou fizzBuzz', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
      expect(myFizzBuzz(3)).toBe('fizz');
      expect(myFizzBuzz(5)).toBe('buzz');
      expect(myFizzBuzz(7)).toBe(7);
      expect(myFizzBuzz('xablau')).toBe(false);
    });
  });

  describe('testa encode e decode de string', () => {
    it('verifica existência de functions', () => {
      expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
      expect(typeof encode).toEqual('function');
    });
    it('testa encode', () => {
      expect(encode('anna')).toEqual('1nn1');
    });
    it('testa decode', () => {
      expect(decode('1nn1')).toEqual('anna');
    });
    it('testa mudança de consoantes', () => {
      expect(encode('gg')).toEqual('gg');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(decode('trybe').length).toEqual(5);
    });
  });

  describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });
