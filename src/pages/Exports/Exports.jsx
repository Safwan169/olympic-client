// import { FaFilePdf, FaDownload } from "react-icons/fa";

// const Exports = () => {
//   return (
//     <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold tracking-wide">Exports</h1>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-4xl mx-auto space-y-10">
//         {/* Section 1: Export Overview */}
//         <section>
//           <p className="text-gray-400 leading-relaxed">
//             Olympic Industries Limited, Bangladesh’s leading biscuit
//             manufacturer, exports high-quality products to over{" "}
//             <span className="text-red-500 font-semibold">32 countries</span>{" "}
//             worldwide. With
//             <span className="text-red-500 font-semibold">
//               {" "}
//               eleven biscuit production lines
//             </span>
//             ,
//             <span className="text-red-500 font-semibold">
//               {" "}
//               five confectionery lines
//             </span>
//             , and additional bakery, noodles, and snacks lines, we have the
//             capacity to meet diverse global requirements.
//           </p>

//           <p className="text-gray-400 leading-relaxed mt-4">
//             Olympic was the first biscuit manufacturer in Bangladesh to receive
//             <span className="text-red-500 font-semibold">
//               {" "}
//               ISO 22000 certification
//             </span>{" "}
//             for food safety and hygiene. All facilities are also Halal
//             certified.
//           </p>

//           <p className="text-gray-400 leading-relaxed mt-4">
//             Our product packaging is multilingual and tailored to meet the needs
//             of our international customers. We also provide flexibility to
//             accommodate specific customer requirements.
//           </p>

//           <p className="text-gray-400 leading-relaxed mt-4">
//             For more information, visit our
//             <a
//               href="/brands"
//               className="text-cc0000 underline hover:text-red-600 transition ml-1"
//             >
//               Brands
//             </a>
//             page. For export inquiries, contact our Export Manager at:
//             <a
//               href="mailto:export@olympicbd.com"
//               className="text-cc0000 underline hover:text-red-600 transition ml-1"
//             >
//               export@olympicbd.com
//             </a>
//             or call
//             <span className="text-cc0000 ml-1">+880 1760-403595</span>.
//           </p>
//         </section>

//         {/* Section 2: Product Details */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
//             Product Details
//           </h2>

//           {/* Downloadable PDF */}
//           <div className="flex items-center justify-between bg-[#1e1e1e] p-4 rounded-lg shadow-lg hover:shadow-xl transition">
//             <div className="flex items-center gap-4">
//               <FaFilePdf className="text-red-500 text-4xl" />
//               <div>
//                 <h3 className="text-lg font-semibold text-white">
//                   Product Details (English)
//                 </h3>
//                 <p className="text-sm text-gray-400">
//                   Format: PDF | Size: 1.39MB
//                 </p>
//               </div>
//             </div>
//             <a
//               href="/files/product-details.pdf"
//               download
//               className="flex items-center gap-2 bg-cc0000 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//             >
//               <FaDownload />
//               Download
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Exports;

import { useState } from "react";
import {
  Download,
  Globe,
  MessageSquare,
  Phone,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function ExportsPage() {
  const [isHovered, setIsHovered] = useState(null);

  const products = [
    { name: "Biscuit Production", count: 7 },
    { name: "Confectionery", count: 5 },
    { name: "Dedicated Bakery", count: 4 },
    { name: "Cup Noodles", count: 2 },
    { name: "Bread Plants", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-black to-gray-900 py-20 px-6 md:px-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                  GLOBAL EXPORTS
                </h1>
                <h2 className="text-xl md:text-2xl font-medium mb-6 text-golden-400">
                  Bringing the Flavors of Bangladesh to the World
                </h2>
                <p className="mb-8 text-gray-300 leading-relaxed">
                  Olympic Industries Limited, Bangladesh's premier biscuit
                  manufacturer, takes pride in offering highly acclaimed
                  products in the global market. With a capacity to produce over{" "}
                  <span className="text-red-500 font-semibold">75,000</span>{" "}
                  tons annually, we currently export to more than{" "}
                  <span className="text-red-500 font-semibold">
                    25 countries
                  </span>{" "}
                  worldwide.
                </p>
                <div className="flex space-x-4">
                  <button
                    onMouseEnter={() => setIsHovered("catalog")}
                    onMouseLeave={() => setIsHovered(null)}
                    className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 rounded-lg flex items-center transition-all duration-300 hover:shadow-lg hover:shadow-red-700/30 transform hover:-translate-y-1"
                  >
                    <span>View Catalog</span>
                    {isHovered === "catalog" ? (
                      <ArrowRight className="ml-2 w-5 h-5" />
                    ) : (
                      <ChevronRight className="ml-2 w-5 h-5" />
                    )}
                  </button>
                  <button
                    onMouseEnter={() => setIsHovered("contact")}
                    onMouseLeave={() => setIsHovered(null)}
                    className="px-6 py-3 border border-red-600 rounded-lg flex items-center hover:bg-red-600/10 transition-all duration-300"
                  >
                    <span>Contact Us</span>
                    {isHovered === "contact" ? (
                      <ArrowRight className="ml-2 w-5 h-5" />
                    ) : (
                      <ChevronRight className="ml-2 w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-red-600/30 to-red-800/30 absolute animate-pulse"></div>
                  <img
                    src="https://olympicbd.com/wp-content/uploads/2016/06/DSC2294-1.jpg"
                    alt="Olympic products"
                    className="relative z-10 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Production Facilities */}
      <div className="py-16 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our <span className="text-red-500">Production</span> Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-700/20 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-12 w-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/40 transition-all duration-300">
                  <span className="text-2xl font-bold text-red-500">
                    {product.count}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400">
                  Production lines tailored to meet a wide range of
                  international requirements and standards.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality & Certification */}
      <div className="py-16 px-6 md:px-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">
                Our Commitment to <span className="text-red-500">Quality</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-red-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="h-6 w-6 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-golden-400">
                      Industry Pioneers
                    </h3>
                    <p className="text-gray-300">
                      First manufacturer to attain ISO 22000 certification in
                      Bangladesh, ensuring top-tier standards in food safety and
                      hygiene.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-red-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="h-6 w-6 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-golden-400">
                      Halal Certified
                    </h3>
                    <p className="text-gray-300">
                      All our production facilities hold Halal certification,
                      ensuring adherence to Islamic dietary laws.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-red-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="h-6 w-6 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-golden-400">
                      Multilingual Packaging
                    </h3>
                    <p className="text-gray-300">
                      Recognizing the importance of effective cross-cultural
                      communication for our global clientele.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20 absolute animate-pulse"></div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl rotate-3 hover:rotate-0 transition-all duration-500 relative z-10">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center">
                        <span className="text-2xl font-bold">ISO</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">ISO 22000</h4>
                        <p className="text-gray-400">Food Safety Management</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center">
                        <span className="text-2xl font-bold">HACCP</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">
                          HACCP Compliant
                        </h4>
                        <p className="text-gray-400">Hazard Analysis</p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-2"></div>

                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-700 to-green-600 flex items-center justify-center">
                        <span className="text-xl font-bold">HALAL</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">
                          Halal Certified
                        </h4>
                        <p className="text-gray-400">
                          Islamic Dietary Standards
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Downloads */}
      <div className="py-16 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Product <span className="text-red-500">Details</span>
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-10 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-golden-400">
              Downloads Available
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:border-red-500 transition-colors duration-300 group">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/40 transition-all duration-300 mr-4">
                    <Download className="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Product Details (English)</h4>
                    <p className="text-sm text-gray-400">PDF - 1.4MB</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center">
                  <span>Download</span>
                  <Download className="ml-2 w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:border-red-500 transition-colors duration-300 group">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/40 transition-all duration-300 mr-4">
                    <Download className="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Product Catalog</h4>
                    <p className="text-sm text-gray-400">PDF - 3.2MB</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center">
                  <span>Download</span>
                  <Download className="ml-2 w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:border-red-500 transition-colors duration-300 group">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/40 transition-all duration-300 mr-4">
                    <Download className="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Export Standards & Compliance
                    </h4>
                    <p className="text-sm text-gray-400">PDF - 0.9MB</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center">
                  <span>Download</span>
                  <Download className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6 md:px-16 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Get in <span className="text-red-500">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-700/20 transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-golden-400">
                Visit Our Brands
              </h3>
              <p className="text-gray-400 mb-4">
                To explore our diverse range of Olympic products, visit our
                Brands page.
              </p>
              <a
                href="#"
                className="text-red-500 flex items-center hover:text-red-400 transition-colors duration-300"
              >
                <span>View Products</span>
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-700/20 transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-golden-400">
                Email Our Team
              </h3>
              <p className="text-gray-400 mb-4">
                For inquiries, contact our dedicated "Export" section directly
                via email.
              </p>
              <a
                href="mailto:export@olympicbd.com"
                className="text-red-500 flex items-center hover:text-red-400 transition-colors duration-300"
              >
                <span>export@olympicbd.com</span>
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-700/20 transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-golden-400">
                Call Us
              </h3>
              <p className="text-gray-400 mb-4">
                You can contact our Export Manager directly via email or by
                phone.
              </p>
              <a
                href="tel:+880-1750-245895"
                className="text-red-500 flex items-center hover:text-red-400 transition-colors duration-300"
              >
                <span>+880-1750-245895</span>
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl font-medium text-golden-400">
              We eagerly anticipate the opportunity to collaborate with you and
              introduce the flavors of Bangladesh to the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
