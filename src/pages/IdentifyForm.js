import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios"; 

import ProgressIdb from '../data/progress-idb';

const IdentifyForm = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = React.useState();
    const [goals, setGoals] = React.useState([]);
    const [token, setToken] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
        const response = await ProgressIdb.getToken();
        const token = await response[0].token;
        setToken(token);
        const result = await axios.get('https://cardio.rizqisyahrendra.tech/api/list-goal',
            {headers: {Authorization : token}});
            setGoals(result.data.body);
    };
    getData();
}, []);

    const onSubmit = (data) => {
      axios
          .post('https://cardio.rizqisyahrendra.tech/api/identify', data,
          {
            headers: {
            'Content-Type': 'application/json',
            Authorization : token}
        })
          .then(response => {window.location.href = '/'})
          .catch(errors => {setError(errors.response.data.message[0])});
    }
    return (
    <div className="fixed top-0 z-10 bg-white w-screen h-screen overflow-scroll grid grid-cols-1">
        <div className="relative mx-5 my-2 pt-8 mw-xl lg:mx-48">
            <h1 className="text-3xl font-bold mb-12 md:text-5xl">Fill the field <br />
                below</h1>
                <form  onSubmit={handleSubmit(onSubmit)}
                className="mb-4 md:mb-8">
                    <div className="mb-4 md:mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-10">
                        <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="age">
                            Age
                        </label>
                        <input {...register("age")}
                        className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight
                                        focus:outline-none" id="age" type="text" placeholder="Age" />
                        </div>
                        <div className="mb-4 md:mb-8">
                            <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl">
                                Sex
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded border border-gray-400">
                                    <input {...register("sex")}
                                    id="male" type="radio" name="sex" value="male" className="hidden" />
                                    <label for="male" className="flex items-center cursor-pointer text-sm py-3 px-2">
                                    <span className="w-3 h-3 inline-block mr-2 md:text-xl rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                    Male</label>
                                </div>
                                <div className="rounded border border-gray-400">
                                    <input {...register("sex")}
                                    id="female" type="radio" name="sex" value="female" className="hidden" />
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
                        <input {...register("height")}
                        className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="height" type="text" placeholder="Centimeter" />
                        </div>
                        <div className="mb-4">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="weight">
                            Weight
                        </label>
                        <input {...register("weight")}
                        className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="weight" type="text" placeholder="Kilogram" />
                        </div>
                        <div className="mb-4 md:mb-8">
                            <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl">
                                Goal
                            </label>
                            <div className="grid grid-cols-1 gap-4">
                            {goals.map((goal) => (
                                <div className="rounded border border-gray-400">
                                    <input {...register("goal")}
                                    id={goal.name} type="radio" name="goal" value={goal.id} className="hidden" />
                                    <label for={goal.name} className="flex items-center cursor-pointer text-sm md:text-base lg:text-xl py-3 px-2">
                                    <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                    {goal.name}</label>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center">
                    <p className='font-bold text-red-500'>{error}</p>
                    <button className="bg-green-500 hover:bg-green-700 w-full md:max-w-sm md:mx-auto text-center text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save
                    </button>
                </div>
                </form>
        </div>
    </div>
    );
}

export default IdentifyForm;