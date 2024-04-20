// this component displays the meanings, parts of speech, definitions, examples and synonyms of a word
import React from "react";

function MeaningDisplay({ data }) {
    console.log(`Received data in the meaning component - ${data}`);
    return(
        <div>
            {data.meanings && (
                <>
                    {data.meanings.map((meaning, index) => (
                        <>
                         <div key={index}>
                           <div className="flex items-center">
                             <h2 style={{color: 'white'}} className="mb-3 font-bold">{meaning.partOfSpeech}</h2>
                             <p className="border-b border-gray-400 grow ml-2"></p>
                           </div>
                           <p style={{color: 'white'}} className="mb-3 text-slate-400">Meaning</p>
                           {meaning.definitions.map((definition) => (
                            <>
                                <h2 style={{color: "white"}} className="mb-2 mx-4">{definition.definition}</h2>
                                {definition.example && (
                                    <h2 style={{color: "white"}} className="mx-4 text-slate-400">{definition.example}</h2>
                                )} 
                            </>
                           ))}
                         </div>
                         {meaning.synonyms.length > 0 && (
                            <div className="relative mb-4">
                                <p style={{color: "white"}} className="text-slate-400">Synonyms: </p>
                                <div>
                                    <h2 style={{color: "yellow"}} className="absolute bottom-0 left-20 text-purple-700 font-medium">
                                    {meaning.synonyms[0]}
                                    </h2>
                                </div>
                            </div>
                         )}
                        </>
                    ))}
                    <div className="relative mt-4">
                     <p className="border-b border-gray-400 mb-3"></p>
                     <p style={{color: "white"}} className="text-slate-400 font-bold">Source:</p>
                     <div>
                        <a href={data.sourceUrls[0]} style={{color: 'blue', textDecoration: 'underline'}} className="absolute bottom-0 left-16">{data.sourceUrls[0]}</a>
                     </div>
                    </div>
                </>
            )}
        </div>
    )
};

export default MeaningDisplay;