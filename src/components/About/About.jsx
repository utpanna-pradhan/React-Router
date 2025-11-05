import React from "react";
import abtimg from '../../assets/Web search-bro.png';

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src={abtimg}
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            <span className="text-purple-700 font-extrabold"> React development</span>  is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              This demo website is built using React, Vite, and React Router. It
              demonstrates navigation, API calls, and reusable components.
            </p>
            <p className="mt-4 text-gray-600">
              The project is designed for learners who want to understand how
              Single Page Applications (SPAs) work using React Router.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
