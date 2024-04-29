// ProductDetail.js
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const products = [
//   { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1' },
//   { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2' },
//   { id: 3, name: 'Product 3', price: 30, description: 'Description of Product 3' }
// ];

// function ProductDetail() {
//   const { id } = useParams();
//   const product = products.find(product => product.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>Price: ${product.price}</p>
//       <p>{product.description}</p>
//     </div>
//   );
// }

// export default ProductDetail;
