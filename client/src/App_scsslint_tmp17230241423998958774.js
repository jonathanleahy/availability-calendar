import React from 'react';
import './App.css';
import Diary from "./Components/Diary";
import Schedule from "./Classes/Schedule";
import cloneDeep from 'lodash/cloneDeep';
import Availability from "./Classes/Availability";

function App() {

    const [availability, setAvailability] = React.useState(new Availability);
    const [schedule, setSchedule] = React.useState(new Schedule());

    React.useEffect(() => {

        async function fetchAvailability() {
            await schedule.getAvailability();
            const newAvailability = cloneDeep(availability);
            setAvailability(newAvailability)
        }
        fetchAvailability();

        // async function fetchSchedule() {
        //     await schedule.getLiveSchedule();
        //     const newSchedule = cloneDeep(schedule);
        //     setSchedule(newSchedule)
        // }
        // fetchSchedule();

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Availability calendar</h1>
                <Diary/>
                {JSON.stringify(availability)}
                {JSON.stringify(schedule)}
            </header>
        </div>
    );
}

export default App;
