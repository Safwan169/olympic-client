import { FaFilePdf, FaDownload } from "react-icons/fa";

const Exports = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wide">Exports</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section 1: Export Overview */}
        <section>
          <p className="text-gray-400 leading-relaxed">
            Olympic Industries Limited, Bangladesh’s leading biscuit
            manufacturer, exports high-quality products to over{" "}
            <span className="text-red-500 font-semibold">32 countries</span>{" "}
            worldwide. With
            <span className="text-red-500 font-semibold">
              {" "}
              eleven biscuit production lines
            </span>
            ,
            <span className="text-red-500 font-semibold">
              {" "}
              five confectionery lines
            </span>
            , and additional bakery, noodles, and snacks lines, we have the
            capacity to meet diverse global requirements.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Olympic was the first biscuit manufacturer in Bangladesh to receive
            <span className="text-red-500 font-semibold">
              {" "}
              ISO 22000 certification
            </span>{" "}
            for food safety and hygiene. All facilities are also Halal
            certified.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Our product packaging is multilingual and tailored to meet the needs
            of our international customers. We also provide flexibility to
            accommodate specific customer requirements.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            For more information, visit our
            <a
              href="/brands"
              className="text-cc0000 underline hover:text-red-600 transition ml-1"
            >
              Brands
            </a>
            page. For export inquiries, contact our Export Manager at:
            <a
              href="mailto:export@olympicbd.com"
              className="text-cc0000 underline hover:text-red-600 transition ml-1"
            >
              export@olympicbd.com
            </a>
            or call
            <span className="text-cc0000 ml-1">+880 1760-403595</span>.
          </p>
        </section>

        {/* Section 2: Product Details */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Product Details
          </h2>

          {/* Downloadable PDF */}
          <div className="flex items-center justify-between bg-[#1e1e1e] p-4 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center gap-4">
              <FaFilePdf className="text-red-500 text-4xl" />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Product Details (English)
                </h3>
                <p className="text-sm text-gray-400">
                  Format: PDF | Size: 1.39MB
                </p>
              </div>
            </div>
            <a
              href="/files/product-details.pdf"
              download
              className="flex items-center gap-2 bg-cc0000 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              <FaDownload />
              Download
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Exports;
