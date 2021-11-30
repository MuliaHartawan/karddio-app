import React from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
const SignUp = () => {
    return (
        <div className="fixed top-0 z-10 bg-white w-screen h-screen overflow-scroll grid grid-cols-1">
        <div className="relative mx-5 my-2 pt-8 md:mx-24 grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center items-center md:w-full">
                  <img className="w-full" src="./image/signup.jpg" alt="" />
              </div>
              <div className="md:flex md:justify-center md:items-center" >
                  <div className="max-w-sm md:w-2/3" >
                      <h1 className="text-3xl mt-8 md:mt-0 mb-6 md:mb-20 font-semibold text-left
                                      md:text-5xl md:text-center ">
                      Sign Up
                      </h1>
                      <form>
                        <div class="flex items-center border-b border-gray-400 py-2 mb-2">
                            <VscAccount className="text-gray-400" />
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Full Name" aria-label="Full Name" />
                        </div>
                        <div class="flex items-center border-b border-gray-400 py-2 mb-2">
                            <i className="text-gray-400">@</i>
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Email address" />
                        </div>
                        <div class="flex items-center border-b border-gray-400 py-2 mb-2">
                            <AiOutlineLock className="text-gray-400" />
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" aria-label="Password" />
                        </div>
                        <div className="text-right mt-2" ><a href="tes" className="text-xs font-medium" >Forgot Password ?</a></div>
                        <div className="flex justify-center mt-4 mb-8 md:mt-8">
                            <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                                Login
                            </button>
                        </div>
                      </form>
                      <div className="text-center" >
                          <p className="text-xs font-medium" >Already have an account ? <a href="tes" className="text-blue-500" >Sign In</a></p>
                      </div>
                  </div>
              </div>
        </div>
    </div>
    );
}

export default SignUp;