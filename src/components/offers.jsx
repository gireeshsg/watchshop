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


function Offers() {
  const [menu,setmenu]= useState("shop");
//   const {pData} =useContext(mycontext)
//   console.log(pData,"watch");
  const nav=useNavigate()
  function handl() {
    
    nav("/login1")
    
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
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <FontAwesomeIcon icon={faHeart} className="like-icon"  />
        <button  className="fm"onClick={handl}><FontAwesomeIcon icon={faUser} className="login-icon"  /></button>
        </div>
      </div>
    </nav>
    
      


     <div className='main'> 
     <img src="https://dev1-cdn.helioswatchstore.com/catalog/category/offer_banner_mobile_1.png" height={350} width={1555} />
    
      {/* <Image src="https://images.ethoswatches.com/img/uploads/SmHer
    oBanners/2024/03/ethoswatches_desktop15_03_2024_1752261771.jpg" fluid />;  */} 
{/*     
    <img data-image="black" src="https://www.sonatawatches.in/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw49f49326/images/Category%20Banners/plp-shopfor-men-desktop.jpg"  height={250} width={1532} />
      {pData.map((data) => */}
{/* 
    <div className="card">
      
      < img src={data.Image} height={160} width={180}  className="ko" />
      <h3>{data.Name} </h3>
      <h3>{data.price}</h3>
      <h3>{data.color}</h3>
     <button className=""> <FontAwesomeIcon icon={faShoppingCart} className="cart" /></button>
     <button className=""><Link to="/login1">buynow</Link></button>
     <button className="">   <FontAwesomeIcon icon={faHeart} className="cart"  /></button> */}

      

      
<div>
      

</div>

    {/* </div> */}
    
      

  

      
       
     <div className='footer'>
        <h1>hh</h1> <h1>gg</h1>

      </div>
    </div>
    
     
      

  
    
     </header>
     
  
    
  
     


  );
}

export default Offers;

