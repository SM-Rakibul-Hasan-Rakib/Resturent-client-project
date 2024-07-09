// import React from "react";

const Navbartwo = () => {
  return (
    <div>
      <nav className="bg-white shadow-sm mt-5">
        <div className="container px-6 py-4 mx-auto">
          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button
              type="button"
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-8">
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-gray-700 md:dark:hover:text-gray-300 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 md:dark:hover:bg-gray-800 dark:hover:bg-gray-500 md:dark:hover:text-gray-400 md:dark:hover:bg-gray-600 md:dark:hover:text-gray-500 md:dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Home
              </a>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-gray-700 md:dark:hover:text-gray-300 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 md:dark:hover:bg-gray-800 dark:hover:bg-gray-500 md:dark:hover:text-gray-400 md:dark:hover:bg-gray-600 md:dark:hover:text-gray-500 md:dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                About
              </a>
              {/* Add more links as needed */}
            </div>
          </div>

          {/* Mobile Navigation (Hidden on desktop) */}
          <div className="lg:hidden">
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-gray-700 md:dark:hover:text-gray-300 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 md:dark:hover:bg-gray-800 dark:hover:bg-gray-500 md:dark:hover:text-gray-400 md:dark:hover:bg-gray-600 md:dark:hover:text-gray-500 md:dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-gray-700 md:dark:hover:text-gray-300 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 md:dark:hover:bg-gray-800 dark:hover:bg-gray-500 md:dark:hover:text-gray-400 md:dark:hover:bg-gray-600 md:dark:hover:text-gray-500 md:dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            >
              About
            </a>
            {/* Add more links as needed */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbartwo;
