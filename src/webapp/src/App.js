import React, {Component, useState, useEffect} from 'react';
import './App.css';

const SearchBar = () => {
    const [searchText, setSearchText] = useState("Search");

    useEffect(() => {
        console.log("Search bar text changed to " + searchText)
    }, [searchText]);

    const inputChanged = (event) => {
        setSearchText(event.target.value);
        console.log("Performing search... (" + event.target.value + ")");
        //TODO: Perform search api query and change list of scouting data
    };

    return (
      <div className="search-bar">
          <img src="/images/icons/search_icon.png" className="search-bar-icon" alt="magnifying glass icon" />
          <p class="search-bar-text">{searchText}</p>
      </div>
    );

};

class App extends Component {

    render()
    {
        return (
            <div className="App">
                <header className="header clearfix">
                    <img src="/images/frc-283-logo-app-icon.png" className="logo-image" alt="FRC Team 283's logo" />
                    <h2 className="logo-text">FRC 283 Scouting Dashboard</h2>
                </header>
                <main>

                </main>
                <footer></footer>
            </div>
        );
    }

}

export default App;
