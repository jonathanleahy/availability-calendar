import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [availability, setAvailability] = React.useState(null);

    React.useEffect(() => {
        fetch('http://localhost:8080/availability')
            .then(results => results.json())
            .then(data => {
                setAvailability(data.results[0]);
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
                    Learn React
                </a>
                {JSON.stringify(availability)}
            </header>
        </div>
    );
}

export default App;
