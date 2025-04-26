import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SpecificPage = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Product data organized by category
    const productDatabase = {
        "Noodles": [
            { id: 1, name: "Instant Ramen", image: "https://www.mama.co.th/imgadmins/img_product_cate/big/cate_big_20180409150840.jpg", size: "large" },
            { id: 2, name: "Rice Noodles", image: "/noodles.jpg", size: "small" },
            { id: 3, name: "Udon", image: "/noodles2.jpg", size: "small" },
            { id: 4, name: "Soba", image: "/noodles.jpg", size: "small" },
            { id: 5, name: "Egg Noodles", image: "/noodles2.jpg", size: "small" },
            { id: 6, name: "Glass Noodles", image: "/noodles2.jpg", size: "large" }
        ],
        "Biscuits": [
            { id: 1, name: "Chocolate Biscuits", image: "https://www.mama.co.th/imgadmins/img_product_cate/small/cate_small_20171120093229.jpg", size: "large" },
            { id: 2, name: "Digestive Biscuits", image: "/biscuit-2.jpg", size: "small" },
            { id: 3, name: "Cream Biscuits", image: "/biscuit-3.jpg", size: "small" },
            { id: 4, name: "Butter Biscuits", image: "/biscuit-4.jpg", size: "large" }
        ],
        "Cookies": [
            { id: 1, name: "Chocolate Chip Cookies", image: "/Daily-Cookies.jpg", size: "large" },
            { id: 2, name: "Oatmeal Cookies", image: "/cookie-2.jpg", size: "small" }
        ],
        "Cakes": [
            { id: 1, name: "Chocolate Cake", image: "/Soft-Cake-Chocolate.png", size: "large" },
            { id: 2, name: "Vanilla Sponge", image: "/cake-2.jpg", size: "small" }
        ],
        "Toast & Rusk": [
            { id: 1, name: "Premium Toast", image: "/olympic-premium-toast-biscu.jpg", size: "large" },
            { id: 2, name: "Sweet Rusk", image: "/rusk-2.jpg", size: "small" }
        ],
        "Candy & Chocolates": [
            { id: 1, name: "Toffito Chocolate", image: "/Toffito-chocolate-jar.jpg", size: "large" },
            { id: 2, name: "Fruit Candies", image: "/candy-2.jpg", size: "small" }
        ],
        "Wafers": [
            { id: 1, name: "Wayfun Wafer", image: "/Wayfun-Wafer.jpg", size: "large" },
            { id: 2, name: "Chocolate Wafers", image: "/wafer-2.jpg", size: "small" }
        ],
        "Chips & Snacks": [
            { id: 1, name: "Crispo Chips", image: "/Crispo chips.jpg", size: "large" },
            { id: 2, name: "Corn Puffs", image: "/snack-2.jpg", size: "small" }
        ],
        "Powder Drinks": [
            { id: 1, name: "Olympic Drinks", image: "/olympic-drinks.jpg", size: "large" },
            { id: 2, name: "Fruit Punch", image: "/drink-2.jpg", size: "small" }
        ],
        "Battery": [
            { id: 1, name: "Volt UM-3 Battery", image: "/Volt-UM-3-Battry.jpg", size: "large" },
            { id: 2, name: "AAA Batteries", image: "/battery-2.jpg", size: "small" }
        ]
    };

    useEffect(() => {
        // Simulate loading data from API
        setLoading(true);
        setTimeout(() => {
            // Find products for the current category
            const categoryProducts = productDatabase[name] || [];
            setProducts(categoryProducts);
            setLoading(false);
        }, 500);
    }, [name]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black pt-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-white">Loading...</h1>
                </div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="min-h-screen bg-black pt-40 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-white">Category: {name}</h1>
                    <p className="text-xl text-white">No products found in this category.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black pt-40 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb navigation */}
                <div className="flex items-center mb-6 text-gray-400">
                    <Link to="/" className="hover:text-white">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-white">{name}</span>
                </div>
                
                <h1 className="text-3xl font-bold mb-8 text-white">Category: {name}</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
                    {products.map((product) => (
                        <Link
                            to={`/products/domestic/details/${name}/${product.id}`}
                            key={product.id}
                            className={`relative group bg-white cursor-pointer overflow-hidden rounded-lg shadow-md
                            ${product.size === 'large' ? 'md:col-span-4 lg:col-span-6 md:row-span-2' : 'md:col-span-2 lg:col-span-3'}`}
                        >
                            {/* Image with zoom effect on hover */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110
                                ${product.size === 'large' ? 'h-80 md:h-96' : 'h-60'}`}
                            />
                            
                            {/* Product name bar at bottom */}
                            <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-40 py-3 px-4 
                                flex items-center justify-center">
                                <h2 className="text-white text-xl md:text-2xl font-semibold">{product.name}</h2>
                            </div>
                            
                            {/* Full overlay that animates from bottom to top on hover */}
                            <div className="absolute inset-x-0 bottom-0 h-0 bg-black bg-opacity-60 
                                transition-all duration-500 ease-in-out group-hover:h-full
                                flex flex-col items-center justify-center">
                                <h2 className="text-white text-xl md:text-2xl font-semibold opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 delay-200">{product.name}</h2>
                                <p className="text-blue-400 mt-2 opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 delay-300">View Details</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecificPage;