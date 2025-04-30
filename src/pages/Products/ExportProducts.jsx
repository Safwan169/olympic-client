import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExportProducts = () => {
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate=useNavigate()
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/products/domestic/${category.name}`)
  };

  return (
    <div className="py-40 px-4   bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="w-full  grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="relative group w-full bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              {/* Image with zoom effect on hover */}
              <div className="h-96 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Bottom name that disappears on hover */}
              <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-40 py-4 px-4
                  transition-opacity duration-300 group-hover:opacity-0">
                <h2 className="text-white text-3xl font-bold">{category.name}</h2>
              </div>
              
              {/* Full overlay that animates from bottom to top on hover */}
              <div className="absolute inset-x-0 bottom-0 h-0 bg-black bg-opacity-60 
                  transition-all duration-500 ease-in-out group-hover:h-full
                  flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 delay-200">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExportProducts;