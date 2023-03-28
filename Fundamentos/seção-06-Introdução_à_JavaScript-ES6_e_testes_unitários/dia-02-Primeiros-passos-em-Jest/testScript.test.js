const { myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('./script');

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

  describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });
