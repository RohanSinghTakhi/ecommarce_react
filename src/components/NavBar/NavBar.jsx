import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

function NavBar() {
  return (
    <>
    <div className="box1 bg-black h-12 text-center text-white p-2 ">
    Summer Sale For All Swim Suits And Free  Express Delivery - OFF 50%! 
    <span style={{fontWeight:"bold ",fontSize:"20px" ,marginLeft:"3px"}}>     ShopNow</span>
    </div>

    <nav className="box1 h-20 flex justify-evenly border  " style={{border :"px solid #828282;" ,alignItems:"center"}} >
      <div className="logo" style={{fontWeight:"bolder", fontSize:"30px" }}>
      Exclusive
      </div>

      <div className="links ">
          <ul className='flex justify-between align-middle w-96 ' style={{fontWeight:"bolder",fontSize:"20px"}}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Sign Up</li>
          </ul>
      </div>

      <div>
      <SearchBar/>
      </div>
    </nav>
    </>
  )
}

export default NavBar