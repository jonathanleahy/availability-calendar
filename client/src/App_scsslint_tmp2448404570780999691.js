import React from 'react';
import './App.css';
import Diary from "./Components/Diary";
import Schedule from "./Classes/Schedule";

function App() {

    const [availability, setAvailability] = React.useState(null);
    const [schedule, setSchedule] = React.useState(new Schedule());

    React.useEffect(() => {
        // fetch('http://localhost:8080/availability')
        //     .then(results => results.json())
        //     .then(data => {
        //         setAvailability(data);
        //     });

        await setSchedule( schedule.getLiveSchedule() );

        async function fetchMyAPI() {
            let url = 'http://something';
            let config = {};
            const response = await schedule.getLiveSchedule();
            console.log(response);
        }

        fetchMyAPI();
        
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
