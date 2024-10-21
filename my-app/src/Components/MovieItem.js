// MovieItem component that receives movie details through props
const MovieItem = (props) => {
    return (
        <div>
            {/* Displaying the movie title */}
            <h2>{props.myMovie.Title}</h2>

            {/* Displaying the movie release year */}
            <p>{props.myMovie.Year}</p>

            {/* Displaying the movie poster image */}
            <img src={props.myMovie.Poster} alt={`${props.myMovie.Title} poster`}></img>
        </div>
    );
}

export default MovieItem; // Exporting MovieItem so it can be used in other parts of the app
