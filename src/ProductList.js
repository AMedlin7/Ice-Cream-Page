import React,{ useContext, useState, useEffect } from 'react'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import { Card, CardGroup } from 'react-bootstrap'
import { useParams, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button'



function ProductList(props){
  let params = useParams();
  let navigate = useNavigate();

  let { getProduct,   deleteProduct } = useContext(ProductContext);
  let [product, setProducts] = useState([]);
   let [ error, setError ] = useState();

     useEffect(() => {
      setError(null);
       async function fetchData() {
        try {
          const product = await getProduct(params.productId);
          setProducts(product);
        } catch (error) {
          setError("Error fetching product data");
        }
      }
      fetchData();
    }, [params.productId, getProduct]);

 function handleDeleteProduct(id) {
    deleteProduct(id);
    navigate('/products');
   }
  

  function productList(products) { 

   if(products === null)return 
    return products?.map((product) => 
    <Card key={product.id} 
      className="container"
      style={{width:"400px", background:"pink", color:"green", 
       border:"green solid 1px", textAlign:"center"}} >
     <Card.Body >
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Title>{product.name}</Card.Title>
      <Card.Subtitle className="mb-2 text">${product.price}</Card.Subtitle>
      <Link className='btn btn-info m-2' to={`/products/${product.id}`}>View</Link>
      <Link className='btn btn-primary m-2' to={`/product/edit/${product.id}`}>Edit</Link> 

     <Button variant="danger"onClick={handleDeleteProduct.bind(this, product.id)} >Delete</Button>  
     </Card.Body>
    </Card>


    )}

 return(
 
    <div style={{background:"pink", fontFamily:"cursive"}}>
    <h1 style={{background:"pink",fontSize:"70px", color:"green", 
      textAlign:"center", paddingTop:"20px", fontFamily:"cursive"}}>Pick Your Flavor</h1>
   <Link className='btn btn-primary m-2' to="/products/add" >Create</Link> 
   <Link className='btn btn-primary m-2' to="/products/sort">Sort</Link>
   <Stack direction="horizontal" gap={3}>
   <CardGroup style={{background:"pink", color:"greenyellow", 
      fontFamily:"cursive"}}className="align-self-start w-100">
    <ProductContext.Consumer>
      {({products}) => (
        productList(products)
      )}
    </ProductContext.Consumer>
    </CardGroup>
    <Outlet/>
    </Stack>
    </div>
     )    
      }   
export default ProductList