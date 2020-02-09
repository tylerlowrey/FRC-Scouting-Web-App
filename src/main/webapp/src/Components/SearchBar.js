import React, {useState, useEffect} from 'react';
import '../Styles/Components/SearchBar.css'

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

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
            <input type="text" onChange={inputChanged} value={searchText} className="search-bar-text"
                   placeholder="Search Teams" />
        </div>
    );

};

export default SearchBar;