db.products.insertMany([
  {
    _id: ObjectId(),
    name: "Amazon Echo Dot (5th Gen)",
    category: "Electronics",
    brand: "Amazon",
    price: 4499,
    rating: 4.5,
    stock: 120,
    description: "Smart speaker with Alexa, improved bass and voice recognition"
  },
  {
    _id: ObjectId(),
    name: "Apple iPhone 14",
    category: "Mobiles",
    brand: "Apple",
    price: 69999,
    rating: 4.6,
    stock: 45,
    description: "iPhone 14 with A15 Bionic chip and advanced dual-camera system"
  },
  {
    _id: ObjectId(),
    name: "Logitech Wireless Mouse M185",
    category: "Accessories",
    brand: "Logitech",
    price: 799,
    rating: 4.3,
    stock: 200,
    description: "Compact wireless mouse with 12-month battery life"
  },
  {
    _id: ObjectId(),
    name: "HP Pavilion Laptop 15",
    category: "Computers",
    brand: "HP",
    price: 58999,
    rating: 4.4,
    stock: 30,
    description: "15.6-inch laptop with Intel i5 processor and SSD storage"
  },
  {
    _id: ObjectId(),
    name: "boAt Rockerz 255 Pro+",
    category: "Audio",
    brand: "boAt",
    price: 1499,
    rating: 4.2,
    stock: 150,
    description: "Wireless neckband earphones with fast charging and deep bass"
  },
  {
    _id: ObjectId(),
    name: "Samsung 43-inch Smart LED TV",
    category: "Television",
    brand: "Samsung",
    price: 32999,
    rating: 4.5,
    stock: 25,
    description: "Full HD smart TV with HDR and built-in streaming apps"
  }
])
