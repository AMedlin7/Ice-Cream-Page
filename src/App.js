import React from 'react';
import Home from './Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './About';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Outlet } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Products from './Products';
import ProductList from './ProductList';
import EditedForm from './EditedForm';
import ProductForm from './ProductForm';
import Sorting from './Sorting';


function App() {
  return (
    <div>
     
    <BrowserRouter>
    
    
      <Navbar style={{fontFamily:"cursive"}} bg="dark" variant="dark" >
        <Container >
         <Nav className="me-auto">
         <Nav style={{color:"greenyellow", fontFamily:"	Brush Script MT", paddingRight:"20px"}} 
          className="navbar-logo" href="#">Better Ice Cream</Nav>
         
        
             <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
           <NavLink to="/products" className="nav-link">Menu</NavLink>
          </Nav>
         </Container>
       </Navbar>
             <Stack gap={3} className="col-md-10 mx-auto">
              <Outlet />
            </Stack>
          
       
       
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="product/edit/:id" element={<EditedForm/>}/>
            <Route path="products/add" element={<ProductForm/>}/>
            <Route path="products/sort" element={<Sorting/>}/>
        </Routes> 
    </BrowserRouter>
    <footer style={{ backgroundColor:"pink",fontFamily:"Papyrus", textAlign:"right",padding:"20px"}}>
      <h6 >Better Ice Cream </h6> 
      <h6>Designer: Alyse Medlin </h6>
       </footer>
   </div>
  )
  
}

export default App;
