import React from 'react';
import './App.css';
import Diary from "./Components/Diary";
import ClientsDiary from "./Classes/ClientsDiary";
import {useAsyncEffect} from "use-async-effect";

function App() {

    const [clientsDay, setClientsDay] = React.useState({});

    useAsyncEffect(async isMounted => {

        async function fetchs(url) {
            const response = await fetch(url);
            return await response.json();
        }

        // read in the availability for the client
        // read in the schedule for the client
        const [availability, schedule] = await Promise.all(
            [
                fetchs('http://localhost:8080/availability/AlexW@contoso'),
                fetchs('http://localhost:8080/schedule/AlexW@contoso')
            ]
        )

        if (!isMounted()) return;

        // build up the clients diary data
        const clientsDiary = new ClientsDiary(availability, schedule)

        // now calculate/pull out the details for this day
        setClientsDay(clientsDiary.getDaysSchedule('2018-08-06T09:00:00'))

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Diary clientsDay={clientsDay}/>
            </header>
        </div>
    );
}

export default App;
