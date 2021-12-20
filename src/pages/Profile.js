import React from 'react';
import axios from "axios"; 
import { NavLink } from 'react-router-dom';

import ProgressIdb from '../data/progress-idb';

const Profile = () => {
    const [data, setData] = React.useState([]);
    const [goal, setGoal] = React.useState([]);
    const [level, setLevel] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
        const response = await ProgressIdb.getToken();
        const token = await response[0].token;
        await axios
        .get('http://localhost:5000/api/profile', 
        {headers: {Authorization : token}})
        .then(response => {
            setData(response.data.body);
            setGoal(response.data.body.goals[0].name)
            setLevel(response.data.body.rules[0].name)
        })
    };
    getData();
}, []);
    return(
        <div className="px-4 mb-3 md:px-24" >
            <h1 className="text-3xl lg:4xl tracking-wide font-bold mb-8" >Your Profile</h1>
            <div className="flex flex-col md:flex-row justify-between" >
                <div className="flex flex-col justify-center xl:ml-12 items-center space-y-4 md:w-1/3 mb-2" >
                    <div className="relative px-2" >
                        <img src="./image/image-profile.jpg" alt=""
                            className="relative w-32 h-32 rounded-full md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56" >
                            </img>
                        <span className="absolute flex items-center justify-center text-white right-0 bottom-2 h-10 w-10 lg:h-12 lg:w-12 
                                        lg:bottom-4 lg:right-2 shadow-green rounded-full bg-green-400" >{level}</span>
                    </div>
                    <h2 className="font-medium text-xl lg:text-2xl" >{data.name}</h2>
                </div>
                <div className="md:w-2/3 md:mr-16 md:pl-8 lg:mr-24 lg:ml-12 lg:max-w-xl" >
                    <div>
                        <h3 className="text-xl font-medium mb-2 lg:2xl" >Goal</h3>
                        <p className="font-normal rounded-md w-full border border-gray-400 pl-2 py-3 mb-3" >
                        {goal}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-2 lg:2xl" >Ideal Weight</h3>
                        <p className="font-normal rounded-md w-full border border-gray-400 pl-2 py-3" >
                        69
                        </p>
                    </div>
                    <div className="flex justify-center mt-12 mb-8 md:mt-8">
                        <NavLink end to="/updatedataform">
                            <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                                Reset Goal
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;