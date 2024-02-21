import { useParams} from "react-router-dom";
import React,{ useContext, useEffect, useState} from 'react';
import { Card } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'
import { ProductContext } from "./ProductContext";


function Products(props) {
  
 let params = useParams();

 let { getProduct } = useContext(ProductContext)
 let [product, setProducts] = useState([]);
 let [error, setError] = useState()

 useEffect(() => {
  setError(null);
  async function fetch() {
    await getProduct(params.id).then((product) => setProducts(product)).catch((message) => setError(message))
  }
  fetch()
 }, [params.id, getProduct])

 function errorMessage() {
  return (
    <Alert variant="danger">
      There was an error attempting to load this contact: {error}
    </Alert>
  )
 }

  function productCard(){

    
   return(
    <Card className="card" style={{textAlign:"center", fontFamily:"cursive", color:"green", 
      textAlign:"center",backgroundColor:"pink"}}>
     <Card.Body key={product.id}  style={{width:"300px"}}>
         <Card.Img variant="top" src={product.imageUrl} />
          <Card.Title>{product.name} </Card.Title>
          <Card.Subtitle className="mb-2 text">{product.description}</Card.Subtitle>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.ingredients}</Card.Text>
      </Card.Body> 
     </Card>
   )
 }

 

 if (product === undefined) return
 return product.id !== parseInt(params.productsId) ? productCard()
 : null}


    

 export default Products
