const HeroTwo = () => (
  <section className="text-white px-6 sm:px-10 py-20">
    <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-10 lg:space-y-0">
      {/* Left Side: Text and Buttons */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500">
          Join Our
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-600 to-pink-700">
          Global Community
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600">
          Elevate your journey with cutting-edge technology designed for the
          future.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 sm:mt-10">
          <button className="w-full sm:w-auto px-10 sm:px-8 py-2 sm:py-4 bg-transparent border border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out transform ">
            Learn More
          </button>
          <button className="w-full sm:w-auto px-10 sm:px-8 py-3 sm:py-4 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-700 transition duration-300 ease-in-out transform">
            Join Now
          </button>
        </div>
      </div>

      {/* Right Side: Images in Grid */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="https://images.unsplash.com/photo-1592202808636-f5c0eb5ae1f1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Innovation"
          className="w-full h-56 sm:h-64 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-2 transition duration-500 ease-in-out"
        />
        <img
          src="https://images.unsplash.com/photo-1648878136531-15e7d3a88e76?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Innovation"
          className="w-full h-64 sm:h-72 rounded-xl shadow-lg transform hover:scale-105 hover:-rotate-2 transition duration-500 ease-in-out"
        />
        <img
          src="https://images.unsplash.com/photo-1648878136408-c45f1ae995a9?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Innovation"
          className="w-full h-72 sm:h-80 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-2 transition duration-500 ease-in-out"
        />
      </div>
    </div>
  </section>
);

export default HeroTwo;
