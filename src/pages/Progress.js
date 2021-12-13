import React, { useState } from 'react';

import ProgressIdb from '../data/progress-idb';

import ChooseWorkout from './ChooseWorkout';
import WorkoutProgress from './WorkoutProgress';

const Progress = () => {
    const [component, setComponent] = useState('');

    React.useEffect(() => {
        const getData = async () => {
        const response = await ProgressIdb.getOnProgress();

        if (response.length===0) {
            setComponent(<ChooseWorkout />);
        }
        else{
            setComponent(<WorkoutProgress />);
        };
    }
        getData();
    });
    return(
        <div className="px-4 mb-3 md:px-24">
            {component}
        </div>
    );
}

export default Progress;