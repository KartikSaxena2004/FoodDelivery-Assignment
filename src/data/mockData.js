export const restaurants = [
    {
        id: 1,
        name: "Biryani Blues",
        rating: 4.8,
        deliveryTime: "30-40 min",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        name: "Burger King Clone",
        rating: 4.2,
        deliveryTime: "25-35 min",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        name: "Punjab Dhaba",
        rating: 4.6,
        deliveryTime: "40-50 min",
        image: "https://images.unsplash.com/photo-1514516872020-25ce79ef0b58?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        name: "South Indian Tiffins",
        rating: 4.5,
        deliveryTime: "20-30 min",
        image: "https://images.unsplash.com/photo-1589301760014-d929645e3b6c?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        name: "Chinese Wok",
        rating: 4.3,
        deliveryTime: "35-45 min",
        image: "https://images.unsplash.com/photo-1552590635-27c2c2128abf?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        name: "Sweet Cravings",
        rating: 4.7,
        deliveryTime: "20-30 min",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 7,
        name: "Pizza Hut Clone",
        rating: 4.1,
        deliveryTime: "30-45 min",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 8,
        name: "Mughlai Feast",
        rating: 4.4,
        deliveryTime: "40-60 min",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60"
    }
];

export const dishes = [
    {
        id: 101,
        restaurantId: 1,
        name: "Hyderabadi Chicken Biryani",
        description: "Aromatic basmati rice cooked with spicy chicken.",
        price: 350,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 102,
        restaurantId: 1,
        name: "Mutton Dum Biryani",
        description: "Slow-cooked mutton with saffron rice.",
        price: 450,
        image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 201,
        restaurantId: 2,
        name: "Maharaja Mac",
        description: "Double patty veg burger with cheese.",
        price: 180,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 301,
        restaurantId: 3,
        name: "Butter Chicken",
        description: "Tender chicken in rich tomato butter gravy.",
        price: 320,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 302,
        restaurantId: 3,
        name: "Paneer Tikka Masala",
        description: "Grilled paneer cubes in spicy curry.",
        price: 280,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 303,
        restaurantId: 3,
        name: "Garlic Naan",
        description: "Buttery garlic flatbread.",
        price: 40,
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 401,
        restaurantId: 4,
        name: "Masala Dosa",
        description: "Crispy crepe filled with spiced potatoes.",
        price: 120,
        image: "https://images.unsplash.com/photo-1589301760014-d929645e3b6c?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 402,
        restaurantId: 4,
        name: "Idli Sambar",
        description: "Steamed rice cakes with lentil soup.",
        price: 80,
        image: "https://images.unsplash.com/photo-1589301760014-d929645e3b6c?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 501,
        restaurantId: 5,
        name: "Hakka Noodles",
        description: "Stir-fried noodles with veggies.",
        price: 150,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 502,
        restaurantId: 5,
        name: "Veg Manchurian",
        description: "Fried veg balls in tangy sauce.",
        price: 180,
        image: "https://images.unsplash.com/photo-1525755617299-72594cccc74d?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 601,
        restaurantId: 6,
        name: "Double Chocolate Brownie",
        description: "Rich dark chocolate brownie with walnuts.",
        price: 120,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 602,
        restaurantId: 6,
        name: "Gulab Jamun (2pc)",
        description: "Soft fried dough balls in sugar syrup.",
        price: 80,
        image: "https://images.unsplash.com/photo-1593794662857-655f52542a27?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 701,
        restaurantId: 7,
        name: "Pepperoni Pizza",
        description: "Classic pepperoni slices with mozzarella.",
        price: 499,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 702,
        restaurantId: 7,
        name: "Veggie Supreme",
        description: "Onion, bell peppers, tomato, and corn.",
        price: 399,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 801,
        restaurantId: 8,
        name: "Tandoori Chicken (Half)",
        description: "Roasted chicken marinated in yogurt and spices.",
        price: 350,
        image: "https://images.unsplash.com/photo-1599487488170-aec40c00fad7?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 802,
        restaurantId: 8,
        name: "Malai Kofta",
        description: "Fried potato and paneer balls in creamy gravy.",
        price: 290,
        image: "https://images.unsplash.com/photo-1589647365609-d884851eb716?w=500&auto=format&fit=crop&q=60"
    }
];
