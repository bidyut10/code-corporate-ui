const HeroOne = () => (
  <section className="text-white p-10 lg:p-16 w-full h-full">
    <h1 className="text-4xl md:text-7xl mb-12 font-semibold uppercase leading-tight bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-center">
      Embrace Nature’s Innovation
    </h1>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left: Text Section */}
      <div className="space-y-6">
        <p className="text-lg md:text-2xl text-purple-400">
          Grow with the harmony of nature. Together, we can create sustainable
          solutions that inspire and innovate.
        </p>
        <p className="text-sm md:text-lg text-gray-600">
          Join a global community committed to blending nature’s wisdom with
          cutting-edge technology. Let’s shape the future, one step at a time.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-pink-400 text-pink-400 font-semibold rounded-full hover:bg-pink-400 hover:text-white transition duration-300">
            Learn More
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-purple-700 text-white font-semibold rounded-full shadow-lg hover:bg-purple-800 transition duration-300">
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
        src="https://images.unsplash.com/photo-1607059991241-58ea9e39fd1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Global Innovation"
        className="rounded-xl shadow-lg w-full h-64 object-cover"
      />
    </div>
  </section>
);

export default HeroOne;
