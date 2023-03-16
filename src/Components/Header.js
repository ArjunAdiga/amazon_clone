import React from 'react'
import logo from '../assets/logo.png'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
   const [{basket,user}]=useStateValue();
   const login = () => {
      if(user) {
         auth.signOut();
      }
   }

  return (
    <nav className='header'>
        {/* for logo */}
        <Link to='/login'>
          <img className='header__logo' 
            src={logo} alt='logo'/>
        </Link>
        {/* below for search */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
        </div>
        {/* 4 links sign in etc etc*/}
        <div className="header__nav">
            {/* 1st link */}
            <Link to={!user && "/login"} className='header__link'>
               <div onClick={login} className="header__option">
                  <span className='header__optionLineOne'>hello {user && user?.email}</span>
                  <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
               </div>
            </Link>

            {/* 2st link */}
            <Link to="/" className='header__link'>
               <div className="header__option">
                  <span className='header__optionLineOne'>Returns </span>
                  <span className='header__optionLineTwo'>& Orders</span>
               </div>
            </Link>

            {/* 3st link */}
            <Link to="/" className='header__link'>
               <div className="header__option">
                  <span className='header__optionLineOne'>Your </span>
                  <span className='header__optionLineTwo'>Prime</span>
               </div>
            </Link>

            {/* 4st link */}
            <Link to="/checkout" className='header__link'>
               <div className="header__optionBasket">
                 <ShoppingBasketIcon/>
                 <span className='header__optionLineTwo header__basketCount' >{basket?.length}</span>
               </div>

            </Link>
            
        </div>
          
        
        
    </nav>
  )
}

export default Header