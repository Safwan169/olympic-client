import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
    const { category, productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('description');
    const [activeImage, setActiveImage] = useState(0);
    
    // Product database with detailed information
    const productDatabase = {
        "Noodles": [
            { 
                id: 1, 
                name: "Instant Ramen", 
                image: "https://www.mama.co.th/imgadmins/img_product_cate/big/cate_big_20180409150840.jpg",
                gallery: [
                    "https://www.mama.co.th/imgadmins/img_product_cate/big/cate_big_20180409150840.jpg",
                    "/Biscuit.jpg",
                    "/ramen-detail-2.jpg"
                ],
                price: 2.99,
                oldPrice: 3.49,
                availableIn: ["Grocery Stores", "Online Retailers", "Convenience Stores"],
                featured: true,
                description: "Our signature instant ramen noodles are ready in just 3 minutes. Perfect for a quick meal anytime.",
                detailedDescription: "Made with authentic recipes, these instant noodles deliver restaurant-quality taste with minimal preparation. Each pack includes our special flavoring mix that creates a rich, savory broth base. Simply add hot water and enjoy a satisfying meal in minutes.",
                specs: [
                    { label: "Weight", value: "100g" },
                    { label: "Servings", value: "1" },
                    { label: "Cooking Time", value: "3 minutes" },
                    { label: "Shelf Life", value: "12 months" }
                ],
                nutritionalInfo: "Calories: 380, Fat: 14g, Carbs: 52g, Protein: 10g",
                ingredients: "Wheat flour, palm oil, salt, sugar, flavor enhancers (E621, E627, E631), spices, stabilizers"
            },
            { 
                id: 2, 
                name: "Rice Noodles", 
                image: "/Biscuit.jpg",
                gallery: ["/ramen-2.jpg", "/rice-noodle-1.jpg", "/rice-noodle-2.jpg"],
                price: 3.49,
                oldPrice: null,
                availableIn: ["Asian Markets", "Specialty Food Stores", "Online Retailers"],
                featured: false,
                description: "Gluten-free rice noodles perfect for stir-fry dishes or soups.",
                detailedDescription: "These authentic rice noodles are made from premium rice flour, creating a delicate texture that pairs perfectly with various Asian cuisines. Ideal for creating traditional pad thai, pho, or your own signature stir-fry dishes.",
                specs: [
                    { label: "Weight", value: "200g" },
                    { label: "Servings", value: "2" },
                    { label: "Cooking Time", value: "5 minutes" },
                    { label: "Shelf Life", value: "18 months" }
                ],
                nutritionalInfo: "Calories: 350, Fat: 2g, Carbs: 76g, Protein: 7g",
                ingredients: "Rice flour, water"
            }
        ],
        "Biscuits": [
            { 
                id: 1, 
                name: "Chocolate Biscuits", 
                image: "https://www.mama.co.th/imgadmins/img_product_cate/small/cate_small_20171120093229.jpg",
                gallery: [
                    "https://www.mama.co.th/imgadmins/img_product_cate/small/cate_small_20171120093229.jpg",
                    "/choco-biscuit-1.jpg",
                    "/choco-biscuit-2.jpg"
                ],
                price: 1.99,
                oldPrice: 2.49,
                availableIn: ["Supermarkets", "Convenience Stores", "Vending Machines"],
                featured: true,
                description: "Delicious chocolate-covered biscuits that are perfect for tea time or as a sweet treat.",
                detailedDescription: "Our chocolate biscuits feature a perfect blend of crisp, buttery cookies coated in smooth, rich chocolate. Each bite delivers a satisfying crunch followed by melt-in-your-mouth chocolate goodness. Perfect with coffee, tea, or as a standalone indulgence.",
                specs: [
                    { label: "Weight", value: "150g" },
                    { label: "Pieces", value: "12" },
                    { label: "Shelf Life", value: "8 months" }
                ],
                nutritionalInfo: "Calories: 120 per biscuit, Fat: 6g, Carbs: 15g, Protein: 2g",
                ingredients: "Wheat flour, sugar, cocoa powder, vegetable oil, milk powder, salt, raising agents"
            }
        ]
        // Other categories would be defined similarly
    };

    useEffect(() => {
        setLoading(true);
        
        // Simulate loading data from API
        setTimeout(() => {
            const categoryProducts = productDatabase[category] || [];
            const selectedProduct = categoryProducts.find(p => p.id === parseInt(productId));
            setProduct(selectedProduct || null);
            setLoading(false);
        }, 500);
    }, [category, productId]);

    const handleThumbnailClick = (index) => {
        setActiveImage(index);
    };

    const handleDownloadPDF = () => {
        // In a real application, this would download a product spec sheet
        alert(`Product specification for ${product.name} would download here`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black pt-40 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-white">Loading...</h1>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-black pt-40 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-white">Product Not Found</h1>
                    <Link to={`/products/${category}`} className="text-blue-400 hover:text-blue-300">
                        ← Back to {category}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black pt-40 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb navigation */}
                <div className="flex items-center mb-8 text-gray-400">
                    <Link to="/" className="hover:text-white">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to={`/products/domestic/${category}`} className="hover:text-white">{category}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-white">{product.name}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Product Gallery */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src={product.gallery[activeImage]} 
                                alt={product.name} 
                                className="w-full h-96 object-cover"
                            />
                        </div>
                        
                        {/* Thumbnail gallery */}
                        <div className="grid grid-cols-3 gap-4">
                            {product.gallery.map((img, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                                        activeImage === index 
                                            ? 'ring-2 ring-blue-500 shadow-lg transform scale-105' 
                                            : 'shadow-md hover:shadow-lg'
                                    }`}
                                >
                                    <img 
                                        src={img} 
                                        alt={`${product.name} view ${index + 1}`} 
                                        className="w-full h-24 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="text-white">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                        
                        {/* Price */}
                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                            {product.oldPrice && (
                                <span className="ml-2 text-gray-400 line-through text-lg">${product.oldPrice.toFixed(2)}</span>
                            )}
                        </div>
                        
                        {/* Featured badge */}
                        {product.featured && (
                            <div className="mb-4">
                                <span className="bg-blue-600 text-white py-1 px-3 rounded-full text-sm font-semibold">
                                    Featured Product
                                </span>
                            </div>
                        )}
                        
                        {/* Short description */}
                        <p className="text-gray-300 mb-6">{product.description}</p>
                        
                        {/* Available in */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-2">Available In:</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.availableIn.map((location, index) => (
                                    <span 
                                        key={index} 
                                        className="bg-gray-800 text-gray-200 px-3 py-1 rounded-lg text-sm"
                                    >
                                        {location}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
                
                {/* Product Details */}
                <div id="product-details" className="mb-16">
                    {/* Tab headers */}
                    <div className="flex border-b border-gray-700 mb-8 overflow-x-auto">
                        <button 
                            onClick={() => setActiveTab('description')}
                            className={`px-8 py-4 font-semibold whitespace-nowrap ${activeTab === 'description' 
                                ? 'text-white border-b-2 border-blue-500' 
                                : 'text-gray-400 hover:text-white'}`}
                        >
                            Description
                        </button>
                        <button 
                            onClick={() => setActiveTab('specs')}
                            className={`px-8 py-4 font-semibold whitespace-nowrap ${activeTab === 'specs' 
                                ? 'text-white border-b-2 border-blue-500' 
                                : 'text-gray-400 hover:text-white'}`}
                        >
                            Specifications
                        </button>
                        <button 
                            onClick={() => setActiveTab('nutrition')}
                            className={`px-8 py-4 font-semibold whitespace-nowrap ${activeTab === 'nutrition' 
                                ? 'text-white border-b-2 border-blue-500' 
                                : 'text-gray-400 hover:text-white'}`}
                        >
                            Nutrition & Ingredients
                        </button>
                    </div>
                    
                    {/* Tab content */}
                    <div className="text-white">
                        {activeTab === 'description' && (
                            <div>
                                <p className="text-lg text-gray-300 mb-4">{product.description}</p>
                                <p className="text-gray-300">{product.detailedDescription}</p>
                            </div>
                        )}
                        
                        {activeTab === 'specs' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {product.specs.map((spec, index) => (
                                    <div key={index} className="flex justify-between border-b border-gray-700 py-3">
                                        <span className="font-semibold">{spec.label}</span>
                                        <span className="text-gray-300">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {activeTab === 'nutrition' && (
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Nutritional Information</h3>
                                <p className="text-gray-300 mb-6">{product.nutritionalInfo}</p>
                                
                                <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                                <p className="text-gray-300">{product.ingredients}</p>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Where to buy section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6">Where to Find This Product</h2>
                    <div className="bg-gray-900 rounded-lg p-6">
                        <p className="text-gray-300 mb-4">
                            This product is available at various retailers across the country. 
                            Find your nearest location or explore our online partners.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                                Find Retailers
                            </button>
                            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                                Online Partners
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Related Products section would go here */}
            </div>
        </div>
    );
};

export default ProductDetail;