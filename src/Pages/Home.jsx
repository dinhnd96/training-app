import './Home.css';
import Navbar from '../Component/Navbar'
import Header from '../Component/Header'
import Product from '../Component/Product'
import Calendar from '../Component/Calendar'
import celendar from '../assets/calendar-alt-solid.svg'
import AddValue from './AddValue'

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
            <span className="home-page-content-celendar-header-sidenav-month" >JUNE</span>
          </div>
          <Calendar />
          <div className="home-page-content-out-of-date">
            <h3>SẢN PHẨM SẮP HẾT HẠN</h3>
            <ul>
              <li>Bàn ghế tròn - 14/07/2020</li>
              <li>Bàn ghế tròn - 14/07/2020</li>
              <li>Bàn ghế tròn - 14/07/2020</li>
              <li>Bàn ghế tròn - 14/07/2020</li>
            </ul>
          </div>
          <div className="home-page-content-contructor">
            <h3>CẤU TRÚC PHÒNG CỦA TÔI</h3>
            <div className="home-page-content-contructor-img">
            </div>
            <div>
              <i></i>
              <button className="addvalue">THÊM MỚI ĐỒ VẬT</button>
            </div>
            <div className="home-page-content-contructor-bottom">
              <p>Một sản phẩm của New Product Team</p>
            </div>
          </div>
        </div>
      </div>
      <AddValue/>

    </div>

  );
}

export default Home
