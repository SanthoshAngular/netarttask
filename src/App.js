import './App.css';
import logo from './logo.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import 'boxicons/css/boxicons.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} id='logo' alt='Company Logo'></img>
      </div>

      <div className='flex-container'>
        <div className='div1'>
          <img src={img1} id='img1Left' alt='Image 1'></img>
        </div>
        <div className='div2'>
          <p id='para1'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>

          <ul>
            <li><p id='para2'> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p></li>
            <li><p id='para2'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p></li>
          </ul>

          <img src={img2} id='img2Right' alt='Image 2'></img>

          <p>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>

      <div className='bottom1'>
        <p id='para3'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <img src={img3} id='img3Bottom' alt='Image 3'></img>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
      <div className='border'></div>
      <div className='bottom2'>
        <p id='para4'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <div className="content">
          <span className="border-right">CHEMICALS & PROCESS</span>
          <span className="border-right"> POWER</span>
          <span className="border-right">WATER & WASTE WATER </span>
          <span className="border-right">OILS & GAS</span>
          <span className="border-right"> PHARMA</span>
          <span className="border-right">SUGARS & DISTILLERIES</span>
          <span className="border-right">PAPER & PULP</span>
          <span className="border-right">MARINE & DEFENCE</span>
          <span className="border-right"> METAL & MINING</span>
          <span className="border-right">FOOD & BEVERAGE</span>
          <span className="border-right">PETROCHEMICAL & REFINERIES</span>
          <span className="border-right">SOLAR</span>
          <span className="border-right">BUILDING</span>
          <span className="border-right">HVAC</span>
          <span className="border-right">FIRE FIGHTING</span>
          <span className="border-right">AGRICULTURE & RESIDENTIAL</span>
        </div>
      </div>

      <div className='footer'>
        <div className='icons'>
          <div><i className='bx bxs-phone'></i><span id='tollfree'>Toll free <b>1800 200 1234</b></span></div>
          <div><i className='bx bxl-facebook'></i><a href='https://www.facebook.com/cripumps' target='_blank' rel='noopener noreferrer'>www.facebook.com/cripumps</a></div>
          <div><FontAwesomeIcon icon={faGlobe} id='globe'/><a href='https://www.crigroups.com/' target='_blank' rel='noopener noreferrer'>www.crigroups.com</a></div>
        </div>
      </div>
    </div>

  );
}

export default App;
