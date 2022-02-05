const OrderArr = [
  {
    orderID: "001",
    orderDate: "01.01.2020",
    orderPrice: 100,
    orderedDishes: [
      { dishName: "Margherita", dishPrice: 23 },
      { dishName: "Havaian", dishPrice: 25 },
      { dishName: "Unicorn", dishPrice: 27 },
      { dishName: "Neapolitana", dishPrice: 25 },
    ],
    deliveryAddress: "Piękna 100/21; 02-080; Warszawa",
  },
  {
    orderID: "002",
    orderDate: "01.07.2021",
    orderPrice: 23,
    orderedDishes: [{ dishName: "Margherita", dishPrice: 23 }],
    deliveryAddress: "Piękna 100/21; 02-080; Warszawa",
  },
  {
    orderID: "003",
    orderDate: "10.01.2019",
    orderPrice: 23,
    orderedDishes: [{ dishName: "Margherita", dishPrice: 23 }],
    deliveryAddress: "Piękna 100/21; 02-080; Warszawa",
  },
  {
    orderID: "004",
    orderDate: "02.12.2015",
    orderPrice: 25,
    orderedDishes: [{ dishName: "Neapolitana", dishPrice: 25 }],
    deliveryAddress: "Piękna 100/21; 02-080; Warszawa",
  },
];

export default OrderArr;
