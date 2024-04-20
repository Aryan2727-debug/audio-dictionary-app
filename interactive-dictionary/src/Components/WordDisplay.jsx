// this component renders the word itself and its phonetic pronounciation if available
import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

function WordDisplay({ data }) {
    // this state variable stores the phonetic pronounciation of the word in the form of an object
    const [phonetic, setPhonetic] = useState({});
    // this useEffect hook will execute on every render of the component, whenever the "data" prop changes
    useEffect(() => {
        // checking if the word has meanings available
        if(data.meanings) {
            // filtering out the audio files from the data
            const filteredPhonetics = data.phonetics.filter(
                (phonetic) => phonetic.audio !== ""
            );
            setPhonetic({ ...filteredPhonetics[0] });
        }
    }, [data]);
    return(
        <div className="mb-4 flex justify-between">
            {data.meanings && (
                <>
                    <div>
                        <div>
                            <h2 style={{color: 'white'}} className="font-bold text-3xl text-slate-100">{" "} {data.word}</h2>
                        </div>
                        <div>
                        {/* checking if the phonetic text is available, then display it */}
                            <p className="text-purple-500 font-medium">
                                {phonetic.text ? phonetic.text : data.phonetic}
                            </p>
                        </div>
                    </div>
                    {/* checking if the phonetic audio is available for pronounciation, then playing the audio */}
                    {phonetic.audio && (
                        <div>
                            <AudioPlayer audioFile={phonetic.audio} />
                        </div>
                    )}
                </>
            )}
        </div>
    )
};

export default WordDisplay;