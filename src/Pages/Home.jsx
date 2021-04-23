import './Home.css';
import Navbar from '../Component/Navbar'
import Header from '../Component/Header'
import Product from '../Component/Product'
import Calendar from '../Component/Calendar'
import celendar from '../assets/calendar-alt-solid.svg'

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Header />
      <div className="home-page-content">
        <div className="home-page-content-dashboard">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home-page-content-celendar">
          <div className="home-page-content-celendar-header">
            <a className="home-page-content-celendar-header-sidenav-icon" href="#"><img src={celendar}></img></a>
            <h1>JUNE</h1>
          </div>
          <Calendar />
        </div>
      </div>
    </div>

  );
}

export default Home
