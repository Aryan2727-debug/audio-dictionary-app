import React, { useState } from "react";
import MeaningDisplay from "./Components/MeaningDisplay";
import SearchBar from "./Components/SearchBar";
import WordDisplay from "./Components/WordDisplay";
import { fetch_words } from "./API/GetWords";

function App() {
  // this state variable stores the data fetched from the API in the form of an object
  const [data, setData] = useState({});
  // this state variable tracks whether data is being currently fetched
  const [loading, setLoading] = useState(false);
  // this state variable tracks whether a search query has been initiated
  const [searchInitiated, setSearchInitiated] = useState(false);

  async function fetch_data(word){
    try {
      // setting the state variables to true to indicate that data fetching has started
      setLoading(true);
      setSearchInitiated(true);
      // fetching the data from the fetch_words function which uses the dictionary API
      const get_data = await fetch_words(word);
      // setting/updating the data in the state variable object
      setData({ ...get_data[0] });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="m-16">
    <h1 style={{color: 'white', display: 'flex', justifyContent: 'center'}} className="font-bold text-5xl text-slate-100">PhoneticsHub</h1>
      <SearchBar callback={fetch_data} />
      {loading ? (
        <p style={{color: "white"}} className="mt-18 font-bold text-2xl">Loading...</p>
      ) : (
        <>
          {searchInitiated && Object.keys(data).length === 0 ? (
            <p style={{color: 'white'}} className="mt-18 font-bold text-2xl">No words found</p>
          ) : (
            <>
              <WordDisplay data={data}/>
              <MeaningDisplay data={data}/>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
