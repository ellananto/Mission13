import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Home';
import MovieList from './MovieList';
import Podcasts from './Podcasts';

function NavBar() {
  const homeClick = (event: any) => {
    event.preventDefault();
    ReactDOM.render(<HomePage />, document.getElementById('root'));
  };
  const movieClick = (event: any) => {
    event.preventDefault();
    ReactDOM.render(<MovieList />, document.getElementById('root'));
  };
  const handlePodcastsClick = (event: any) => {
    event.preventDefault();
    ReactDOM.render(<Podcasts />, document.getElementById('root'));
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <a className="navbar-brand" href="/">
          Movie Website
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" onClick={homeClick} href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handlePodcastsClick} href="/">
                My Podcasts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={movieClick} href="/">
                See Movie Collection
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
