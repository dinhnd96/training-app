import './Home.css';

import logo from '../assets/logo.svg'
import menubar from '../assets/bars-solid.svg'
import home from '../assets/home-solid.svg'
import celendar from '../assets/calendar-alt-solid.svg'

function Home() {
  return (
    <div class="sidenav">
      <a href="#"><img src={menubar}></img></a>
      <a href="#"><img src={logo}></img></a>
      <a href="#"><img src={home}></img></a>
      <a href="#"><img src={celendar}></img></a>
    </div>
  );
}

export default Home
