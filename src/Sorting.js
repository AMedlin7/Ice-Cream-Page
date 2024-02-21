import React, { useState, useEffect } from 'react';

const Sorting = () => {
  const [products, setProducts] = useState([]);
const [sortOrder, setSortOrder] = useState('');
useEffect(() => {
  fetch(`http://localhost:3005/products`) 
    .then((response) => response.json())
    .then((data) => setProducts(data));
}, []);
  const handleSort = () => {
  const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  setSortOrder(newSortOrder);

  const sortedProducts = products.slice().sort((a, b) => {
    if (newSortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  setProducts(sortedProducts);
};

return(
  <div  style={{backgroundColor:"pink", width:"1400px",listStyleType: "none" , height:"3500px",textAlign:"left", padding:"50px"}}>
    <button  className='btn btn-primary' onClick={handleSort}>Sort by price {sortOrder === 'asc' ? '▲' : '▼'}</button> 
       <ul className='sort' style={{textAlign:"center"}}>
        {products.map(product => (
          <ol key={product.id}>
          <img variant="top" style={{width:"100px"}}src={product.imageUrl} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.ingredients}</p>

          </ol>
        ))}
      </ul>
        </div> 
)
        }
        export default Sorting