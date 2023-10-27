import React from "react";
import logo1 from '../image/Icon.png';
import logo2 from '../image/linkedin.png';

function NewSection(){
    const click =()=>{
        window.location.href="https://www.instagram.com/";
      }
return (
<newsection className='new'>
        <nav className='navbar'>
          <button className='but1' onClick={click}><img src={logo1} className='im1'/>Email</button>
          <button className='but2'><img src={logo2} className='im2'/>Linkedin</button>
        </nav>
        
        <h3>About</h3>
        <p>Steve waugh is Australia's famous batsman who was a fantastic captain.An explosive
          right hand batsman who was a right arm off spin bowler as well</p>
          
        <h3>Stats</h3>
        <ul>
          <li>Matches:457</li>
        <li>Batting average :48.67</li>
        </ul>
       
        </newsection>
)
}
export default NewSection;