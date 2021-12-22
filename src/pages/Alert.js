import React from 'react';
import { NavLink } from 'react-router-dom';

const Alert = () => {
    return (
        <div className="fixed top-0 z-10 bg-white w-screen h-screen overflow-scroll grid grid-cols-1">
        <div className="relative mx-5 my-2 pt-8 mw-xl md:mx-40 lg:mx-64">
              <div className="flex justify-center md:my-8 lg:my-4">
                  <img className="w-full max-w-sm" src="./image/Alert.png" alt="identify" />
              </div>
              <div>
                  <h1 className="text-3xl mt-8 mb-6 font-bold text-left
                                  md:text-5xl md:text-center">
                  Ready to the next level ?
                  </h1>
                  <p className="text-base text-left text-green-400
                                  md:text-2xl md:text-center">
                  Lets push your spirit to get your target
                  </p>
              </div>
              <div className="flex flex-col space-y-4 md:flex-row justify-center md:space-y-0 md:space-x-6 mt-20 lg:mt-8">
                  <NavLink end to="/progress">
                      <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                          Continue
                      </button>
                  </NavLink>
                  <NavLink end to="/updatedataform">
                      <button className="border-2 border-black w-full md:max-w-xs text-center font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                          Reset Goal
                      </button>
                  </NavLink>
              </div>
        </div>
    </div>
    );
}

export default Alert;