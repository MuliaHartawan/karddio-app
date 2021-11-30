import React from 'react';

const DataSaved = () => {
    return (
  <div className="fixed top-0 z-10 bg-white w-screen h-screen overflow-scroll grid grid-cols-1">
      <div className="relative mx-5 my-2 pt-8 mw-xl md:mx-40 lg:mx-64">
            <div className="flex justify-center md:my-8 lg:my-4">
                <img className="max-w-sm" src="./image/data-saved.jpg" alt="identify" />
            </div>
            <div>
                <h1 className="text-3xl mt-8 mb-6 font-bold text-left
                                md:text-5xl md:text-center">
                Your data has been saved
                </h1>
                <p className="text-base text-left text-green-400
                                md:text-2xl md:text-center">
                Lets start your workout journey with us
                </p>
            </div>
            <div className="flex justify-center mt-24 mb-8 lg:mt-8">
                <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                    Continue
                </button>
            </div>
      </div>
  </div>
    );
}

export default DataSaved;