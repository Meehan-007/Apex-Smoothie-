const { Smoothie } = require('../models');

const smoothieData = [ 


  // Iced refershers
  {
    smoothie_name: 'Blood Orange Coconut Ginger',
    description: "juice with green coffeee extract.",
    image: "https://i.imgur.com/C0RKD3i.jpg", 
    calories: 130,
    fat: 0,
   carbohydrates: 32,
   protein: 0, 
   price: 6.00
  },  
  {
    smoothie_name: 'Dragon Fruit Lychee',
    description: "juice with green coffeee extract.",
    image: "https://i.imgur.com/C0RKD3i.jpg", 
    calories: 130,
    fat: 0,
   carbohydrates: 32,
   protein: 0,  
   price: 6.00
  },  
  {
    smoothie_name: 'Strawberry Acai',
    description: "juice with green coffeee extract.",
    image: "https://i.imgur.com/BjdqfEz.jpg", 
    calories: 130,
    fat: 0,
   carbohydrates: 32,
   protein: 0, 
   price: 6.00
  },  
  {
    smoothie_name: 'Watermelon Cucumber Mint',
    description: "juice with green coffeee extract.",
    image: "https://i.imgur.com/BjdqfEz.jpg", 
    calories: 130,
    fat: 0,
   carbohydrates: 32,
   protein: 0, 
   price: 6.00
  },  
  {
    smoothie_name: 'Peach Mango',
    description: "juice with green coffeee extract.",
    image: "https://i.imgur.com/C0RKD3i.jpg", 
    calories: 130,
    fat: 0,
   carbohydrates: 32,
   protein: 0, 
   price: 6.00
  },  

// light intesity smoothie

  {
    smoothie_name: 'Berry Trim',
    description: "strawberries, blueberries, blackberries, raspberries, bannan & vanilla whey protein.",
    image: "https://imgur.com/T0SAHdX.jpg", 
    calories: 290,
    fat: 2,
   carbohydrates: 53,
   protein: 16, 
   price: 11.00
  },  
  {
    smoothie_name: 'Strawberry Lean',
    description: "Unsweetened almond milk, strawberries, pineapple & orange & vanilla whey protein.",
    image: "https://imgur.com/2OOmEkM.jpg", 
    calories: 190,
    fat: 4,
   carbohydrates: 17,
   protein: 21, 
   price: 11.00
  },  
  {
    smoothie_name: 'Tropical Shredder',
    description: "Unsweetened almond milk, pineapple, mangoes, coconut & banana & vanilla whey protein.",
    image: "https://imgur.com/T0SAHdX.jpg", 
    calories: 280,
    fat: 10,
   carbohydrates: 24,
   protein: 22, 
   price: 11.00
  },  
  {
    smoothie_name: 'PB Cup Lite',
    description: "Choice of liquid, organic chocolate & PB Lite with chocolate & vanilla whey protein.",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 270,
    fat: 6,
   carbohydrates: 28,
   protein: 27, 
   price: 11.00
  },  


  // we used data for banana nut without the lite
  {
    smoothie_name: 'Banana nut blast lite',
    description: "choice of liquid, banana & PB lite with vanilla whey protein.",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 520,
    fat: 22,
   carbohydrates: 31,
   protein: 50, 
   price: 11.00
  },  
  {
    smoothie_name: 'The Caffeinator',
    description: "Unsweetened almond milk, espresso beans, organic coffe & organic chocolate with vanilla whey protein.",
    image: "https://imgur.com/i61khVM.jpg", 
    calories: 280,
    fat: 5,
   carbohydrates: 25,
   protein: 32, 
   price: 11.00
  },  
  {
    smoothie_name: 'Chocolate Thinny Mint',
    description: "Choice of liquid,  organic chocolate, mint & chocolate whey protein.",
    image: "https://imgur.com/i61khVM.jpg", 
    calories: 320,
    fat: 7,
   carbohydrates: 33,
   protein: 31, 
   price: 11.00
  },  





  // medium intenisty smoothies 
 

  {
    smoothie_name: 'Strawberry Slam',
    description: "Strawberries, Banana & more Strawberries with Vanilla Whey Protein",
    image: "https://imgur.com/2OOmEkM.jpg", 
    calories: 320,
    fat: 2,
   carbohydrates: 54,
   protein: 21, 
   price: 11.00
  },  

  {
    smoothie_name: 'Hawaiian Harvest',
    description: "Pineapple, Coconut & Banana with Vanilla Whey Protein",
    image: "https://imgur.com/T0SAHdX.jpg", 
    calories: 330,
    fat: 4.5,
   carbohydrates: 49,
   protein: 21, 
   price: 11.00
  },  


  // used mango burts info
  {
    smoothie_name: 'Mango Crusher',
    description: "Mangoes, Pineapple, Strawberries & Banana with Vanilla Whey Protein",
    image: "https://imgur.com/T0SAHdX.jpg", 
    calories: 330,
    fat: 2.5,
   carbohydrates: 55,
   protein: 22,
   price: 11.00
  },  

  {
    smoothie_name: 'Java Jolt',
    description: "Choice of Liquid, Organic Coffee & Organic Chocolate with Vanilla Whey Protein ",
    image: "https://imgur.com/i61khVM.jpg", 
    calories: 340,
    fat: 4.5,
   carbohydrates: 51,
   protein: 23, 
   price: 11.00
  },  

// used I love veggies
  {
    smoothie_name: 'Veggie Might',
    description: "Pineapple, Peach or Mango, Coconut, Spinach, Kale, Avocado, Lemon & Banana with Vanilla Whey Protein",
    image: "https://imgur.com/T0SAHdX.jpg", 
    calories: 320,
    fat: 4,
   carbohydrates: 51,
   protein: 22, 
   price: 11.00
  },  


  {
    smoothie_name: 'Organic Cookie Crunch',
    description: "Choice of Liquid, Organic Sandwich Cookies, Yogurt & Vanilla with Vanilla Whey Protein",
    image: "https://imgur.com/i61khVM.jpg", 
    calories: 390,
    fat: 12,
   carbohydrates: 32,
   protein: 39, 
   price: 11.00
  },  

  {
    smoothie_name: 'Cracker Jax',
    description: "Choice of Liquid, Organic Caramel, Sea Salt, PB Lite & Oats with Vanilla Whey Protein",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 340,
    fat: 6,
   carbohydrates: 44,
   protein: 28, 
   price: 11.00
  },  

//   cant find
  {
    smoothie_name: 'Peaches N Cream',
    description: "Peaches, Pears, Apricots, Strawberries & Banana with Vanilla Whey Protein",
    image: "https://imgur.com/T0SAHdX.jpg", 
    price: 11.00
  }, 


  // used red velvet cupcake 
  {
    smoothie_name: 'NY Style Cheesecake',
    description: "Unsweetened Almond Milk, Organic Vanilla Crème, Choice of Blueberries or Strawberries & Graham Crackers with Vanilla Whey Protein ",
    image: "https://imgur.com/2OOmEkM.jpg", 
    calories: 320,
    fat: 4.5,
   carbohydrates: 40,
   protein: 29, 
   price: 11.00
  }, 


  // used peanut buster for the next two
  {
    smoothie_name: 'Madison',
    description: "Unsweetened Almond Milk & Peanut Butter with Vanilla Whey Protein ",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 290,
    fat: 10,
   carbohydrates: 13,
   protein: 39, 
   price: 11.00
  }, 

  {
    smoothie_name: 'PB&JO',
    description: "Choice of Liquid, Strawberries & Peanut Butter with Vanilla Whey Protein",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 290,
    fat: 10,
   carbohydrates: 13,
   protein: 39, 
   price: 11.00
  },  


  // high intensity  

  {
    smoothie_name: 'Trail Mix',
    description: "Choice of Liquid, Apple Cinnamon Granola, Almond Butter, Raisins & Banana with Vanilla Whey Protein ",
    image: "https://imgur.com/2OOmEkM.jpg", 
    calories: 500,
    fat: 14,
   carbohydrates: 57,
   protein: 38, 
   price: 11.00
  },   


  // vanilla bean used
  {
    smoothie_name: 'Vanilla Berry Parfait',
    description: "Strawberries, Blueberries, Blackberries, Raspberries, Yogurt & Berry Coconut Granola with Vanilla Whey Protein ",
    image: "https://imgur.com/2OOmEkM.jpg", 
    calories: 340,
    fat: 9,
   carbohydrates: 25,
   protein: 37, 
   price: 11.00
  },  


  // peanut butter cup used
  {
    smoothie_name: 'Peanut Butter',
    description: "Choice of Liquid, Organic Chocolate & Peanut Butter with Chocolate & Vanilla Whey Protein ",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 530,
    fat: 22,
   carbohydrates: 34,
   protein: 49, 
   price: 11.00
  },  

  // banana nut blast
  {
    smoothie_name: 'Banana Nut Bread',
    description: "Unsweetened Almond Milk, Banana, Organic Chai Spices & Almond Butter with Vanilla Whey Protein ",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 520,
    fat: 22,
   carbohydrates: 31,
   protein: 50, 
   price: 11.00
  },  

  {
    smoothie_name: 'Mo Mass',
    description: "Choice of Liquid, Peanut Butter, Oats, Banana & 5g Creatine with Vanilla or Chocolate 'Daily Mass' Builder ",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 650,
    fat: 21,
   carbohydrates: 85,
   protein: 32, 
   price: 11.00
  },  

  {
    smoothie_name: 'Banana Nut Blast',
    description: "Choice of Liquid, Peanut Butter & Banana with Vanilla or Chocolate Whey Protein",
    image: "https://imgur.com/ykdQV4D.jpg", 
    calories: 520,
    fat: 22,
   carbohydrates: 31,
   protein: 50, 
   price: 11.00
  },  


  // chocolate forsty used
  {
    smoothie_name: 'Chocolate Banana Peel',
    description: "Choice of Liquid, Banana & Organic Chocolate with Chocolate Whey Protein",
    image: "https://imgur.com/i61khVM.jpg", 
    calories: 340,
    fat: 7,
   carbohydrates: 28,
   protein: 41, 
   price: 11.00
  },  

  // no idea what to use used just random fill in data
  {
    smoothie_name: 'Banana Split',
    description: "Pineapple, Banana, Organic Vanilla Crème & Strawberries with Vanilla Whey Protein ",
    image: "https://imgur.com/2OOmEkM.jpg", 
    calories: 290,
    fat: 10,
   carbohydrates: 13,
   protein: 39, 
   price: 11.00
  },   


  // crushed fruit bowls  
  {
    smoothie_name: 'The amazing Acai Bowl',
    description: "Mixed Berries & Acai blended with Yogurt & topped with Banana, Coconut, Cacao Nibs, Berry Coconut Granola, Almond Butter, Chia Seeds & a drizzle of Honey ",
    image: "https://i.imgur.com/jcMeFgA.jpg", 
    price: 10.00
    
  },   

  {
    smoothie_name: 'The Tropical Veggie Bliss Bowl',
    description: "Mangoes, Pineapple, Kale, Spinach & Lemon blended with Yogurt & topped with Banana, Coconut, Berry Coconut Granola & a drizzle of Honey ",
    image: "https://i.imgur.com/jcMeFgA.jpg",  
    price: 10.00
    
  },  
];

const seedSmoothies = () => Smoothie.bulkCreate(smoothieData);

module.exports = seedSmoothies;








