import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const HeroFive = () => {
  return (
    <section className="text-gray-800 min-h-screen flex flex-col py-8 px-4 sm:px-6 lg:p-20">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Profile, Summary, and Contact */}
        <div className="flex flex-col items-center lg:items-start space-y-8 lg:space-y-12">
          {/* Profile Header */}
          <div className="text-center lg:text-left">
            <img
              src="https://images.unsplash.com/photo-1517940310602-26535839fe84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile Picture"
              className="w-32 h-32 rounded-full mx-auto lg:mx-0 border-4 border-white shadow-lg bg-contain"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase mt-4">
              John Doe
            </h1>
            <p className="text-lg sm:text-xl font-medium text-gray-600 mt-4">
              Full Stack Developer | React Specialist | Tech Enthusiast
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl text-gray-600 hover:text-gray-800 transition duration-300" />
              </a>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl text-gray-600 hover:text-gray-800 transition duration-300" />
              </a>
              <a href="mailto:johndoe@example.com">
                <FaEnvelope className="text-3xl text-gray-600 hover:text-gray-800 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-2xl uppercase sm:text-3xl font-semibold mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              I am a highly skilled Full Stack Developer with a passion for
              creating innovative and efficient solutions. With expertise in
              React, Node.js, and various other technologies, I am adept at
              tackling complex problems and delivering high-quality software. My
              goal is to continuously learn and apply new technologies to make a
              positive impact in the tech industry.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl uppercase sm:text-3xl font-semibold mb-4">
              Contact
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              Feel free to reach out to me via email or connect with me on
              LinkedIn or GitHub. I am always open to discussing new
              opportunities and collaborations.
            </p>
          </div>
        </div>

        {/* Right Column: Skills and Experience */}
        <div className="space-y-8 lg:space-y-12">
          {/* Skills */}
          <div>
            <h2 className="text-2xl uppercase sm:text-3xl font-semibold mb-4">
              Skills
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-700">
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>Express</li>
              <li> SQL</li>
              <li>HTML5</li>
              <li>Tailwind CSS</li>
              <li>GitHub</li>
              <li>React </li>
              <li>Node.js </li>
              <li>MongoDB </li>
              <li>HTML5</li>
              <li>Git</li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-2xl uppercase sm:text-3xl font-semibold mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Senior Developer at TechCorp
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Jan 2020 - Present
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  Led a team of developers in building scalable web applications
                  using React and Node.js. Implemented CI/CD pipelines and
                  improved code quality through rigorous testing and code
                  reviews.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Frontend Developer at WebWorks
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Jun 2017 - Dec 2019
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  Developed and maintained user interfaces for various web
                  applications using React and Redux. Collaborated with
                  designers to create responsive and user-friendly designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFive;
