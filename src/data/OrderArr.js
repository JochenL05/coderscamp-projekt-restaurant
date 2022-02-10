const OrderArr = [
  {
    orderID: "001",
    orderDate: "01.01.2020",
    orderPrice: 98,
    orderedDishes: [
      { dishName: "Margherita", dishPrice: 23 },
      { dishName: "Capriciosa", dishPrice: 25 },
      { dishName: "Four cheeses", dishPrice: 25 },
      { dishName: "Rucola", dishPrice: 25 },
    ],
    deliveryAddress: "Piękna 100/21; 02-080; Warszawa",
  },
  {
    orderID: "002",
    orderDate: "01.07.2021",
    orderPrice: 21,
    orderedDishes: [{ dishName: "Margherita", dishPrice: 21 }],
    deliveryAddress: "Piękna 100/21; 02-080; Warszawa",
  },
  {
    orderID: "003",
    orderDate: "10.01.2019",
    orderPrice: 21,
    orderedDishes: [{ dishName: "Margherita", dishPrice: 21 }],
    deliveryAddress: "Piękna 100/21; 02-080; Warszawa",
  },
  {
    orderID: "004",
    orderDate: "02.12.2015",
    orderPrice: 25,
    orderedDishes: [{ dishName: "Salame", dishPrice: 25 }],
    deliveryAddress: "Piękna 100/21; 02-080; Warszawa",
  },
];

export default OrderArr;
