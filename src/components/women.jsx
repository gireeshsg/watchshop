import "./men.css"
import React, { useContext, useState } from 'react';
// import Image from 'react-bootstrap/Image';

import { Link,useNavigate } from 'react-router-dom';
import './Navbari.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch ,faUser} from '@fortawesome/free-solid-svg-icons';


import Login from './login';
import { FaRedo, FaUser } from 'react-icons/fa';
import { mycontext } from "./context";


function Women() {
  const [menu,setmenu]= useState("shop");
  const {pDatas} =useContext(mycontext)
   console.log(pDatas,"watch");
  const nav=useNavigate()
  function handl() {
    
    nav("/login1")
    
  }
  function buynow() {
    nav("/buynow")
    
  }
 
  

  

  
  return (
    <header>    
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        {/* <FontAwesomeIcon icon={faUser} className="login-icon" /> */}
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
          <li className='nav-item' onClick={()=>{setmenu("brands")}}><Link style={{textDecoration:'none'}} to='/brands'>brands</Link>{menu==="brands"?<hr/>:<></>}</li>
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
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/>
          <FontAwesomeIcon icon={faHeart} className="like-icon"/>
        <FontAwesomeIcon icon={faUser} className="login-icon"/>
        </div>
      </div>
    </nav>
    
      


     <div className='main'> 
         
    <img data-image src="https://www.sonatawatches.in/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dwff9e6528/images/Category%20Banners/plp-shopfor-women-desktop.jpg"height={250} width={1532} />
    
    {/* <Image src="https://images.ethoswatches.com/img/uploads/SmHer
    oBanners/2024/03/ethoswatches_desktop15_03_2024_1752261771.jpg" fluid />;  */} 
    
    {/* <img data-image="black" src="https://www.sonatawatches.in/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw49f49326/images/Category%20Banners/plp-shopfor-men-desktop.jpg"  height={250} width={1532} /> */}
      {pDatas.map((datawomen) =>(

    <div className="card">
      
      < img src={datawomen.Image} height={160} width={180}  className="ko" />
      <h3>{datawomen.name} </h3>
      <h3>{datawomen.price}</h3>
      <h3>{datawomen.color}</h3>
     <button className="mh"> <FontAwesomeIcon icon={faShoppingCart} className="cart" /></button>
     <button onClick={buynow} className="buy">buynow</button>
     <button className="jh">   <FontAwesomeIcon icon={faHeart} className="cart"  /></button>

      

      
<div>
      

</div>

      </div>  
    

     
    ))
  }

      
       
     <div className='footer'>
        <h1>hh</h1> <h1>gg</h1>

      </div>
    </div>
    
     
      

  
    
     </header>
     
  
    
  
     


  );
}

export default Women;

