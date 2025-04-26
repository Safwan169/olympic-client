import React, { useState } from 'react';
import press1 from "../../assets/press_release/press1.jpg";
import press2 from "../../assets/press_release/press3.jpg";
import press3 from "../../assets/press_release/press3.jpg";
import press4 from "../../assets/press_release/press1.jpg";
   const ArticleSection = () => {
        const [selectedArticle, setSelectedArticle] = useState(null);
        
        const articleData = [
        {
            id: 1,
            title: "Olympic Industries Announces Eco-Friendly Packaging Initiative",
            category: "Sustainability",
            date: "April 15, 2024",
            author: "Sarah Johnson",
            image: press1,
            content: `
            <p>Olympic Industries today announced a comprehensive eco-friendly packaging initiative that aims to reduce plastic waste by 50% over the next three years. The company will begin transitioning to biodegradable materials for all product lines starting June 2024.</p>
            
            <p>"As a leader in the industry, we recognize our responsibility to the environment and future generations," said Olympic Industries CEO. "This initiative represents a significant investment in sustainable practices that we believe will benefit both our customers and the planet."</p>
            
            <p>The new packaging, developed in partnership with leading environmental scientists, will maintain the same product freshness and shelf life while significantly reducing environmental impact. Initial testing shows the new materials decompose in under two years, compared to hundreds of years for traditional plastics.</p>
            
            <p>Industry analysts predict this move could inspire similar initiatives across the sector, potentially resulting in a sector-wide reduction of plastic waste by up to 30% by 2030.</p>
            
            <p>The company has also announced plans to offset carbon emissions from its production facilities, with a goal of achieving carbon neutrality by 2030.</p>
            `
        },
        {
            id: 2,
            title: "Q1 Financial Results Exceed Market Expectations",
            category: "Financial",
            date: "March 30, 2024",
            author: "Michael Zhang",
            image: press2,
            content: `
            <p>Olympic Industries reported its Q1 financial results today, exceeding market expectations across all key metrics. Revenue increased by 12% year-over-year, while net profit surged by 18%, outperforming analyst projections by a significant margin.</p>
            
            <p>"Despite challenging market conditions, our strategic investments in production efficiency and distribution networks have yielded impressive results," said the Chief Financial Officer during the earnings call.</p>
            
            <p>The company attributed the strong performance to increased domestic market share, particularly in the premium biscuit segment, as well as expanding export markets in South Asia and the Middle East.</p>
            
            <p>Following the announcement, Olympic Industries stock rose by 7% in early trading, reflecting investor confidence in the company's growth trajectory.</p>
            
            <p>The management team also confirmed that the company remains on track to achieve its full-year financial targets, despite inflationary pressures affecting raw material costs.</p>
            `
        },
        {
            id: 3,
            title: "Olympic Industries Launches New Premium Product Line",
            category: "Product Launch",
            date: "February 12, 2024",
            author: "Amina Rahman",
            image: press3,
            content: `
            <p>Olympic Industries unveiled its new premium product line, "Olympic Gold Series," targeting the growing luxury snack market segment. The new offerings include artisanal biscuits, premium crackers, and gourmet confectioneries made with high-quality ingredients.</p>
            
            <p>"Our research indicates a significant untapped market for premium snacks among urban consumers," stated the Marketing Director. "The Gold Series aims to fulfill this demand with exceptional quality products that elevate the snacking experience."</p>
            
            <p>The new product line will be available in select retail outlets starting next month, with a nationwide rollout planned for the second quarter of 2024. Industry experts have praised the strategic move, highlighting it as a timely response to changing consumer preferences toward premium food products.</p>
            
            <p>Olympic Industries has invested significantly in specialized production equipment to maintain the highest quality standards for the new line. The company expects the Gold Series to contribute approximately 15% to total revenue by the end of the fiscal year.</p>
            `
        }
        ];
    
        // Category to color mapping
        const categoryColors = {
        "Sustainability": "bg-teal-900 text-teal-200",
        "Financial": "bg-blue-900 text-blue-200",
        "Product Launch": "bg-green-900 text-green-200",
        "Partnership": "bg-purple-900 text-purple-200",
        "CSR": "bg-red-900 text-red-200",
        "Milestone": "bg-amber-900 text-amber-200"
        };
    
        const handleArticleSelect = (article) => {
        setSelectedArticle(article);
        document.body.style.overflow = 'hidden';
        };
    
        const handleCloseArticle = () => {
        setSelectedArticle(null);
        document.body.style.overflow = 'auto';
        };
    
        const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
        };
    
        return (
        <div className="py-16 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">FEATURED <span className="text-amber-500">ARTICLES</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                Dive deeper into our latest stories, insights, and announcements
                </p>
            </div>
    
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articleData.map((article) => (
                <div 
                    key={article.id}
                    className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                    <div className="aspect-video overflow-hidden">
                    <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    </div>
                    
                    <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${categoryColors[article.category]}`}>
                        {article.category}
                        </span>
                        <div className="text-gray-500 text-sm">
                        {formatDate(article.date)}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">By {article.author}</p>
                    
                    <button 
                        onClick={() => handleArticleSelect(article)}
                        className="flex items-center gap-2 bg-gray-800 hover:bg-amber-600 text-gray-100 px-4 py-2 rounded-md transition-colors duration-200"
                    >
                        <span>Read Full Article</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    </div>
                </div>
                ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center mt-12">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center gap-2">
                <span>View All Articles</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
            </div>
            
            {/* Article Modal */}
            {selectedArticle && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
                <div className="relative bg-gray-900 rounded-lg w-full max-w-4xl">
                <div className="absolute -top-12 right-0">
                    <button
                    onClick={handleCloseArticle}
                    className="bg-gray-800 hover:bg-red-700 text-white p-2 rounded-md transition-colors"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                
                <div className="aspect-video w-full">
                    <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover rounded-t-lg"
                    />
                </div>
                
                <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${categoryColors[selectedArticle.category]}`}>
                        {selectedArticle.category}
                    </span>
                    <div className="text-gray-500 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(selectedArticle.date)}
                    </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedArticle.title}</h2>
                    <p className="text-gray-400 text-sm mb-6">By {selectedArticle.author}</p>
                    
                    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: selectedArticle.content }}></div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex justify-between">
                        <button className="text-amber-500 hover:text-amber-400 transition-colors">
                        Share Article
                        </button>
                        <button
                        onClick={handleCloseArticle}
                        className="text-gray-400 hover:text-white transition-colors"
                        >
                        Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            )}
        </div>
        );
    };
    
    export default ArticleSection;