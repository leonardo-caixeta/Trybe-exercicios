let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(orderP) {
  console.log(`Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Numero: ${order.address.number}, AP: ${order.address.apartment}`)
}

customerInfo(order);

let newClient = {
  name:'Luiz Silva'
}

function orderModifier(orderP) {
  let newClient = {
    name:'Luiz Silva'
  }
  Object.assign(order.name, newClient)
  let newTotal = order.payment.total = 50;
  let pizzas = Object.keys(order.order.pizza)
  console.log(`Olá, ${order.name}, o valor total do seu pedido de ${pizzas},  e ${order.order.drinks.coke.type} é R$${newTotal}. `);
}

orderModifier(order);

