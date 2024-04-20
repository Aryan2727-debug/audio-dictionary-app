// this module fetches word definitions and audio pronounciations from an external API

export async function fetch_words(word) {
    const dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        // fetching data from the API
        const response = await fetch(dictionaryApi);
        // retrieving the response in JSON format
        const data = await response.json();
        // returning the response
        return data;
    } catch (error) {
        console.log(`Error fetching the dictionary API - ${error}`);
    }
};