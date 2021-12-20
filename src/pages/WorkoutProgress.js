import React from "react";
import { NavLink } from 'react-router-dom';

import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';


import ProgressIdb from '../data/progress-idb';

import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';

const WorkoutProgress = () => {
    return (
        <div className="px-4 mb-3 md:pl-0 md:pr-12">
            <h1 className="text-xl lg:text-4xl tracking-wide font-bold">Hi, Nama Orang</h1>
            <p className="text-sm  lg:text-base xl:text-lg text-green-300 mb-8">Your Achievement today</p>
            <UserComponent />
        </div>
    )
}


  
  const UserComponent = props => {
    const [data, setData] = React.useState([]);
    
    const [checkedState, setCheckedState] = React.useState(
        new Array(4).fill(false)
      );
    const [percentage, setPercentage] = React.useState(0);
    React.useEffect(() => {
        const getData = async () => {
        const response = await ProgressIdb.getOnProgress();
        setData(response);

        const count = checkedState.filter(Boolean).length;

        if (count===4) {
            setDisable(false);
        }
        else{
            setDisable(true);
        }

        const n = count/4*100;

        const checkLength = n.toFixed();

    setPercentage(checkLength);
        };
        getData();
    },);
      
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
 
    }

    const [disable, setDisable] = React.useState(true);


    return (
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-5 lg:space-x-24 xl:space-x-48">
            <div className="flex flex-col items-center mb-8">
                <div className="w-48 h-48 m-auto mb-4 md: lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                    <CircularProgressbarWithChildren  value={percentage}
                    strokeWidth={4}
                    styles={buildStyles({
                
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',
                
                        textSize: `24px`,
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                
                        // Colors
                        pathColor: `#16C79A`,
                        trailColor: `#CDCDCD`,
                    })}>
                        <p className="text-3xl lg:text-4xl font-bold">{percentage} %</p>
                    </CircularProgressbarWithChildren >
                </div>
                    <h2 className="text-lg lg:text-xl xl:text-3xl font-bold">Level 1</h2>
                    <p className="text-sm lg:text-base xl:text-lg text-center text-green-400">In this level burn 700 kcal <br/>calories needed</p>
            </div>
            <form className="space-y-4 flex flex-col justify-center max-w-xs lg:max-w-md xl:max-w-3xl">
            <div className="w-full grid grid-cols-3 md:flex-col">
                <div className="flex items-center">
                    <img src="./image/stretching.jpg" alt="tes"
                        className="h-20 w-24 md:h-16 md:w-20 lg:h-24 lg:w-32 xl:h-32 xl:w-40"></img>
                </div>
                <div className="flex flex-col justify-center text-left ml-4 mr-8">
                    <p className="text-sm lg:text-lg xl:text-xl font-bold">Stretching</p>
                    <p className="text-xs lg:text-sm xl:text-base text-green-400">5 mins</p>
                </div>
                <label className="custom-checkbox flex justify-center items-center">
                    <input type="checkbox"
                    checked={checkedState[0]}
                    onChange={() => handleOnChange(0)}/>
                    <RiCheckboxBlankCircleLine className="unchecked w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-gray-400" />
                    <RiCheckboxCircleFill className="checked w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-green-400"/>
                </label>
            </div>
                {data.map((item) => (
            <div className="w-full grid grid-cols-3 justify-between md:flex-col md:items-center">
                <div className="flex items-center">
                    <img src={`./image/${item.workout}.jpg`} alt="tes"
                        className="h-20 w-24 md:h-16 md:w-20 lg:h-24 lg:w-32 xl:h-32 xl:w-40"></img>
                </div>
                <div className="flex flex-col justify-center text-left ml-4 mr-8">
                    <p className="text-sm lg:text-lg xl:text-xl font-bold">{item.workout}</p>
                    <p className="text-xs lg:text-sm xl:text-base text-green-400">15 mins</p>
                </div>
                <label className="custom-checkbox flex justify-center items-center">
                    <input type="checkbox"
                    checked={checkedState[1]}
                    onChange={() => handleOnChange(1)}/>
                    <RiCheckboxBlankCircleLine className="unchecked w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-gray-400" />
                    <RiCheckboxCircleFill className="checked w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-green-400"/>
                </label>
            </div>
                ))}
            <div className="w-full grid grid-cols-3 justify-between md:flex-col md:items-center">
                <div className="flex items-center">
                    <img src="./image/yoga.jpg" alt="tes"
                        className="h-20 w-24 md:h-16 md:w-20 lg:h-24 lg:w-32 xl:h-32 xl:w-40"></img>
                </div>
                <div className="flex flex-col justify-center text-left ml-4 mr-8">
                    <p className="text-sm lg:text-lg xl:text-xl font-bold">Relaxation</p>
                    <p className="text-xs lg:text-sm xl:text-base text-green-400">5 mins</p>
                </div>
                <label className="custom-checkbox flex justify-center items-center">
                    <input type="checkbox"
                    checked={checkedState[2]}
                    onChange={() => handleOnChange(2)} />
                    <RiCheckboxBlankCircleLine className="unchecked w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-gray-400" />
                    <RiCheckboxCircleFill className="checked w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-green-400"/>
                </label>
            </div>
            <div className="w-full grid grid-cols-3 justify-between md:flex-col md:items-center">
                <div className="flex items-center">
                    <img src="./image/water.svg" alt="tes"
                        className="h-20 w-24 md:h-16 md:w-20 lg:h-24 lg:w-32 xl:h-32 xl:w-40"></img>
                </div>
                <div className="flex flex-col justify-center text-left ml-4 mr-8">
                    <p className="text-sm lg:text-lg xl:text-xl font-bold">Drink Water</p>
                    <p className="text-xs lg:text-sm xl:text-base text-green-400">2 liters</p>
                </div>
                <label className="custom-checkbox flex justify-center items-center">
                    <input type="checkbox"
                    checked={checkedState[3]}
                    onChange={() => handleOnChange(3)} />
                    <RiCheckboxBlankCircleLine className="unchecked w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-gray-400" />
                    <RiCheckboxCircleFill className="checked w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-green-400"/>
                </label>
            </div>
            <div className="flex justify-center">
                <NavLink end to="/updatedataform">
                    <button disabled={disable} onClick={()=>ProgressIdb.finishProgress(data[0])}
                    className=" bg-green-500 hover:bg-green-700 w-full md:w-36 text-center text-white font-normal py-2 px-4
                                        rounded focus:outline-none focus:shadow-outline xl:px-6
                                        xl:text-xl xl:w-48" type="button">Continue</button>
                </NavLink>
            </div>
            </form>
        </div>
    );
  };

export default WorkoutProgress;