
// Navbar.js


import React, { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./watches.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch ,faUser} from '@fortawesome/free-solid-svg-icons';


import Login from './login';
import { FaUser } from 'react-icons/fa';
import { mycontext } from './context';


function Watches() {
  const [menu,setmenu]= useState("shop");
  const{wDatas}=useContext(mycontext)
  console.log(wDatas,"watches");
 const nav=useNavigate()
  function buynow() {
    nav("/buynow")

    
  }
  

  
  return (
    <header>    
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        <FontAwesomeIcon icon={faUser} className="login-icon"/>
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
          <li className='nav-item' onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/brands'>brands</Link>{menu==="brands"?<hr/>:<></>}</li>
         

         
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
          <button onClick={buynow}><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <FontAwesomeIcon icon={faHeart} className="like-icon"  />
        </div>
      </div>
    </nav>
    <div className='main'>
      
    <img data-image="black" src="https://dev1-cdn.helioswatchstore.com/wysiwyg/1920_x_500_2024_Trends__What_s_New_and_Exciting_in_SEVENFRIDAY_Watches.png"  height={280} width={1532} />
    {wDatas.map((main) => (

<div className="card">
  
  <img src={main.Image} height={160} width={180}  className="ko"/>
  <h1>{main.Name}</h1>
  <h3>{main.price}</h3>
  <h3>{main.color}</h3>
 <button className="mh"> <FontAwesomeIcon icon={faShoppingCart} className="cart" /></button>
 <button onClick={buynow} className="buy">buynow</button>
 <button className="jh"><FontAwesomeIcon icon={faHeart} className="cart"/></button>

  

  
<div>
  </div>
  </div>

  ))}
      <div className='footer'>
        <h1>ff</h1>

      </div>
    </div>
    
     </header>
  );
}

export default Watches;
