import React from 'react';
import { NavLink } from 'react-router-dom';

const IdentifyForm = () => {
    return (
    <div className="fixed top-0 z-10 bg-white w-screen h-screen overflow-scroll grid grid-cols-1">
        <div className="relative mx-5 my-2 pt-8 mw-xl lg:mx-48">
            <h1 className="text-3xl font-bold mb-12 md:text-5xl">Fill the field <br />
                below</h1>
                <form className="mb-4 md:mb-8  grid grid-cols-1 md:grid-cols-2 gap-x-10">
                    <div className="mb-4 md:mb-8">
                    <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="age">
                        Age
                    </label>
                    <input className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight 
                                    focus:outline-none" id="age" type="text" placeholder="Age" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl">
                            Sex
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <div class="rounded border border-gray-400">
                                <input id="male" type="radio" name="sex" value="male" className="hidden" />
                                <label for="male" className="flex items-center cursor-pointer text-sm py-3 px-2">
                                <span className="w-3 h-3 inline-block mr-2 md:text-xl rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                Male</label>
                            </div>
                            <div className="rounded border border-gray-400">
                                <input id="female" type="radio" name="sex" value="female" className="hidden" />
                                <label for="female" className="flex items-center cursor-pointer text-sm py-3 px-2">
                                <span className="w-3 h-3 inline-block mr-2 md:text-xl rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-8">
                    <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="height">
                        Height
                    </label>
                    <input className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="height" type="text" placeholder="Meter" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="weight">
                        Weight
                    </label>
                    <input className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="weight" type="text" placeholder="Kilogram" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl">
                            Goal
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="rounded border border-gray-400">
                                <input id="mantain-weight" type="radio" name="goal" value="mantain-weight" className="hidden" />
                                <label for="mantain-weight" className="flex items-center cursor-pointer text-sm md:text-base lg:text-xl py-3 px-2">
                                <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                Maintain Current Weight</label>
                            </div>
                            <div className="rounded border border-gray-400">
                                <input id="diet" type="radio" name="goal" value="diet" className="hidden" />
                                <label for="diet" className="flex items-center cursor-pointer text-sm md:text-base lg:text-xl py-3 px-2">
                                <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                Diet</label>
                            </div>
                            <div className="mb-8 rounded border border-gray-400">
                                <input id="shape-muscle" type="radio" name="goal" value="shape-muscle" className="hidden" />
                                <label for="shape-muscle" className="flex items-center cursor-pointer text-sm md:text-base lg:text-xl py-3 px-2">
                                <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                Shape Muscle</label>
                            </div>
                        </div>
                    </div>
                </form>
                <NavLink end to="/datasaved">
                    <div className="flex justify-center">
                        <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-sm md:mx-auto text-center text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Save
                        </button>
                    </div>
                </NavLink>
        </div>
    </div>
    );
}

export default IdentifyForm;