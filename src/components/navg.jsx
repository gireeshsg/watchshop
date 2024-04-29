import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Navbari.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch ,faUser} from '@fortawesome/free-solid-svg-icons';


import Login from './login';
import { FaUser } from 'react-icons/fa';


function Navbarf() {
  const [menu,setmenu]= useState("shop");
  

  
  return (
    <header>    
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        <FontAwesomeIcon icon={faUser} className="login-icon" />
          <a href="#"></a>
        </div>
        <ul className="nav-menu">
{/*           
          <li className="nav-item">
            <a href="/55">Watches</a>
          </li> */}
          <li className='nav-item' onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop'>watchess</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li className='nav-item' onClick={()=>{setmenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>men</Link>{menu==="men"?<hr/>:<></>}</li>
          <li className='nav-item' onClick={()=>{setmenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>women</Link>{menu==="women"?<hr/>:<></>}</li>
          <li className='nav-item' onClick={()=>{setmenu("offers")}}><Link style={{textDecoration:'none'}} to='/offers'>offers</Link>{menu==="offers"?<hr/>:<></>}</li>
          <li className='nav-item' onClick={()=>{setmenu("bestseller")}}><Link style={{textDecoration:'none'}} to='/bestseller'>Bestseller</Link>{menu==="bestseller"?<hr/>:<></>}</li>
          {/* // <li className="nav-item">

          //   <a href="/66" target="_blank">men</a>      
          // </li>
          // <li className="nav-item">
          //   <a href=""target='_blank'>women</a>
          // </li>
          // <li className="nav-item">
          //   <a href="#contact">offers</a>
          // </li>
          // <li className="nav-item">
          //   <a href="#contact">Bestseller</a>
          // </li> */}
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <FontAwesomeIcon icon={faHeart} className="like-icon"  />
        </div>
      </div>
    </nav>
    <div className='main'>
      <img src="https://www.sonatawatches.in/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw49f49326/images/Category%20Banners/plp-shopfor-men-desktop.jpg" height={250} width={1532} />
      <div className='footer'>
        <h1>ff</h1>

      </div>
    </div>
     </header>
  );
}

export default Navbarf;
