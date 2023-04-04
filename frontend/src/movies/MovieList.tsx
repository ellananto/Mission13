import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import NavBar from '../NavBar';

function MovieList() {
  const [movieData, setmovieData] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setmovieData(temp);
    };
    fetchMovie();
  }, []);

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
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
