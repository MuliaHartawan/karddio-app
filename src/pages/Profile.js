import React from 'react';

const Profile = () => {
    return(
        <div className="px-4 mb-3 md:px-24" >
            <h1 className="text-3xl lg:4xl tracking-wide font-bold mb-8" >Your Profile</h1>
            <div className="flex flex-col md:flex-row justify-between" >
                <div className="flex flex-col justify-center items-center space-y-4 md:w-1/3 mb-2" >
                    <div className="relative px-2" >
                        <img src="./image/image-profile.jpg" alt=""
                            className="relative w-32 h-32 rounded-full md:w-40 md:h-40 lg:w-48 lg:h-48" >
                            </img>
                        <span className="absolute flex items-center justify-center text-white right-0 bottom-2 h-10 w-10 lg:h-12 lg:w-12 
                                        lg:bottom-4 lg:right-2 shadow-green rounded-full bg-green-400" >Lv.1</span>
                    </div>
                    <h2 className="font-medium text-xl lg:text-2xl" >Nama Orang</h2>
                </div>
                <div className="md:w-2/3 md:mr-16 md:pl-8 lg:mr-24 lg:ml-12 lg:max-w-xl" >
                    <div>
                        <h3 className="text-xl font-medium mb-2 lg:2xl" >Goal</h3>
                        <p className="font-normal rounded-md w-full border border-gray-400 pl-2 py-3 mb-3" >
                        Maintain current weight
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-2 lg:2xl" >Ideal Weight</h3>
                        <p className="font-normal rounded-md w-full border border-gray-400 pl-2 py-3" >
                        69
                        </p>
                    </div>
                    <div className="flex justify-center mt-12 mb-8 md:mt-8">
                        <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                            Reset Goal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;