const HeroThree = () => (
  <section className="bg-white text-gray-900 px-20 sm:px-10 py-16 sm:py-20">
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
      {/* Image Section */}
      <img
        src="https://images.unsplash.com/photo-1623079400394-f07956928c3f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Eco Friendly"
        className="rounded-xl shadow-lg w-full lg:w-2/5 h-auto lg:h-[500px] object-cover"
      />

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left lg:pl-8 space-y-6">
        {/* Titles */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Go Green,
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Go Sustainable
        </h1>

        {/* Paragraph */}
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          Discover a new way of living and working in harmony with nature. With
          our innovative technologies, we aim to reduce the environmental impact
          of everyday activities while enhancing your quality of life. Join the
          movement to a greener and more sustainable future today.
        </p>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          Our eco-friendly solutions, like electric scooters and renewable
          energy-powered systems, are designed to meet the demands of a modern,
          connected world while preserving the planet for future generations.
          Explore the possibilities and make a lasting impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6 sm:mt-8 w-full">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-transparent border border-green-400 text-green-700 font-semibold rounded-full hover:bg-gradient-to-r from-green-400 to-cyan-500 hover:text-white transition duration-300">
            Learn More
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-green-800 text-white font-semibold rounded-full shadow-lg hover:opacity-80 transition duration-300">
            Join Now
          </button>
        </div>

        {/* New Text Section */}
        <div className="mt-8 text-center lg:text-left">
          <p className="text-lg md:text-xl font-semibold">
            Discover the Future of Transportation with EV Scooters
          </p>
          <p className="mt-2 text-base md:text-lg text-gray-700 leading-relaxed">
            Revolutionize your daily commute with our range of electric
            scooters. Experience efficiency, affordability, and a greener
            planet.
          </p>
        </div>

        {/* New Statistics Section */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent font-bold">
              15+
            </span>
            <span className="text-lg md:text-2xl text-gray-700">Sales</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent font-bold">
              30+
            </span>
            <span className="text-lg md:text-2xl text-gray-700">Users</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroThree;
