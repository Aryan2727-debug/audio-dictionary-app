// this module is responsible for rendering an audio player interface to play word pronounciations
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

function AudioPlayer({ audioFile }) {
    // this function plays the audio on button click
    function playMusic() {
        const audio = new Audio(audioFile);
        audio.play();
    };
    return(
        <>
            <button
            onClick={playMusic}
            className="bg-purple-200 rounded-full w-14 h-14 flex justify-center items-center mt-2"
            >
            <BsFillPlayFill className="  text-purple-500 w-7 h-7" />
            </button>
        </>
    )
};

export default AudioPlayer;