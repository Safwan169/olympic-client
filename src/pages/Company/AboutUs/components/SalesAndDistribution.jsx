import React from "react";

const SalesDistribution = () => {
  return (
    <section className="bg-black text-gold px-6 py-12 md:px-16 lg:px-24 pt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center ">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 transition-all duration-300 hover:text-gold">
            SALES & DISTRIBUTION
          </h2>
          <p className="text-base text-white md:text-lg leading-relaxed text-gold/90 transition-all duration-500 hover:text-gold">
            Olympic has one of the most extensive sales and distribution
            networks in Bangladesh, with 1,887 sales representatives across all
            64 districts of the country. Building on the resources of our 754
            strategically positioned distributors, our products are available at
            over 1,000,000 retail outlets across Bangladesh. Breadth and
            availability of our products in even the most far-reaching or remote
            corners of the country is our forte.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gold/90 transition-all duration-500 hover:text-gold">
            Olympic works very closely with retailers of all sizes, ranging from
            tea stalls to general stores to large supermarkets. Olympic has
            invested in 100,000+ co-branded store signage to prominently affirm
            the availability of our products. Our sales force is equipped with
            the latest technology to ensure seamless sales operations and to
            capture pertinent market data.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 group relative overflow-hidden rounded-xl shadow-lg hover:scale-105  transition-transform duration-700">
          <img
            src="https://olympicbd.com/wp-content/uploads/2016/06/Body-Image-1.jpg"
            alt="Sales & Distribution"
            className="w-full h-full object-cover group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-700 rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default SalesDistribution;
