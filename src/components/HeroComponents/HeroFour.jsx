import { FaArrowDown } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const HeroFour = () => {
  return (
    <section className="relative bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
      {/* React Icons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 lg:left-8">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter className="text-3xl text-gray-600 hover:text-gray-800 transition duration-300" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub className="text-3xl text-gray-600 hover:text-gray-800 transition duration-300" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram className="text-3xl text-gray-600 hover:text-gray-800 transition duration-300" />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-4">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 uppercase">
          Experience the next generation of technology
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-800">
          Dive into a world of innovation and intelligence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Hero Image with Scroll Icon */}
      <div className="relative z-10 mt-12 sm:mt-16 lg:mt-24 w-full flex justify-center">
        <div className="relative flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AI Innovation"
            className="w-full max-w-lg lg:max-w-3xl rounded-3xl shadow-xl transform hover:scale-105 transition duration-500"
          />
          <FaArrowDown className="absolute text-3xl text-white animate-bounce bottom-6 sm:bottom-8 lg:bottom-12" />
        </div>
      </div>
    </section>
  );
};

export default HeroFour;
