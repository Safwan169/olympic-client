import bgImage from "../../assets/cookieBG.jpg";
import { motion, useAnimation } from "framer-motion";
const brandRed = "#cc0000";
const goldAccent = "#d4af37";
const darkBg = "#0a0a0a";
const StrategyAndInnovation = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
      {/* Header Section */}
      <div className="relative w-full h-screen max-h-[32rem] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center 30%",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-goldAccent to-transparent mb-6"
            style={{ backgroundColor: goldAccent }}
          />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Strategy <span style={{ color: goldAccent }}>& Innovation</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Driving transformation through visionary leadership and cutting-edge
            solutions
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
            className="h-0.5 mb-4"
            style={{
              background: `linear-gradient(to right, transparent, ${brandRed}, transparent)`,
            }}
          />

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="animate-bounce flex flex-col items-center">
              <p className="text-xs mb-2">Scroll to explore</p>
              <div className="w-4 h-4 border-r-2 border-b-2 border-goldAccent transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto py-12 space-y-10 animate-fade-in">
        {/* Section 1: Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Innovation at Olympic
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Innovation is the process of generating value through new ideas. At
            Olympic, we integrate innovation into every aspect of our business —
            from production to product development and marketing. Innovation is
            key to overcoming business challenges and ensuring long-term
            success.
          </p>
        </section>

        {/* Section 2: Production Process Innovation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Production Process Innovation
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our production processes are continuously optimized for efficiency
            and simplicity. We have made significant advancements in automation
            to increase output, reduce manual intervention, and ensure that our
            products meet the highest health, safety, and hygiene standards.
          </p>
        </section>

        {/* Section 3: Product Innovation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Product Innovation
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Olympic operates trial production labs for new product development
            and testing. We collaborate with global partners to access advanced
            research tools, enabling us to develop and launch products tailored
            to the Bangladeshi market while continually improving our existing
            product line.
          </p>
        </section>

        {/* Section 4: Marketing Innovation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Marketing Innovation
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Product innovation drives marketing innovation. Having a diverse
            range of innovative products allows us to create dynamic marketing
            campaigns that highlight new product features and resonate with our
            consumers.
          </p>
        </section>

        {/* Section 5: Sustainable Growth */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Sustainable Growth
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Olympic is committed to continuous investment in innovation to stay
            ahead of both domestic and international competition. By adopting
            best practices and encouraging creative solutions, we aim to drive
            long-term sustainability and growth.
          </p>
        </section>

        {/* Learn More Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Learn More
          </h2>
          <p className="text-gray-400">
            For more details on Olympic Industries' strategy and innovation,
            visit:
            <a
              href="https://olympicbd.com/sustainability/overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cc0000 underline hover:text-red-600 transition"
            >
              Olympic Industries Strategy & Innovation
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default StrategyAndInnovation;
