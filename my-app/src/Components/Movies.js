import MovieItem from "./MovieItem"; // Importing the MovieItem component

// Movies component that takes in a list of movies as props
const Movies = (props) => {
    
    // Using the map function to go through each movie in the myMovies array and render a MovieItem for each one
    return props.myMovies.map(
        (movie) => {
            // Passing each movie object as a prop to the MovieItem component and adding a unique key using the movie's imdbID because error happens when a item doesn't have a unique key
            return <MovieItem myMovie={movie} key={movie.imdbID}></MovieItem>
        }
    );
}

export default Movies; // Exporting the Movies component to be used in other parts of the app
