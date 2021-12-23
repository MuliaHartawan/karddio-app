import React from 'react';
import axios from 'axios';

import ProgressIdb from '../data/progress-idb';

const Achievement = () => {
    const [calories, setCalories] = React.useState([]);
    const [level, setLevel] = React.useState([]);
    const [point, setPoint] = React.useState([]);
    const [weight, setWeight] = React.useState([]);
    const [token, setToken] = React.useState([]);
    React.useEffect(() => {
        const getData = async () => {
            const getToken = await ProgressIdb.getToken();
            const token = await getToken[0].token;
            setToken(token);
            await axios
            .get('http://cardio.rizqisyahrendra.tech/api/profile', 
            {headers: {Authorization : token}})
            .then(response => {
                const weight = response.data.body.weight;
                setWeight(weight);
            })
            await axios
            .get('http://cardio.rizqisyahrendra.tech/api/start-workout',
            {headers: {Authorization : token}})
            .then(response => {
                const rules = response.data.body.rules;
                setCalories(rules[rules.length - 1]);
                const level = response.data.body.rules[0].leaderboards.ruleId;
                setLevel(level);
                const point = response.data.body.rules[0].point;
                setPoint(point);
            })    
        };
        getData();
    }, [])

    const completeWorkout = async () => {
       await axios
            .post('http://cardio.rizqisyahrendra.tech/api/start-workout', {},
            {headers: {Authorization : token}})
            .then(response => {
                window.location.href = '/alert'
            })
          .catch(errors => {console.log(errors.response)});
 
    }
    return (
        <div className="px-4 mb-3 md:px-24">
            <h1 className="font-bold text-3xl lg:text-5xl tracking-wide" >Final Calories</h1>
            <p className="text-sm font-light text-green-400 mb-3 lg:text-2xl" >Great, you’ve been completed level {level}</p>
            <div className="flex flex-col md:flex-row" >
                <div className="grid grid-cols-3 md:w-2/3 md:mr-16 md:pl-8 lg:mr-24 lg:max-w-xl
                                 p-6 gap-x-3 gap-y-10 rounded-lg bg-gradient-to-l from-green-300 to-blue-400" >
                    <div className="flex flex-col items-center text-white space-y-2 font-medium text-white" >
                        <h2 className="text-center lg:text-xl lg:font-medium" >Duration <br />workout</h2>
                        <p className="font-light lg:text-lg" >{calories.duration_workout} Minutes</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium" >
                        <h2 className="text-center lg:text-xl lg:font-medium" >Weight <br />Before</h2>
                        <p className="font-light lg:text-lg" >{weight} Kg</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium" >
                        <h2 className="text-center lg:text-xl lg:font-medium" >Calories <br />Need</h2>
                        <p className="font-light lg:text-lg" >{calories.need_calories} cal</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium" >
                        <h2 className="text-center lg:text-xl lg:font-medium" >Burn <br />Calories</h2>
                        <p className="font-light lg:text-lg" >{calories.burn_calories} cal</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium" >
                        <h2 className="text-center lg:text-xl lg:font-medium" >Weight <br />After</h2>
                        <p className="font-light lg:text-lg" >{weight - 1} Kg</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium pb-8" >
                        <h2 className="text-center lg:text-xl lg:font-medium" >Current <br />Calories</h2>
                        <p className="font-light lg:text-lg" >{calories.need_calories - calories.burn_calories} cal</p>
                    </div>
                </div>
                <div className="md:w-1/3 lg:mr-16" >
                    <div className="flex flex-col justify-center items-center mt-4 md:mt-0 space-y-4 md:space-y-6" >
                        <div className="relative pt-4" >
                            <img src="./image/trophy.png" alt=""
                                    className="w-24 h-24 md:w-32 md:h-32 lg:h-40 lg:w-40" ></img>
                            <span className="absolute bg-green-400 w-8 h-8 md:w-12 md:h-12 rounded-full top-0 right-2
                                            flex items-center justify-center font-medium text-white md:text-lg" >{level}</span>
                        </div>
                        <p className="text-2xl md:text-3xl" ><span className="font-medium text-yellow-400" >+{point} </span>points</p>
                            <button onClick={()=> completeWorkout()}
                            className="bg-green-500 hover:bg-green-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4
                                            rounded-md focus:outline-none focus:shadow-outline" type="button">
                                Next Level
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
