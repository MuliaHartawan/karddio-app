import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios"; 
import { NavLink } from 'react-router-dom';

import { AiOutlineLock } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = React.useState();
    const onSubmit = (data) => {
      axios
          .post('http://localhost:5000/api/register', data)
          .then(response => {window.location.href = '/login'})
          .catch(errors => {setError(errors.response.data.message[0])});
    }
    return (
        <div className="fixed top-0 z-10 bg-white w-screen h-screen overflow-scroll grid grid-cols-1">
        <div className="relative mx-5 my-2 pt-8 md:mx-24 grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center items-center md:w-full">
                  <img className="w-full" src="./image/jogging.jpg" alt="" />
              </div>
              <div className="md:flex md:justify-center md:items-center" >
                  <div className="max-w-sm md:w-2/3" >
                      <h1 className="text-3xl mt-8 md:mt-0 mb-6 md:mb-20 font-semibold text-left
                                      md:text-5xl md:text-center ">
                      Sign Up
                      </h1>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center border-b border-gray-400 py-2 mb-2">
                            <VscAccount className="text-gray-400" />
                            <input {...register("name")}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Full Name" aria-label="Full Name" />
                        </div>
                        <div class="flex items-center border-b border-gray-400 py-2 mb-2">
                            <i className="text-gray-400">@</i>
                            <input {...register("email")}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Email address" />
                        </div>
                        <div className="flex items-center border-b border-gray-400 py-2 mb-2">
                            <AiOutlineLock className="text-gray-400" />
                            <input {...register("password")}
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" aria-label="Password" />
                        </div>
                        <div className="flex items-center border-b border-gray-400 py-2 mb-2">
                            <AiOutlineLock className="text-gray-400" />
                            <input {...register("confirm_password")}
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Confirm Password" aria-label="Password" />
                        </div>
                        <div className="text-right mt-2" ><a href="tes" className="text-xs font-medium" >Forgot Password ?</a></div>
                    
                            <div className="flex flex-col justify-center mt-4 mb-8 md:mt-8">
                                <p className=' font-bold text-red-500'>{error}</p>
                                <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="submit">
                                    Sign Up
                                </button>
                            </div>
                      </form>
                      <div className="text-center" >
                          <p className="text-xs font-medium" >Already have an account ? 
                            <NavLink end to="/">
                              <a href="tes" className="text-blue-500" >Sign In</a>
                            </NavLink>
                          </p>
                      </div>
                  </div>
              </div>
        </div>
    </div>
    );
}

export default SignUp;