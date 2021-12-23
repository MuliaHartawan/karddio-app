import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios"; 

import ProgressIdb from '../data/progress-idb';

const IdentifyPopUp = () => {

    React.useEffect(() => {
        const getData = async () => {
        const response = await ProgressIdb.getToken();
        const token = await response[0].token;
        await axios
        .get('http://localhost:5000/api/profile', 
        {headers: {Authorization : token}})
        .then(response => {
            if (response.data.body.age !== null) {
                window.location.href = '/';
            }
        })
    };
    getData();
},);
    return (
        <div className="fixed top-0 z-10 bg-white w-screen h-screen overflow-scroll grid grid-cols-1">
      <div className="relative mx-5 my-2 pt-8 mw-xl md:mx-40 lg:mx-64">
            <div className="flex justify-center md:my-8 lg:my-4">
                <img className="max-w-sm" src="./image/identify.jpg" alt="identify" />
            </div>
            <div>
                <h1 className="text-3xl mt-8 mb-6 font-bold text-left
                                md:text-5xl md:text-center">
                Identify
                </h1>
                <p className="text-base text-left text-green-400
                                md:text-2xl md:text-center">
                Please fill the field on next page to save your data and we will identify your 
                current calories and lets start your first workout journey
                </p>
            </div>
            <NavLink end to="/identifyform">
                <div className="flex justify-center mt-24 mb-8 lg:mt-8">
                    <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                        Continue
                    </button>
                </div>
            </NavLink>
      </div>
  </div>
    );
}

export default IdentifyPopUp;