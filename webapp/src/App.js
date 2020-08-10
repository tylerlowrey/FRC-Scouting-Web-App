import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AccountPage from "./components/AccountPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    let [backgroundColor, setBackgroundColor] = useState("#FFF");

    return (
        <div className="App" style={{background: backgroundColor}}>
            <Routes>
                <Route exact path="/account" element={<AccountPage />} />
                <Route path="/:any" element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
