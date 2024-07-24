import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import cart from "../../assets/navbar_cart.png";
import user from "../../assets/user.png";
import { Link, useLocation } from "react-router-dom";
import { Img } from '@chakra-ui/react';

function NavBar() {
  const location = useLocation();

  return (
    <>
      <div className="box1 bg-black h-12 text-center text-white p-2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <span style={{fontWeight:"bold", fontSize:"20px", marginLeft:"3px"}}>ShopNow</span>
      </div>

      <nav className="box1 h-20 flex justify-evenly border" style={{border: "1px solid #828282", alignItems: "center"}}>
        <div className="logo" style={{fontWeight: "bolder", fontSize: "30px"}}>
          Exclusive
        </div>

        <div className="links">
          <ul className='flex justify-between align-middle w-96' style={{fontWeight: "bolder", fontSize: "20px"}}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
            <li><Link to={'/SignUp'}>Sign Up</Link></li>
          </ul>
        </div>

        <div className='flex '>
          <SearchBar/>
          {location.pathname !== "/SignUp" && <><img width="35px" height="25px" className='ml-4 mr-5'  src={cart} alt="Cart" /> 
          <img width="35px" height="25px" className=' '  src={user} alt="Cart" /> 

</> }
        </div>
      </nav>
    </>
  );
}

export default NavBar;
