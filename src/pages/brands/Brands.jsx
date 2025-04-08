import React from 'react';
import ProductCard from '../../componants/common/ProductCard';

const Brands = () => {


    const biscuits = [
        {
            id: 1,
            name: "Milk",
            description: "Rich dark chocolate biscuits",
            image: "Milk.jpg",
            packets: [
                { size: "Small Pack (100g)", price: "10" },
                { size: "Family Pack (250g)", price: "20" }
            ]
        },
        {
            id: 2,
            name: "Nutty",
            description: "Creamy milk chocolate biscuits",
            image: "Nutty.jpg",
            packets: [
                { size: "Small Pack (100g)", price: "10" },
                { size: "Medium Pack (150g)", price: "15" },
                { size: "Large Pack (200g)", price: "18" },
                { size: "Family Pack (250g)", price: "22" }
            ]
        },
        {
            id: 3,
            name: "Tip",
            description: "Nutty chocolate sensation",
            image: "Tip.png",
            packets: [] // No variety
        },
        {
            id: 4,
            name: "Enagry",
            description: "Zesty orange infused chocolate",
            image: "Energy.png",
            packets: [
                { size: "Small Pack (100g)", price: "15" },
                { size: "Family Pack (250g)", price: "60" }
            ]
        }
    ];


    const cookies = [
        {
            "id": 1,
            "name": "Bisconi-Mughal-cookies",
            "description": "Classic chocolate chip cookies",
            "image": "Bisconi-Mughal-cookies.png",
            "packets": [
                { "size": "Small Pack (100g)", "price": "8" },
                { "size": "Medium Pack (150g)", "price": "12" },
                { "size": "Large Pack (200g)", "price": "15" }
            ]
        },
        {
            "id": 2,
            "name": "Biscotti",
            "description": "Hearty oatmeal cookies with raisins",
            "image": "24 cookies.jpg",
            "packets": [
                { "size": "Small Pack (100g)", "price": "7" },
                { "size": "Medium Pack (150g)", "price": "11" },
                { "size": "Family Pack (250g)", "price": "18" }
            ]
        },
        {
            "id": 3,
            "name": "Salcoti-cookies-biscuits",
            "description": "Soft and chewy peanut butter cookies",
            "image": "Salcoti-cookies-biscuits.jpg",
            "packets": [
                { "size": "Small Pack (100g)", "price": "9" },
                { "size": "Large Pack (250g)", "price": "16" }
            ]
        },
        {
            "id": 4,
            "name": "Daily-Cookies",
            "description": "Rich double chocolate cookies",
            "image": "Daily-Cookies.jpg",
            "packets": [
                { "size": "Small Pack (100g)", "price": "10" },
                { "size": "Medium Pack (150g)", "price": "14" },
                { "size": "Family Pack (250g)", "price": "20" }
            ]
        }
    ]


    const confectionery = [
        {
            "id": 1,
            "name": "Eclairs",
            "description": "Chewy and fruity gummy bears in assorted flavors",
            "image": "Eclairs jar.jpg",
            "packets": [
                { "size": "Small Pack (100g)", "price": "5" },
                { "size": "Medium Pack (150g)", "price": "7" },
                { "size": "Large Pack (250g)", "price": "10" }
            ]
        },
        {
            "id": 2,
            "name": "Hojmi",
            "description": "Colorful lollipops with long-lasting flavors",
            "image": "Hojmi.jpg",
            "packets": [
                { "size": "Pack of 5", "price": "4" },
                { "size": "Pack of 10", "price": "7" }
            ]
        },
        {
            "id": 3,
            "name": "Pulse-Masala-Mango",
            "description": "Soft and chewy caramel toffees",
            "image": "Pulse-Masala-Mango.jpg",
            "packets": [
                { "size": "Small Pack (100g)", "price": "6" },
                { "size": "Medium Pack (200g)", "price": "11" },
                { "size": "Large Pack (500g)", "price": "25" }
            ]
        },
        {
            "id": 4,
            "name": "Toffito-chocolate-jar",
            "description": "Rich, creamy chocolate truffles with a smooth center",
            "image": "Toffito-chocolate-jar.jpg",
            "packets": [
                { "size": "Box of 6", "price": "12" },
                { "size": "Box of 12", "price": "20" }
            ]
        },
    ]

    const snacks = [
        {
            "id": 1,
            "name": "Crispo Chips",
            "description": "Crispy and salty potato chips in a variety of flavors",
            "image": "Crispo chips.jpg",
            "packets": [
                { "size": "Small Pack (50g)", "price": "2" },
                { "size": "Medium Pack (100g)", "price": "4" },
                { "size": "Large Pack (200g)", "price": "7" }
            ]
        },
        {
            "id": 2,
            "name": "Foodie-Bite-Chira-Bhaja",
            "description": "Crunchy and savory pretzels, perfect for snacking",
            "image": "Foodie-Bite-Chira-Bhaja.jpg",
            "packets": [
                { "size": "Small Pack (80g)", "price": "3" },
                { "size": "Medium Pack (150g)", "price": "5" },
                { "size": "Large Pack (250g)", "price": "8" }
            ]
        },
        {
            "id": 3,
            "name": "Crispo-Hot-Sour",
            "description": "Delicious cheesy flavored corn puffs",
            "image": "Crispo-Hot-Sour.jpg",
            "packets": [
                { "size": "Small Pack (50g)", "price": "2.5" },
                { "size": "Medium Pack (100g)", "price": "4.5" },
                { "size": "Large Pack (200g)", "price": "7.5" }
            ]
        },
        {
            "id": 4,
            "name": "Crispo-Doi-Papri-Chat",
            "description": "Healthy and tasty granola bars with mixed nuts and honey",
            "image": "Crispo-Doi-Papri-Chat.jpg",
            "packets": [
                { "size": "Pack of 2", "price": "3" },
                { "size": "Pack of 4", "price": "5" },
                { "size": "Pack of 6", "price": "7" }
            ]
        }
    ]


    const batteries=[
          {
            "id": 1,
            "name": "Olympic-Heavy-Duty-Battery",
            "description": "Long-lasting AA rechargeable batteries for everyday use",
            "image": "Olympic-Heavy-Duty-Battery.jpg",
            "packets": [
              { "size": "Pack of 2", "price": "10" },
              { "size": "Pack of 4", "price": "18" },
              { "size": "Pack of 8", "price": "32" }
            ]
          },
          {
            "id": 2,
            "name": "Volt-UM-3-Battry",
            "description": "High-performance AAA lithium batteries, ideal for high-drain devices",
            "image": "Volt-UM-3-Battry.jpg",
            "packets": [
              { "size": "Pack of 4", "price": "8" },
              { "size": "Pack of 8", "price": "15" }
            ]
          },
          {
            "id": 3,
            "name": "Olympic-UM3",
            "description": "Reliable CR2032 coin cell batteries for watches, remotes, and small electronics",
            "image": "Olympic-UM3.jpg",
            "packets": [
              { "size": "Pack of 2", "price": "3" },
              { "size": "Pack of 5", "price": "7" },
              { "size": "Pack of 10", "price": "13" }
            ]
          },
          {
            "id": 4,
            "name": "Olympic-Laser",
            "description": "High-capacity 9V rechargeable battery for long-lasting performance",
            "image": "Olympic-Laser.jpg",
            "packets": [
              { "size": "Single", "price": "10" },
              { "size": "Pack of 2", "price": "18" }
            ]
          }
        ]
      
      







    return (
        <div>
            {/* biscuts  */}

            <ProductCard title={'Biscuits'} products={biscuits} />

            {/* Cookies & Bakery */}

            <ProductCard title={'Cookies & Bakery'} products={cookies} />

            {/* confectionery */}

            <ProductCard title={'Confectionery'} products={confectionery} />

            {/* snacks */}

            <ProductCard title={'Snacks'} products={snacks} />

            {/* batteries */}

            <ProductCard title={'Batteries'} products={batteries} />
        </div>
    );
};

export default Brands;