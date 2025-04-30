import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Noodles", image: "https://www.mama.co.th/imgadmins/img_product_cate/big/cate_big_20180409150840.jpg", size: "large" },
  { name: "Rice Products", image: "/Biscuit.jpg", size: "small" },
  { name: "Biscuits", image: "https://www.mama.co.th/imgadmins/img_product_cate/small/cate_small_20171120093229.jpg", size: "large" },
  { name: "Cookies", image: "/Daily-Cookies.jpg", size: "small" },
  { name: "Cakes", image: "/Soft-Cake-Chocolate.png", size: "small" },
  { name: "Toast & Rusk", image: "/olympic-premium-toast-biscu.jpg", size: "small" },
  { name: "Candy & Chocolates", image: "/Toffito-chocolate-jar.jpg", size: "large" },
  { name: "Wafers", image: "/Wayfun-Wafer.jpg", size: "small" },
  { name: "Chips & Snacks", image: "/Crispo chips.jpg", size: "small" },
  { name: "Powder Drinks", image: "/olympic-drinks.jpg", size: "small" },
  { name: "Battery", image: "/Volt-UM-3-Battry.jpg", size: "small" }
];

const Categories = () => {

  const navigate=useNavigate()
  const handleCategoryClick = (category) => {

navigate(`/products/domestic/${category.name}`)
    console.log(`Navigating to category: ${category.name}`);
    // This would normally navigate using react-router-dom
  };

  return (
    <div className="py-40 px-4 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`relative group bg-white cursor-pointer overflow-hidden rounded-lg shadow-md 
              ${category.size === 'large' ? 'md:col-span-4 lg:col-span-6 md:row-span-2' : 'md:col-span-2 lg:col-span-3'}`}
          >
            {/* Image with zoom effect on hover */}
            <img
              src={category.image}
              alt={category.name}
              className={`w-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125
                ${category.size === 'large' ? 'h-80 md:h-96' : 'h-60'}`}
            />
            
            {/* Product name bar at bottom - now with opacity transition */}
            <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-40 py-3 px-4 
                flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <h2 className="text-white text-xl md:text-2xl font-semibold">{category.name}</h2>
            </div>
            
            {/* Full overlay that animates from bottom to top on hover */}
            <div className="absolute inset-x-0 bottom-0 h-0 bg-black bg-opacity-60 
                transition-all duration-500 ease-in-out group-hover:h-full
                flex items-center justify-center">
              <h2 className="text-white text-xl md:text-2xl font-semibold opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 delay-200">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;