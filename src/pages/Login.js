import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios"; 
import { NavLink } from 'react-router-dom';

import ProgressIdb from '../data/progress-idb';
import { AiOutlineLock } from 'react-icons/ai'
const Login = () =>
    {const { register, handleSubmit } = useForm();
    
    const [error, setError] = React.useState();

    const onSubmit = async (data) => {
    axios
        .post('https://cardio.rizqisyahrendra.tech/api/login', data)
        .then(response => {
           if (response.data.code === 404) {
              return setError(response.data.message)
        } 
        window.location.href = '/identifypopup'
        ProgressIdb.addToken(`Bearer ${response.data.data.access_token}`);
               
        })
        .catch(errors => {
            setError(errors.response.data.message[0])
        });
    }
    return (
        <div className="fixed top-0 z-10 bg-white w-screen h-screen overflow-scroll grid grid-cols-1">
            <div className="relative mx-5 my-2 pt-8 md:mx-24 grid grid-cols-1 md:grid-cols-2">
                  <div className="flex justify-center items-center md:w-full">
                      <img className="w-full" src="./image/login.jpg" alt="" />
                  </div>
                  <div className="md:flex md:justify-center md:items-center" >
                      <div className="max-w-sm md:w-2/3" >
                          <h1 className="text-3xl mt-8 md:mt-0 mb-6 md:mb-20 font-semibold text-left
                                          md:text-5xl md:text-center ">
                          Login
                          </h1>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="flex items-center border-b border-gray-400 py-2">
                                <i className="text-gray-400">@</i>
                                <input {...register("email", {pattern: /^\S+@\S+$/i})}
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Email address" />
                            </div>
                            <div class="flex items-center border-b border-gray-400 py-2">
                                <AiOutlineLock className="text-gray-400" />
                                <input {...register("password")}
                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" aria-label="Password" />
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4 mb-8 md:mt-8">
                                <p className='font-bold text-red-500'>{error}</p>
                                <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="submit">
                                    Login
                                </button>
                            </div>
                          </form>
                          <NavLink end to="/signup">
                              <div className="text-center" >
                                  <p className="text-xs font-medium" >Don’t have an account ? <a href="tes" className="text-blue-500" >Sign Up</a></p>
                              </div>
                          </NavLink>
                      </div>
                  </div>
            </div>
        </div>
    );
}

export default Login;