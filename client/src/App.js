import React from 'react';
import './App.css';

function App() {

    const [availability, setAvailability] = React.useState(null);

    React.useEffect(() => {
        fetch('http://localhost:8080/availability')
            .then(results => results.json())
            .then(data => {
                setAvailability(data);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Availability Calendar
                </a>
                {JSON.stringify(availability)}
            </header>
        </div>
    );
}

export default App;
