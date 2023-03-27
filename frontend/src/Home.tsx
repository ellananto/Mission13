import joel from './JoelHiltonHeadshot.jpg';
import NavBar from './NavBar';

function HomePage() {
  return (
    <>
      <NavBar />
      <center className="mt-5">
        <div className="card" style={{ width: '40rem' }}>
          <img src={joel} className="card-img-top" alt="Joel" />
          <div className="card-body">
            <h5 className="card-title">Welcome to the Home Page!</h5>
            <p className="card-text">
              This page is the home page, displaying Joel Hilton, probably
              Professor Hilton's favorite brother!
            </p>
          </div>
        </div>
      </center>
    </>
  );
}

export default HomePage;
