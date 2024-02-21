import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext';

function EditedForm(){
 let params = useParams()
 let [product, setProducts ] = useState({
   id:params.id, 
   name: "",
   description: "",
   price: "",
   imageUrl:"",
   ingredients:""
  
 })

 let { getProduct, updateProduct } = useContext(ProductContext)
 let navigate = useNavigate()
let { id, name, description, price, imageUrl, ingredients } = product

 useEffect(() => {
   if (id === undefined) return
   async function fetch() {
     await getProduct(params.id)
       .then((product) => setProducts(product))
   }
   fetch()
 }, [params.id, getProduct])

 function handleChange(event) {
   setProducts((preValue) => {
     return { ...preValue, [event.target.name]: event.target.value }})
 }
 function update() {
    if (id === params.id ) {
    return updateProduct(product)
   }
   }
   
 function handleSubmit(event) {
   event.preventDefault()
   update().then((product) =>
     navigate(`/products/${product.id}`)
   )
 }

 return (
   <Form style={{fontFamily:"cursive",background:"pink", padding:"10px", 
     color:"green"}} className="container-fluid" onSubmit={handleSubmit}>
     
     <Form.Group className="mb-3">
       <Form.Label> Name</Form.Label>
       <Form.Control type="text" name="name" value={name} onChange={handleChange} />
     </Form.Group>
     <Form.Group className="mb-3" >
       <Form.Label>Description</Form.Label>
       <Form.Control type="text" name="description" value={description} onChange={handleChange} />
     </Form.Group>
     <Form.Group className="mb-3" >
       <Form.Label>Price</Form.Label>
       <Form.Control type="text" name="price" value={price} onChange={handleChange} />
     </Form.Group>
     <Form.Group className="mb-3" >
       <Form.Label>ImageUrl</Form.Label>
       <Form.Control type="text" name="imageUrl" value={imageUrl} onChange={handleChange} />
     </Form.Group>
     <Form.Group className="mb-3" >
       <Form.Label>Ingredients</Form.Label>
       <Form.Control type="text" name="ingredients" value={ingredients} onChange={handleChange} />
     </Form.Group>
     <Button type="submit">Save</Button>

   </Form>
 )
 }

export default EditedForm