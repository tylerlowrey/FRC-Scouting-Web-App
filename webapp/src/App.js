import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
    let [backgroundColor, setBackgroundColor] = useState("#CCC");

    return (
        <div className="App" style={{background: backgroundColor}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
