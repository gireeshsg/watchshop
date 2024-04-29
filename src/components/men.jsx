// Tab1.js
import "./men.css"
import React, { useContext, useState } from 'react';
// import Image from 'react-bootstrap/Image';

import { Link, useNavigate } from 'react-router-dom';
import './Navbari.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';



import Login from './login';
import { FaRedo, FaUser } from 'react-icons/fa';
import { mycontext } from "./context";
import Watches from "./wathes";


const Men = () => {
  const nav = useNavigate()
  const [menu, setmenu] = useState("shop");

  const { pData } = useContext(mycontext)
  const { likeProduct, setLikedproduct} = useContext(mycontext)
  const[searcInput,setsearchInput] =useState('')
  const[filterdwatch,setfilterdwatch] =useState('')
  const [color,setColor]=useState("")
  console.log("pDatasearch",pData)
  const handlesearch = (e) => {
    const query= e.target.value;
    setsearchInput(query)
    const filtered = pData.filter((Watches) => {
      const {Name,color,} =Watches
      return(
        Name.toLowerCase().includes(query.toLowerCase()) ||
        color.toLowerCase().includes(query.toLowerCase()) 
      )

    })
    setfilterdwatch(filtered)
    console.log("fil",filtered);
  }
    
    
  
  
  


  console.log(pData, "watch");
  console.log("like btn", likeProduct,);

  function handl() {

    nav("/login1")

  }
  function click() {
    nav("/buynow")

  }
  function Likebtn(product) {
    if(likeProduct.includes(product)){
      setLikedproduct(likeProduct.filter(item=>item!==product))
    }
    else{

      setLikedproduct([...likeProduct,product])
    }

  }
  
  const Likebtnn = (product) => {
    if (likeProduct.includes(product)) {
      setLikedproduct(likeProduct.filter(item => item !== product));
      setColor(""); // Reset color when unliking
    } else {
      setLikedproduct([...likeProduct, product]);
      setColor("red"); // Change color when liking
    }
  };








  return (
    
    
    <header>
     <div className="du">
      <marquee behavior="side" direction="right">welcome to my watch world free shipping on all orders </marquee>

     </div>
      

      <nav className="navbar">
        <div className="header1">



        </div>
        <div className="navbar-container">
          <div className="logo">
          
            {/* <FontAwesomeIcon icon={faUser} className="login-icon" /> */}
            <a href="#"></a>
          </div>
          <ul className="nav-menu">
          
            <li className='nav-item' onClick={() => { setmenu("shop") }}><Link  style={{ textDecoration: 'none' }} to='/shop'>watchess</Link>{menu === "shop" ? <hr /> : <></>}</li>
            <li className='nav-item' onClick={() => { setmenu("men") }}><Link style={{ textDecoration: 'none' }} to='/men'>men</Link>{menu === "men" ? <hr /> : <></>}</li>
            <li className='nav-item' onClick={() => { setmenu("women") }}><Link style={{ textDecoration: 'none' }} to='/women'>women</Link>{menu === "women" ? <hr /> : <></>}</li>
            <li className='nav-item' onClick={() => { setmenu("offers") }}><Link style={{ textDecoration: 'none' }} to='/offers'>unisex</Link>{menu === "offers" ? <hr /> : <></>}</li>
            <li className='nav-item' onClick={() => { setmenu("bestseller") }}><Link style={{ textDecoration: 'none' }} to='/bestseller'>Bestseller</Link>{menu === "bestseller" ? <hr /> : <></>}</li>
            <li className='nav-item' onClick={() => { setmenu("brands") }}><Link  style={{ textDecoration: 'none' }} to='/brands'>brands</Link>{menu === "brands" ? <hr /> : <></>}</li>
          
      <div></div>
          </ul>
          <div className="nav-search">
            <input type="text" placeholder="Search..." value={searcInput}  onChange={handlesearch}/>
            <button><FontAwesomeIcon icon={faSearch}  onClick={handlesearch}/></button>
          </div>
          <div className="nav-icons">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            <FontAwesomeIcon icon={faHeart} className="like-icon" />
            <FontAwesomeIcon icon={faUser} onClick={handl} className="login-icon" />
          </div>
        </div>
      </nav>




      <div className='main'>
      

        

        
        <img data-image="black" src="https://www.sonatawatches.in/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw49f49326/images/Category%20Banners/plp-shopfor-men-desktop.jpg" height={250} width={1532} />
        <div className="gh">
        {/* <h1><input type="option" /></h1> */}


    <div className="gh" >
      
   <h5 className="tt"> <label htmlFor="">filter:</label>
    <select name="filter" >
   <option>price low-high</option >
    <option value="">high-low</option>
    </select>
    </h5>
    
   <h5> <label htmlFor="">brand-:</label>
    <select name="filter" >
   <option>casio</option >
    <option value="">fastrack</option>
    <option value="">titan</option>
    <option value="">timex</option>
    <option value="">rolex</option>
    
    </select>
    </h5>
    
   <h5 className="tt"> <label htmlFor="">material:</label>
    <select name="filter" >
   <option>leather</option >
    <option value="">plastic</option>
    </select>
    </h5>
  
    <h5> <label htmlFor="">gender:</label>
   <select name="filter" >
    <option>men</option >
    <option value="">women</option>
    <option value="">unisex</option>

  /</select>
    </h5> 
  

  
    </div>
    <nav>
   
  

    </nav>
    
{/*   
 </div>
  <ul>
    <li>ff</li>
    <li>ff</li>
    <li>ff</li>
    <li>ff</li>
    <li>ff</li>
    <li>ff</li>
    <li>ff</li>
  </ul>
 </div> */} 
      </div>
      {/* <div className="gh" >
  
   <h5> <label htmlFor="">filter:</label>
    <select name="filter" >
   <option>price low-high</option >
    <option value="">high-low</option>
    </select>
    </h5>
    
   <h5> <label htmlFor="">brand:</label>
    <select name="filter" >
   <option>casio</option >
    <option value="">fastrack</option>
    <option value="">titan</option>
    <option value="">timex</option>
    <option value="">rolex</option>
    
    </select>
    </h5>
    
   <h5> <label htmlFor="">material:</label>
    <select name="filter" >
   <option>leather</option >
    <option value="">plastic</option>
    </select>
    </h5>
  
 </div> */}
 
        {pData.map((data) => (
  
          //  likeProductsList = likeProducts.map((product, index) => 
      

          <div className="card" >
          
                {/* <Link to={`/viewproducts/${data.id}`} style={{ textDecoration: 'none' }} > */}
            < img src={data.Image} height={188} width={210} className="ko"/>
            
            <p1>{data.Name}</p1><br />
            <details >
             
            <h6>{data.dis}</h6>
            
         <h5> {data.material} </h5>
          <h4> <h6><del>{data.Rprice}</del></h6>{data.price}</h4>
          <kbd>{data.material}</kbd>
          </details>

          
        
           
        {/* </Link> */}
            
            <button className="mh"> <FontAwesomeIcon icon={faShoppingCart} className="cart"  /></button>
            <button className="buy" onClick={click}>buynow</button>
          
            <button className="jh"  onClick={()  => Likebtn(data)}>
              {
                
              
              }
              <FontAwesomeIcon icon={faHeart} className="cart"   style={{color: color}}    onClick={Likebtnn} />{color}
              </button>

       {/* <h1><input type="option" /></h1> */}
  


            <div>
    </div>
        
        
          </div>

             ))} 


  

  

        <div className='footer'>
          <h1>hh</h1> <h1>gg</h1>

        </div>
      </div>






    </header>







  );
}

export default Men;

