import { Link } from "react-router-dom";

const FormOne = () => {

  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center px-4 lg:px-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1619682508024-64c66726a373?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-5xl uppercase lg:text-6xl xl:text-7xl italiana text-purple-950 text-opacity-60 px-10 font-bold mb-4">
            Reactor
          </h1>
          <h1 className="text-3xl text-purple-500 text-opacity-30 px-10 mb-4">
            Your Ultimate Online Code Editor
          </h1>
          <p className="text-base lg:text-lg xl:text-xl text-gray-300 text-opacity-70 p-10 leading-relaxed mb-8 railway">
            With Reactor, effortlessly write, preview, and refine your React
            components, enhanced with the power of Tailwind CSS.
            <br />
            No setups, no hassle — just your creativity at its best. Ready to
            unlock new possibilities?
          </p>
        </div>

        <div className="w-full lg:w-[40%] bg-black bg-opacity-50 p-6 lg:p-8 rounded-3xl shadow-lg">
          <div className="flex justify-center mb-6">
            <h2 className="text-white text-2xl">Welcome Back</h2>
          </div>
          <form className="w-full">
            <div className="inputBox mb-6">
              <input
                placeholder="Enter your email"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="inputBox mb-6">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="inputBox mb-6">
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <p className="text-white text-sm mb-4 railway">
              Don’t have an account?{" "}
              <Link className="text-purple-400 underline">
                Sign Up here
              </Link>
            </p>

            <button
              type="submit"
              className="w-full p-3 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-950 transition-all railway"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
