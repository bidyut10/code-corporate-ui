import HeroOne from "../components/HeroComponents/HeroOne";
import HeroTwo from "../components/HeroComponents/HeroTwo";
import HeroThree from "../components/HeroComponents/HeroThree";

const HeroPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Hero Designs</h1>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <HeroOne />
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <HeroThree />
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <HeroTwo />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
