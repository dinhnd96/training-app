import './Home.css';
import menubar from '../assets/bars-solid.svg'
import home from '../assets/home-solid.svg'
import celendar from '../assets/calendar-alt-solid.svg'
import cogs from '../assets/cogs-solid.svg'

function Home() {
  return (
    <div class="sidenav">
      <a className="sidenav-icon" href="#"><img src={menubar}></img></a>
      <a className="sidenav-icon" href="#"><img src={cogs}></img></a>
      <a className="sidenav-icon" href="#"><img src={home}></img></a>
      <a className="sidenav-icon" href="#"><img src={celendar}></img></a>
    </div>

  );
}

export default Home
