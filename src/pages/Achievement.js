import React from 'react';

const Achievement = () => {
    return (
        <div className="px-4 mb-3 md:px-24">
            <h1 className="font-bold text-2xl tracking-wide" >Final Calories</h1>
            <p className="text-sm text-green-400" >Great, you’ve been completed level 1</p>
            <div>
                <div className="grid grid-cols-3 p-6 gap-x-3 gap-y-6 rounded-lg bg-gradient-to-tl from-green-300 to-blue-400" >
                    <div className="flex flex-col items-center text-white space-y-2 font-medium text-white" >
                        <h2>Duration <br />workout</h2>
                        <p>15 mins</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium" >
                        <h2>Weight <br />Borkout</h2>
                        <p>71 Kg</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium" >
                        <h2>Calories <br />Need</h2>
                        <p>1500 kcal</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium" >
                        <h2>Burn <br />Calories</h2>
                        <p>1500 kcal</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium" >
                        <h2>Weight <br />After</h2>
                        <p>71 Kg</p>
                    </div>
                    <div className="flex flex-col items-center text-white space-y-2 font-medium pb-4" >
                        <h2>Current <br />Calories</h2>
                        <p>1500 kcal</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
