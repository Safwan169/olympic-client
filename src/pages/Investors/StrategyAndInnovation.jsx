import bgImage from "../../assets/cookieBG.jpg";

const StrategyAndInnovation = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen px-6 py-12">
      {/* Header Section */}
      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-bold tracking-wide animate-fade-in">
            Strategy & Innovation
          </h1>
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
