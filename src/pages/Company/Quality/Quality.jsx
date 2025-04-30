import { useState, useRef, useEffect } from "react";
import GlobalHeroSection from "../../../componants/GlobalHeroSection";

export default function Quality() {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const videoRef = useRef(null);

  // Sample data - in production this would come from your CMS
  const qualityData = {
    title: "Quality & Innovation",
    mainDescription:
      "At Olympic Industries, our commitment to quality and innovation drives everything we do. We continuously invest in cutting-edge technology and rigorous quality control processes to deliver products that exceed customer expectations.",
    videoUrl:
      "https://res.cloudinary.com/dntd4xawh/video/upload/v1745135882/Olympic_Industries_Limited_Father_s_Day_OVC_k75vkr.mp4", // Replace with actual video URL
    sections: [
      {
        id: 1,
        title: "Quality Assurance",
        description:
          "Our state-of-the-art quality assurance laboratories conduct over 200 tests daily to ensure every product meets our rigorous standards. From raw materials to finished goods, we implement strict quality control measures at every stage of production.",
        imageUrl:
          "https://olympicbd.com/wp-content/uploads/2016/06/Body-Image-1.jpg", // Replace with actual image URL
      },
      {
        id: 2,
        title: "Innovation Process",
        description:
          "Our dedicated Research & Development team continuously explores new ingredients, flavors, and manufacturing techniques. This innovative approach has resulted in groundbreaking products that have redefined industry standards.",
        imageUrl: "https://olympicbd.com/wp-content/uploads/2016/06/2.jpg", // Replace with actual image URL
      },
      {
        id: 3,
        title: "Certifications & Standards",
        description:
          "Olympic Industries proudly maintains international certifications including ISO 9001, HACCP, and BRC Food Safety. These certifications reflect our unwavering commitment to maintaining the highest quality standards.",
        imageUrl: "https://olympicbd.com/wp-content/uploads/2016/06/3.jpg", // Replace with actual image URL
      },
    ],
  };

  // Handle video play/pause on hover
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoHovered) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoHovered]);

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <GlobalHeroSection
          firstHeading={"Quality &"}
          secondHeading={"Innovation"}
          desc={
            "At Olympic Industries, our commitment to quality and innovation"
          }
        />

        {/* Main Content - Video and Text Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Left Side - Content */}
          <div className="md:w-1/2">
            <div className="bg-gray-900 rounded-lg p-6 h-full border border-red-600 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">
                Our Commitment
              </h3>
              <p className="text-gray-300 mb-6">
                Olympic Industries sets the gold standard in the industry with
                our unwavering commitment to excellence. Our production
                facilities feature cutting-edge technology and automated systems
                that ensure consistent quality.
              </p>
              <p className="text-gray-300 mb-6">
                Every product undergoes rigorous testing before reaching our
                customers. Our quality control team maintains strict oversight
                at each stage of the manufacturing process, from raw material
                selection to packaging.
              </p>
              <p className="text-gray-300">
                This dedication to quality has earned us the trust of millions
                of consumers who rely on Olympic products for their exceptional
                taste, consistent quality, and innovative formulations.
              </p>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="md:w-1/2">
            <div
              className="relative h-full rounded-lg shadow-xl border-2 border-red-600 overflow-hidden"
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={qualityData.videoUrl}
                loop
                muted
                playsInline
              />

              {/* Play/Pause Indicator */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ${
                  isVideoHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="bg-red-600 rounded-full p-4">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityData.sections.map((section) => (
            <div
              key={section.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-red-600 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <img
                src={section.imageUrl}
                alt={section.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">
                  {section.title}
                </h3>
                <p className="text-gray-300">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
