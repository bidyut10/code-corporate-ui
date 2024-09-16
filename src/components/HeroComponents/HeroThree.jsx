const HeroThree = () => (
  <section className="bg-white text-white px-10 py-20">
    <div className="flex flex-col lg:flex-row items-start justify-between">
      <img
        src="https://images.unsplash.com/photo-1623079400394-f07956928c3f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Eco Friendly"
        className="rounded-xl shadow-lg lg:w-2/5 lg:h-[500px] object-cover"
      />
      <div className="lg:w-1/2 text-center lg:text-left lg:pl-8">
        <h1 className="text-3xl md:text-5xl font-bold uppercase bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent flex items-center justify-center lg:justify-start">
          Go Green,
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold uppercase bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent flex items-center justify-center lg:justify-start">
          Go Sustainable
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-black">
          Transform the way you work with our groundbreaking technologies.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border border-green-400 text-black font-semibold rounded-full hover:bg-gradient-to-r from-green-400 to-cyan-500 hover:text-white transition duration-300">
            Learn More
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-green-800 text-white font-semibold rounded-full shadow-lg hover:opacity-80 transition duration-300">
            Join Now
          </button>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <p className="text-lg md:text-xl font-semibold">
            Discover the Future of Transportation with EV Scooters
          </p>
          <p className="mt-2 text-base md:text-lg text-black">
            Revolutionize your daily commute with our range of electric
            scooters. Experience efficiency, affordability, and a greener
            planet.
          </p>
        </div>
        {/* New Text Section */}

        {/* New Statistics Section */}
        <div className="mt-8 flex flex-col lg:flex-row justify-start text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start mr-10">
            <span className="text-4xl text-stone-800 font-bold">15+</span>
            <span className="text-2xl text-stone-800">Sales</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-4xl text-stone-800 font-bold">30+</span>
            <span className="text-2xl text-stone-800">Users</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroThree;
