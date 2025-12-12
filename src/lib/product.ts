interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

const products: Product[] = [
    {
        id: '1',
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
        image: '/pizza-main.png',
        price: 120.99,
    },
    {
        id: '2',
        name: 'Pepperoni Pizza',
        description: 'Pizza with spicy pepperoni and mozzarella.',
        image: '/pizza-main.png',
        price: 140.99,
    },
    {
        id: '3',
        name: 'Vegetarian Pizza',
        description: 'Pizza with a mix of vegetables and mozzarella.',
        image: '/pizza-main.png',
        price: 140.99,
    },
    {
        id: '4',
        name: 'Hawaiian Pizza',
        description: 'Pizza with ham, pineapple, and mozzarella.',
        image: '/pizza-main.png',
        price: 160.99,
    },
    {
        id: '5',
        name: 'BBQ Chicken Pizza',
        description: 'Pizza with grilled chicken, BBQ sauce, and mozzarella.',
        image: '/pizza-main.png',
        price: 180.99,
    },
    {
        id: '6',
        name: 'Four Cheese Pizza',
        description: 'Pizza with mozzarella, parmesan, ricotta, and gorgonzola.',
        image: '/pizza-main.png',
        price: 170.99,
    },
    {
        id: '7',
        name: 'Meat Lovers Pizza',
        description: 'Pizza with a mix of meats and mozzarella.',
        image: '/pizza-main.png',
        price: 190.99,
    },
    {
        id: '8',
        name: 'Veggie Supreme Pizza',
        description: 'Pizza with a mix of vegetables and mozzarella.',
        image: '/pizza-main.png',
        price: 160.99,
    },
     {
        id: '9',
        name: 'Chicken Alfredo Pizza',
        description: 'Pizza with grilled chicken, Alfredo sauce, and mozzarella.',
        image: '/pizza-main.png',
        price: 180.99,
     } ,
     {
        id: '10',
        name: 'Meatball Pizza',
        description: 'Pizza with a mix of meats and mozzarella.',
        image: '/pizza-main.png',
        price: 190.99,
     },
];

export default products;
