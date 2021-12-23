import React from 'react';

import ProgressIdb from '../data/progress-idb';

const ChooseWorkout = () => {
    return(
        <div className="px-4 mb-3 lg:pl-0 lg:pr-24">
            <h1 className="text-lg md:text-xl lg:4xl tracking-wide font-bold mb-8">Choose your <br />
             workout</h1>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4  md:space-y-0 md:mr-16 lg:mr-20">
                <a href=" " onClick={()=>ProgressIdb.addProgress('Treadmill')}>
                    <div className="w-60 md:w-28 lg:w-32 xl:w-44 px-1 py-2 flex flex-row md:flex-col md:items-center space-x-8 md:space-x-0 rounded-md border border-gray-400">
                        <div className="flex items-center ml-2">
                            <img src="./image/Treadmill.jpg" alt="tes"
                                className="h-16 w-20 md:h-24 md:w-28 lg:h-24 lg:w-28"></img>
                        </div>
                        <p className="flex justify-center items-center text-sm lg:text-lg font-bold">Treadmill</p>
                    </div>
                </a>
                <a href=" " onClick={()=>ProgressIdb.addProgress('Gym')}>
                    <div className="w-60 md:w-28 lg:w-32 xl:w-44 px-1 py-2 flex flex-row md:flex-col md:items-center space-x-8 md:space-x-0 rounded-md border border-gray-400">
                        <div className="flex items-center ml-2">
                            <img src="./image/Gym.jpg" alt="tes"
                                className="h-16 w-20 md:h-24 md:w-28 lg:h-24 lg:w-28"></img>
                        </div>
                        <p className="flex justify-center items-center text-sm lg:text-lg font-bold">Gym</p>
                    </div>
                </a>
                <a href=" " onClick={()=>ProgressIdb.addProgress('Jogging')}>
                    <div className="w-60 md:w-28 lg:w-32 xl:w-44 px-1 py-2 flex flex-row md:flex-col md:items-center space-x-8 md:space-x-0 rounded-md border border-gray-400">
                        <div className="flex items-center ml-2">
                            <img src="./image/Jogging.jpg" alt="tes"
                                className="h-16 w-20 md:h-24 md:w-28 lg:h-24 lg:w-28"></img>
                        </div>
                        <p className="flex justify-center items-center text-sm lg:text-lg font-bold">Jogging</p>
                    </div>
                </a>
                <a href=" " onClick={()=>ProgressIdb.addProgress('Yoga')}>
                    <div className="w-60 md:w-28 lg:w-32 xl:w-44 px-1 py-2 flex flex-row md:flex-col md:items-center space-x-8 md:space-x-0 rounded-md border border-gray-400">
                        <div className="flex items-center ml-2">
                            <img src="./image/Yoga.jpg" alt="tes"
                                className="h-16 w-20 md:h-24 md:w-28 lg:h-24 lg:w-28"></img>
                        </div>
                        <p className="flex justify-center items-center text-sm lg:text-lg font-bold">Yoga</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ChooseWorkout;