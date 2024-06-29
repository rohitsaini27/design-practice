import React from 'react';
import homeIcon from '../assets/icons/Home_Icon.png'
import doreading from '../assets/icons/Do_reading.png'
import frame from "../assets/icons/Frame.png"
import range from "../assets/icons/Date_range_fill.png"
import profile from "../assets/icons/Profile.png"

const Navbar = () => {
  return (
   <>
    <nav className="navbar">
      <ul className="nav-links">
        <li>
            <img src={homeIcon} alt='home'/>
        </li>
        <li>
            <img src={doreading} alt='home'/>
        </li>
        <li>
            <div className='nav-links-center'>
                <img src={frame} alt='home'/>
            </div>
        </li>
        <li>
            <img src={range} alt='home'/>
        </li>
        <li>
            <img src={profile} alt='home'/>
        </li>
      </ul>
    </nav>
   </>
  );
};

export default Navbar;
