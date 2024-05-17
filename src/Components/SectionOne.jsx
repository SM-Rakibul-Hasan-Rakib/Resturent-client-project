// import React from 'react';
import img1 from "../assets/home/chef-service.jpg";
import img2 from "../assets/home/Group 16.jpg";
import img3 from "../assets/home/Group 26.jpg";

const SectionOne = () => {
  return (
    <div className="mb-20">
      <div>
        {" "}
        <img src={img1} alt="" />
      </div>
      <div>
        <img className="ml-20  -mt-96 " src={img2} alt="" />
      </div>
      <div className="mt-24">
        <img src={img3} alt="" />
      </div>
      {/* extra section-2-start */}
      <div className="bg-gray-100 p-4 sm:p-8 md:p-16 mt-20">
        <div className="container mx-auto">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/frontend-performance"
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
            >
              <img src={img1} className="h-20 w-20 rounded-full" alt="" />
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Frontend Performance
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices to improve your frontend
                performance
              </span>
            </a>
            <a
              href="/api-security"
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
            >
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                API Security
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices to make your APIs secure
              </span>
            </a>
            <a
              href="/code-review"
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
            >
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Code Reviews
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices for effective code reviews and
                quality
              </span>
            </a>
            <a
              href="/aws"
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
            >
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                AWS
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices for Amazon Web Services (AWS)
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* // extra section-2-end  */}
    </div>
  );
};

export default SectionOne;
