import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import cart from "../../assets/navbar_cart.png";
import userImg from "../../assets/user.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

function NavBar() {
  const location = useLocation();
  const user = useSelector(state => state.user.users[1]);
  // Access the user state

  return (
    <>
      <div className="box1 bg-black h-12 text-center text-white p-2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <span className="font-bold text-xl ml-3">ShopNow</span>
      </div>

      <nav className="box1 h-20 flex justify-evenly border border-gray-400 items-center">
        <div className="logo font-bold text-3xl">
          Exclusive
        </div>

        <div className="links">
          <ul className='flex justify-between items-center w-96 font-bold text-xl'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/SignUp'>Sign Up</Link></li>
          </ul>
        </div>

        <div className='flex'>
          <SearchBar />
          {location.pathname !== "/SignUp" && (
            <>
              <Link to='/Cart'>
                <img width="35px" height="25px" className='ml-4 mr-5' src={cart} alt="Cart" />
              </Link> 
              <div className="dropdown">
                <img
                  width="35px"
                  height="25px"
                  src={userImg}
                  alt="User"
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: 'pointer' }} // Make sure the cursor indicates it's clickable
                />
                <ul className="dropdown-menu absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10" aria-labelledby="dropdownMenuButton">
                  {Object.keys(user).length === 0 ? (
                    <li><a className="dropdown-item" href="/SignUp">Signup</a></li>
                  ) : (
                    <>
                      <li><a className="dropdown-item" href="#">{user.name}</a></li>
                      <li><a className="dropdown-item" href="#">{user.email}</a></li>
                    </>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
