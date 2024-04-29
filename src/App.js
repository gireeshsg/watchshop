import Register from './components/register';
import Login from './components/login';


import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { mycontext } from './components/context';
import { useState } from 'react';
// import FigureCaption from 'react-bootstrap/esm/FigureCaption';



// import Main1 from './components/footer/header/de';
// import footer from './components/footer/footer';
// import Footer from './components/footer/footer';

// import Navbar from './components/navbar/navbar';
// import UncontrolledExample from './otherpage';
// import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in a src/App.scss 

/* The following line can be included in a src/App.scss */

import Navbarr from './components/navv';
import Navbarf from './components/navg';
import Watches from './components/wathes';
import Men from './components/men';
import Women from './components/women';
import { productDatas } from './components/data';
import Offers from './components/offers';
import Bestseller from './components/bestseller';
import Brands from './components/brands';
import Like from './components/likepage';
import Buynow from './components/buynow';
import { productDatass } from './components/datawomen';
import { Watchdata } from './components/main';

//  import ProductDetail from './components/product'
// import ProductList from './components/prop';

// import ProductList from './components/prodectcard';



/* The following block can be included in a custom.scss */


/* import bootstrap to set changes *//* The following line can be included in a src/App.scss */








function App() {
  const [user, setUser] = useState([])
  const [pData] = useState(productDatas)
  const [pDatas] = useState(productDatass)
  const [wDatas] = useState(Watchdata)
  const [likeProduct, setLikedproduct] = useState([])

  const values = { user, setUser, pData, pDatas, wDatas, likeProduct, setLikedproduct}

  // const product = {
  //   name: 'Product Name',
  //   image: 'product-image.jpg',
  //   description: 'Product Description',

  // const values={user,setUser,product }


  return (
    <div className="App">



      <BrowserRouter>
        <mycontext.Provider value={values}>
       
       <Routes>
  <Route path='/' element={<Register />} />

            {/* <Route path='login1'element={<Login/>}/>  */}
            {/* <Route path='MB'element={<Main/>}/>    */}
            <Route path='login1' element={<Login />} />
            {/* <Route path='LL'element={<JustifiedExample/>}/> */}
            {/* <Route path='mm'element={<Main2/>}/>   */}
            {/* <Route path='M'element={<Main/>}/> */}
            {/* <Route path='mm'element={<FillExample/>}/> 
  <Route path=''element={<JustifiedExample/>}/>   
  <Route path='mm'element={<FillExample/>}/>  */}

            <Route path='zz' element={<Navbarr />} />
            <Route path='nav' element={<Navbarf />} />
            {/* <Route path='pro/:id' element={<ProductDetail/>}/>  
      <Route path='pr' element={<ProductList/>}/>    */}
            <Route path='shop' element={<Watches />} />

            <Route path='women' element={<Women />} />
            <Route path='men' element={<Men />} />
            <Route path='offers' element={<Offers />} />
            <Route path='bestseller' element={<Bestseller />} />
            <Route path='brands' element={<Brands />} />
            <Route path='buynow' element={<Buynow />} />
            <Route path='like' element={<Like />} />







          </Routes>
        </mycontext.Provider>

      </BrowserRouter>
    </div>
  );
};



export default App;
