import React from "react";
import exportBanner from "../../assets/export_banner.jpg";
import CollapsibleFAQ from "./CollapsibleFAQ";
import ProductCatalog from "./ProductCatalog";
import ContactForm from "./ContactForm";
import GlobalPresence from "./GlobalPresence";

export default function Export() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <div className="w-full h-96 bg-gray-900 relative">
        <img 
          src={exportBanner} 
          alt="Olympic Industries Export Operations" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            Global Exports
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <span className="text-red-500 font-medium uppercase tracking-wider">
                SINCE 1979
              </span>
              <div className="w-12 h-0.5 bg-red-500 mt-1"></div>
            </div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              <span className="text-red-500">Olympic</span>{" "}
              <span className="text-white">
                Brings the best of Bangladesh to the World.
              </span>
            </h2>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg text-gray-300">
              Olympic Industries Limited, Bangladesh's premier biscuit
              manufacturer, takes pride in offering its high-quality products to
              the global market. With an extensive infrastructure including
              eleven biscuit production lines, five confectionery lines, four
              dedicated bakery lines, two noodles lines, and two snacks lines,
              we possess the capability to fulfill a wide range of requirements.
              Currently, we export to over 32 countries worldwide.
            </p>

            <p className="text-lg text-gray-300">
              Our dedication to quality is unparalleled. As pioneers in
              Bangladesh, we were the first biscuit manufacturer to attain ISO
              22000 certification, ensuring top-tier standards in food safety
              and hygiene. Additionally, all our production facilities hold
              Halal certification, ensuring adherence to Islamic dietary laws.
            </p>

            <p className="text-lg text-gray-300">
              Recognizing the importance of effective cross-cultural
              communication, a substantial portion of our product packaging is
              multilingual, tailored to serve our global clientele. Furthermore,
              we offer flexibility to accommodate specific customer needs.
            </p>
          </div>
        </div>
      </div>
      <GlobalPresence/>
      <ProductCatalog/>
      <CollapsibleFAQ/>
      <ContactForm/>
    </div>
  );
}