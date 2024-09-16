const HeroTwo = () => (
  <section className="bg-gradient-to-r from-cyan-500 via-green-500 to-gray-900 text-white px-6 sm:px-10 py-20">
    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
      {/* Left Side: Text and Buttons */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl font-semibold uppercase leading-tight">
          Join Our
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold uppercase leading-tight">
          Global Community
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl">
          Transform the way you work with our groundbreaking technologies.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition duration-300">
            Learn More
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300">
            Join Now
          </button>
        </div>
      </div>

      {/* Right Side: Images in Grid */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 lg:mt-0">
        <img
          src="https://images.unsplash.com/photo-1592202808636-f5c0eb5ae1f1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Innovation"
          className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300 h-48 sm:h-56 lg:h-64 lg:translate-y-10"
        />
        <img
          src="https://images.unsplash.com/photo-1648878136531-15e7d3a88e76?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Innovation"
          className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300 h-48 sm:h-64 lg:h-72"
        />
        <img
          src="https://images.unsplash.com/photo-1648878136408-c45f1ae995a9?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Innovation"
          className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300 h-48 sm:h-72 lg:h-80 lg:translate-y-6"
        />
      </div>
    </div>
  </section>
);

export default HeroTwo;
