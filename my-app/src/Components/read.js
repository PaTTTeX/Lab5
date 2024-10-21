import Movies from "./Movies"; // Importing the Movies component to display the list of movies
import { useEffect, useState } from "react"; // Importing React hooks: useEffect and useState
import axios from "axios"; // Importing axios for making HTTP requests

function Read() {
  // State to store the fetched movies
  const [movies, setMovies] = useState([]);

  // useEffect to fetch data when the component is mounted
  useEffect(() => {
    // Fetching the movie data from the provided API endpoint
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        // On successful response, updating the movies state with the fetched data
        setMovies(response.data.movies);
      })
      .catch((error) => {
        // Logging any errors in case the request fails
        console.log(error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>This is my read Component.</h2>
      
      {/* Passing the fetched movies to the Movies component as a prop */}
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;
