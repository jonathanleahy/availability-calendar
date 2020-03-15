import React from 'react';
import './App.css';
import Diary from "./Components/Diary";
import Schedule from "./Classes/Schedule";
import cloneDeep from 'lodash/cloneDeep';

function App() {

    const [availability, setAvailability] = React.useState(null);
    const [schedule, setSchedule] = React.useState(new Schedule());

    React.useEffect(() => {
        // fetch('http://localhost:8080/availability')
        //     .then(results => results.json())
        //     .then(data => {
        //         setAvailability(data);
        //     });
        async function fetchAvailability() {
            await schedule.getLiveSchedule();
            const newSchedule = cloneDeep(schedule);
            setSchedule(newSchedule)
        }
        fetchSchedule();

        async function fetchSchedule() {
            await schedule.getLiveSchedule();
            const newSchedule = cloneDeep(schedule);
            setSchedule(newSchedule)
        }
        fetchSchedule();

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
