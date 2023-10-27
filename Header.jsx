import React from "react";
import NewSection from './NewSection';
import pic from '../image/img.jpg';
function Header(){
    return(<header className='head'>
    <img src={pic} alt='steve vaugh' className='steve'/>
    <h2 className='c2'>Steve Waugh</h2>
    <h4 className='c3'>Right Hand Batsman</h4>
    <h5 className='c4'><a href ="https://stevewaugh.com.au" className='b'>steve waugh's website</a></h5>
    <NewSection/>
  </header>)
}
export default Header;