const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@shopnest.com',
      password: hashedPassword,
      role: 'admin'
    });

    const products = [
     
  {
    "name": "Nike Air Max Sneakers",
    "description": "Comfortable and stylish sneakers for everyday wear.",
    "price": 1200.00,
    "category": "Clothing",
    "stock": 35,
    "imageUrl": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    "ratings": 4.6,
    "numReviews": 78
  },
  {
    "name": "Wooden Study Desk",
    "description": "Minimalist wooden desk perfect for home offices.",
    "price": 1250.00,
    "category": "Furniture",
    "stock": 12,
    "imageUrl": "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWR5JTIwdGFibGV8ZW58MHx8MHx8fDA%3D",
    "ratings": 4.4,
    "numReviews": 34
  },
  {
    "name": "Sony WH-1000XM5 Speaker",
    "description": "Industry-leading noise cancellation with premium sound quality.",
    "price": 949,
    "category": "Electronics",
    "stock": 18,
    "imageUrl": "https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    "ratings": 4.8,
    "numReviews": 95
  },
  {
    "name": "Levi’s Slim Fit Jeans",
    "description": "Classic denim jeans with a modern slim fit.",
    "price": 700.00,
    "category": "Clothing",
    "stock": 45,
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727943457156-07d6dce18124?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGV2aXMlMjBqZWFuY2V8ZW58MHx8MHx8fDA%3D",
    "ratings": 4.5,
    "numReviews": 110
  },
   {
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation.',
        price: 299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.8,
        numReviews: 24
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'A stylish and comfortable addition to any contemporary living room.',
        price: 150.00,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.2,
        numReviews: 12
      },
      {
        name: 'Professional DSLR Camera',
        description: 'Capture stunning moments with high-resolution clarity and speed.',
        price: 1199.99,
        category: 'Electronics',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.9,
        numReviews: 50
      },
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, a staple for any casual outfit.',
        price: 85.00,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.5,
        numReviews: 89
      },
      
  {
    "name": "Apple iPhone 14 Pro",
    "description": "Latest flagship smartphone with A16 Bionic chip and ProMotion display.",
    "price": 59999.00,
    "category": "Electronics",
    "stock": 20,
    "imageUrl": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=940&hei=1112&fmt=png-alpha&.v=1660745148897",
    "ratings": 4.9,
    "numReviews": 120
  }


    ];

    await Product.insertMany(products);
    
    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();