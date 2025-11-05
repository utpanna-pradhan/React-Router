import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-7xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
            <h2 className="text-4xl   font-bold sm:text-5xl ">
             Welcome to Our <span className="text-purple-700 font-extrabold">Demo Website</span>  <br />
              <span className="hidden sm:block text-xl pt-4">Explore the world of modern web apps built with React and Vite. </span>
               <span className="hidden sm:block text-xl ">Learn how routing, components, and APIs come together to create seamless user experiences. </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-purple-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://www.pngplay.com/wp-content/uploads/13/Illustration-Art-Background-PNG.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://freepngimg.com/save/54802-illustrations-images-png-image-high-quality/1110x1110"
          alt="image2"
        />
      </div>

      <Link to="/about"   className="flex justify-center items-center mx-auto text-white  mb-8  w-50 px-3  py-2 font-medium bg-purple-700 rounded-lg hover:opacity-75"><button>Get Started</button></Link>
    </div>
  );
}

export default Home;
