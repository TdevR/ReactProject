import React from "react";
import bottom1 from '../image/Facebook Icon.png';
import bottom2 from '../image/Instagram Icon.png';
function Footer(){
    return(<footer className='bottom'>
    <img src={bottom1} alt='fb' className='fb'/>
    <img src={bottom2} alt='insta' className='in'/>
  </footer>)
}
export default Footer;