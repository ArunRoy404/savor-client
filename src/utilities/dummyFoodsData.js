const foodItems = [
  {
    name: "Spaghetti Carbonara",
    image: "https://img.freepik.com/free-photo/italian-pasta-spaghetti-with-meatballs-parmesan-cheese-black-plate-dark-rustic-wood-background-dinner-slow-food-concept_2829-4639.jpg?semt=ais_hybrid&w=740", 
    category: "Italian",
    description: "A classic Roman pasta dish made with egg yolks, pecorino cheese, pancetta, and black pepper.",
    servings: 4,
    rating: 4.6,
    nutritional: {
      caloriesPerServing: 650,
      macros: {
        protein: "25g",
        carbs: "70g",
        fats: "22g"
      },
      allergens: ["Dairy", "Eggs"],
      dietaryTags: ["Gluten", "Dairy"]
    },
    ingredients: [
      "400g spaghetti",
      "150g pancetta",
      "3 large egg yolks",
      "50g grated pecorino Romano",
      "Freshly ground black pepper"
    ],
    reviews: [
      {
        review: "Amazing flavor, simple but delicious!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user1.jpg" 
      },
      {
        review: "Too rich for my taste, but authentic.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user2.jpg" 
      }
    ],
    purchaseCount: 128,
    price: 14.99 // Added price
  },
  {
    name: "Vegan Buddha Bowl",
    image: "https://media.istockphoto.com/id/1416818056/photo/colourful-vegan-bowl-with-quinoa-and-sweet-potato.jpg?s=612x612&w=0&k=20&c=t1I58CqucV6bLRaa4iDy7PIVjnV8D9eWDjEsX9X-87k=", 
    category: "Vegan",
    description: "A colorful bowl filled with roasted vegetables, quinoa, avocado, and tahini dressing.",
    servings: 2,
    rating: 4.8,
    nutritional: {
      caloriesPerServing: 400,
      macros: {
        protein: "15g",
        carbs: "45g",
        fats: "18g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Gluten-Free"]
    },
    ingredients: [
      "1 cup cooked quinoa",
      "1 roasted sweet potato",
      "1/2 avocado sliced",
      "Steamed kale",
      "Tahini dressing"
    ],
    reviews: [
      {
        review: "Perfect post-workout meal!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user3.jpg" 
      },
      {
        review: "Could use more spice.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user4.jpg" 
      }
    ],
    purchaseCount: 203,
    price: 12.49 // Added price
  },
  {
    name: "Chicken Tikka Masala",
    image: "https://www.spicebangla.com/wp-content/uploads/2024/04/chicken-tikka-masala-900x506.jpg", 
    category: "Indian",
    description: "Grilled chicken in a creamy tomato-based curry sauce served with rice or naan.",
    servings: 3,
    rating: 4.5,
    nutritional: {
      caloriesPerServing: 550,
      macros: {
        protein: "30g",
        carbs: "35g",
        fats: "25g"
      },
      allergens: ["Dairy"],
      dietaryTags: ["Non-Vegetarian"]
    },
    ingredients: [
      "500g chicken breast",
      "Yogurt marinade",
      "Onions, garlic, ginger",
      "Tomato puree",
      "Heavy cream"
    ],
    reviews: [
      {
        review: "So good I want to eat it every day!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user5.jpg" 
      },
      {
        review: "A bit too spicy for me.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user6.jpg" 
      }
    ],
    purchaseCount: 98,
    price: 16.99 // Added price
  },
  {
    name: "Mango Smoothie",
    image: "https://www.superhealthykids.com/wp-content/uploads/2019/12/Mango-Smoothie-Bowl-1-500x500.jpeg", 
    category: "Beverage",
    description: "A refreshing smoothie made with fresh mango, banana, and coconut milk.",
    servings: 2,
    rating: 4.7,
    nutritional: {
      caloriesPerServing: 200,
      macros: {
        protein: "2g",
        carbs: "45g",
        fats: "3g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Gluten-Free"]
    },
    ingredients: [
      "2 ripe mangoes",
      "1 banana",
      "1 cup coconut milk",
      "Ice cubes",
      "Honey (optional)"
    ],
    reviews: [
      {
        review: "Summer in a glass!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user7.jpg" 
      },
      {
        review: "Too sweet for my taste.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user8.jpg" 
      }
    ],
    purchaseCount: 145,
    price: 7.99 // Added price
  },
  {
    name: "Pad Thai",
    image: "https://www.thespruceeats.com/thmb/7ZigBiPKOGoLCqZUAtKcq5xlJMQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-pad-thai-3217194-Hero_01-098e8b1085c24a90a97a5a4fce7070f3.jpg", 
    category: "Thai",
    description: "Stir-fried rice noodles with shrimp, bean sprouts, peanuts, and tamarind sauce.",
    servings: 2,
    rating: 4.4,
    nutritional: {
      caloriesPerServing: 450,
      macros: {
        protein: "20g",
        carbs: "60g",
        fats: "12g"
      },
      allergens: ["Shellfish", "Peanuts"],
      dietaryTags: ["Non-Vegetarian"]
    },
    ingredients: [
      "200g rice noodles",
      "150g shrimp",
      "Bean sprouts",
      "Tofu",
      "Tamarind sauce"
    ],
    reviews: [
      {
        review: "Authentic street-style flavor!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user9.jpg" 
      },
      {
        review: "Could add more veggies.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user10.jpg" 
      }
    ],
    purchaseCount: 112,
    price: 13.99 // Added price
  },
  {
    name: "Avocado Toast",
    image: "https://californiaavocado.com/wp-content/uploads/2020/07/California-Avocado-Toast-Three-Ways-768x532.jpeg", 
    category: "Breakfast",
    description: "Toasted sourdough topped with smashed avocado, chili flakes, and a poached egg.",
    servings: 1,
    rating: 4.3,
    nutritional: {
      caloriesPerServing: 350,
      macros: {
        protein: "12g",
        carbs: "30g",
        fats: "18g"
      },
      allergens: ["Eggs"],
      dietaryTags: ["Vegetarian"]
    },
    ingredients: [
      "1 slice sourdough bread",
      "1 ripe avocado",
      "1 poached egg",
      "Chili flakes",
      "Lemon juice"
    ],
    reviews: [
      {
        review: "Quick and satisfying breakfast!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user11.jpg" 
      },
      {
        review: "Needs more salt.",
        rate: 3,
        reviewerImage: "https://example.com/reviews/user12.jpg" 
      }
    ],
    purchaseCount: 89,
    price: 9.49 // Added price
  },
  {
    name: "Grilled Salmon Salad",
    image: "https://assets.sweat.com/html_body_blocks/images/000/005/931/original/Nicoise_Salad_with_Grilled_Salmon_1_enc94702a1dae88403112fcbb43f3629e7.jpg?1512951482", 
    category: "Salad",
    description: "Fresh greens topped with grilled salmon, cherry tomatoes, and balsamic vinaigrette.",
    servings: 2,
    rating: 4.6,
    nutritional: {
      caloriesPerServing: 400,
      macros: {
        protein: "30g",
        carbs: "15g",
        fats: "20g"
      },
      allergens: ["Fish"],
      dietaryTags: ["Keto", "Paleo"]
    },
    ingredients: [
      "200g salmon fillet",
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Balsamic dressing"
    ],
    reviews: [
      {
        review: "Healthy and flavorful!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user13.jpg" 
      },
      {
        review: "Salad was a bit small for the price.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user14.jpg" 
      }
    ],
    purchaseCount: 107,
    price: 17.99 // Added price
  },
  {
    name: "Chocolate Avocado Mousse",
    image: "https://img.taste.com.au/KQLe5OBd/w720-h480-cfill-q80/taste/2016/11/dairy-free-avocado-chocolate-mousse-90600-1.jpeg", 
    category: "Dessert",
    description: "A creamy, healthy dessert made with avocado, cocoa powder, and maple syrup.",
    servings: 4,
    rating: 4.5,
    nutritional: {
      caloriesPerServing: 250,
      macros: {
        protein: "4g",
        carbs: "20g",
        fats: "18g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Dairy-Free", "Gluten-Free"]
    },
    ingredients: [
      "2 ripe avocados",
      "1/4 cup cocoa powder",
      "1/4 cup maple syrup",
      "1 tsp vanilla extract",
      "Almond milk as needed"
    ],
    reviews: [
      {
        review: "Tastes like real chocolate mousse!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user15.jpg" 
      },
      {
        review: "Texture took some getting used to.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user16.jpg" 
      }
    ],
    purchaseCount: 95,
    price: 8.99 // Added price
  },
  {
    name: "Beef Tacos",
    image: "https://images.getrecipekit.com/20230306234647-crispybeeftaco_sq.jpg?aspect_ratio=16:9&quality=90&", 
    category: "Mexican",
    description: "Soft corn tortillas filled with seasoned beef, onions, cilantro, and lime.",
    servings: 4,
    rating: 4.2,
    nutritional: {
      caloriesPerServing: 500,
      macros: {
        protein: "25g",
        carbs: "40g",
        fats: "20g"
      },
      allergens: [],
      dietaryTags: ["Non-Vegetarian"]
    },
    ingredients: [
      "500g ground beef",
      "Corn tortillas",
      "Onion",
      "Cilantro",
      "Lime wedges"
    ],
    reviews: [
      {
        review: "Great for taco night!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user17.jpg" 
      },
      {
        review: "Spice level could be adjustable.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user18.jpg" 
      }
    ],
    purchaseCount: 134,
    price: 15.49 // Added price
  },
  {
    name: "Oatmeal with Berries",
    image: "https://www.pcrm.org/sites/default/files/Oatmeal%20and%20Berries.jpg", 
    category: "Breakfast",
    description: "Warm oatmeal topped with mixed berries, honey, and a sprinkle of chia seeds.",
    servings: 1,
    rating: 4.5,
    nutritional: {
      caloriesPerServing: 300,
      macros: {
        protein: "8g",
        carbs: "50g",
        fats: "8g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Gluten-Free"]
    },
    ingredients: [
      "1/2 cup oats",
      "1 cup almond milk",
      "Mixed berries",
      "Honey",
      "Chia seeds"
    ],
    reviews: [
      {
        review: "Perfect start to the morning!",
        rate: 5,
        reviewerImage: "https://example.com/reviews/user19.jpg" 
      },
      {
        review: "Could use more texture.",
        rate: 4,
        reviewerImage: "https://example.com/reviews/user20.jpg" 
      }
    ],
    purchaseCount: 117,
    price: 6.99 // Added price
  }
];

export {foodItems};