import data from './MovieData.json';
import NavBar from './NavBar';

function MovieList() {
  const movie = data.MovieData;
  return (
    <>
      <NavBar />
      <h1
        style={{ display: 'flex', justifyContent: 'center' }}
        className="mt-3 mb-3"
      >
        Movie Collection
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {movie.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
              <td>{m.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
