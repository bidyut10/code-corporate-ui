const HeroOne = () => (
  <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-10 lg:p-16 w-full h-full">
    <h1 className="text-4xl md:text-5xl mb-12 font-semibold uppercase leading-tight">
      Join Our Global Community
    </h1>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left: Text Section */}
      <div className="space-y-6">
        <p className="text-lg md:text-2xl">
          Connect, collaborate, and grow with like-minded innovators. Whether
          you're just starting or a seasoned professional, we provide the tools
          and opportunities you need.
        </p>
        <p className="text-sm md:text-lg">
          Explore various industries, expand your network, and work on
          cutting-edge solutions with individuals from around the world.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition duration-300">
            Learn More
          </button>
          <button className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition duration-300">
            Join Now
          </button>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <img
          src="https://images.unsplash.com/photo-1519155751704-f00dce84d79b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Innovation"
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
        />
        <img
          src="https://images.unsplash.com/photo-1507506892840-60a3825a6161?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Success"
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
        />
        <img
          src="https://images.unsplash.com/photo-1502739391963-eda719c24cd4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Excellence"
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 hidden sm:block"
        />
      </div>
    </div>

    {/* Full-width bottom image */}
    <div className="mt-10">
      <img
        src="https://images.unsplash.com/photo-1486134030336-39b1094bf33e?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Global Innovation"
        className="rounded-xl shadow-lg w-full h-64 object-cover"
      />
    </div>
  </section>
);

export default HeroOne;
