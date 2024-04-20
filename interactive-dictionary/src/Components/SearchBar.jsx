// this module provides a search bar interface for users to input their search queries
import React, { useState } from "react";
// importing the required icons from 'react-icons' library
import { AiOutlineSearch } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

// passing the callback prop to SearchBar component
function SearchBar({ callback }) {
    // this state variable initializes the state of the word, with value as empty string at first
    const [word, setWord] = useState("");
    // this state variable intitializes the type of icon to be displayed, with default value as "search"
    const [icon, setIcon] = useState("search");

    // this function is called when a key is pressed in the input field
    function handleKeyDown(e) {
        if (e.key === 'Enter' && word) {
            callback(word);
            setIcon("cancel");
        }
    }

    // this function handles the toggle between search and cancel icons
    function handleIconClick() {
        if (icon === "cancel") {
            setWord("");
            setIcon("search");
        }
        if (icon === "search" && word) {
            callback(word);
        }
    }

    // this function handles the change in the input field
    function handleChange(e) {
        setWord(e.target.value);
    }

    return(
        <div className="relative mb-4 mt-5 ml-1 sm:ml-0">
            <input 
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                value={word}
                placeholder="Search a word"
                className="border-solid focus:outline-none border-5 rounded-lg w-full bg-slate-100 text-slate-950 px-2 p-2 placeholder-slate-950 font-bold"
            />
            <button 
                className="absolute top-2.5 right-3 translate-y-1 cursor-pointer text-violet-600"
                onClick={handleIconClick}
            >
            {icon === "search" ? <AiOutlineSearch /> : <LiaTimesSolid />}
            </button>
        </div>
    )
};

export default SearchBar;