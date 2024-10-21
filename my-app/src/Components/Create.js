import { useState } from "react";

function Create() {
  // State to store the movie title, year, and poster URL
  const [title, setTitle] = useState('');   // Movie title state
  const [year, setYear] = useState('');     // Movie year state
  const [poster, setPoster] = useState(''); // Movie poster URL state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Log the movie details (title, year, and poster URL) to the console
    console.log({
      title,
      year,
      poster
    });
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      
      {/* Form for adding movie details */}
      <form onSubmit={handleSubmit}>
        
        {/* Input for Movie Title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title} // Bind the input to the title state
            onChange={(e) => { setTitle(e.target.value) }} // Update title state on change
          />
        </div>
        
        {/* Input for Movie Year */}
        <div className="form-group">
          <label>Movie Year: </label>
          <input type="number"
            className="form-control"
            value={year} // Bind the input to the year state
            onChange={(e) => { setYear(e.target.value) }} // Update year state on change
          />
        </div>
        
        {/* Input for Movie Poster URL */}
        <div className="form-group">
          <label>Movie Poster URL: </label>
          <input type="text"
            className="form-control"
            value={poster} // Bind the input to the poster state
            onChange={(e) => { setPoster(e.target.value) }} // Update poster state on change
          />
        </div>
        
        {/* Submit button */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;
