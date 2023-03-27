import joel from './JoelHiltonHeadshot.jpg';
import NavBar from './NavBar';

function HomePage() {
  return (
    <>
      <NavBar />
      <center>
        <h1>Welcome to the Home Page!</h1>
        <img src={joel} alt="Joel" />
        <p>
          Welcome! This page is the home page, displaying Joel Hilton, Professor
          Hilton's favorite brother!
        </p>
      </center>
    </>
  );
}

export default HomePage;
