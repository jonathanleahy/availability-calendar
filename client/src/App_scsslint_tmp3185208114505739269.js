import React from 'react';
import './App.css';
import Diary from "./Components/Diary";

function App() {

    const [availability, setAvailability] = React.useState(null);
    const [diary, setDiary] = React.useState(null);

    React.useEffect(() => {
        fetch('http://localhost:8080/availability')
            .then(results => results.json())
            .then(data => {
                setAvailability(data);
            });
        fetch('http://localhost:8080/diary')
            .then(results => results.json())
            .then(data => {
                setAvailability(data);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Availability calendar</h1>
                <Diary />
                {JSON.stringify(availability)}
                {JSON.stringify(availability)}
            </header>
        </div>
    );
}

export default App;
