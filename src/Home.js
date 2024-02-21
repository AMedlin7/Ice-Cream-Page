import React from "react"
import { Card } from "react-bootstrap"






function Home() {
  let product=[]
  return (
  <>
        <div style={{backgroundColor:"pink"}}class="welcome">
        
         <img style={{ height:"200px",width:"100%"}}
        src="https://media.istockphoto.com/id/1470288948/photo/various-of-ice-cream-flavor-ball-blueberry-lime-pistachio-almond-orange-chocolate-and-vanilla.jpg?s=1024x1024&w=is&k=20&c=zLRrCEw6np4mtOm-jeFc9VHQVC970suZ2SPqNN1zo5E=" alt='ice cream'/> 
   
       <h1 style={{textAlign:"center",backgroundColor:"pink",color:"green", fontSize:"60px", fontFamily:"cursive"}}
       >Welcome to Better Ice Cream</h1>
       <br/> 

       <h2 style={{textAlign:"center", backgroundColor:"pink", color:"green", fontSize:"40px",fontFamily:"cursive"}}
       >Featuring:</h2> 
       <br/>
        <div className="container" style={{width:"800px",fontFamily:"cursive", 
        display:"flex"}} > 
        
       <Card key={product.id} style={{background:"pink",color:"green",textAlign:"center", border:"solid green 2px"}} >
        <Card.Body >
        <Card.Img variant="top" src={"https://assets-global.website-files.com/60680e16f45cd34525698cd7/6071d97a6932222ff1dcf289_Strawberry.png"} />
        <Card.Title>Strawberry Ice Cream</Card.Title>
       </Card.Body>
       </Card>
        
       <Card key={product.id} style={{background:"pink",color:"green",textAlign:"center",border:"solid green 2px"}} >
        <Card.Body >
       <Card.Img variant="top" src={"https://assets-global.website-files.com/60680e16f45cd34525698cd7/60737bf83529218cca4d6e21_Cookie%20Dough.png"} />
       <Card.Title> Cookie Dough Ice Cream</Card.Title>
       </Card.Body>
       </Card>
  

       <Card  key={product.id} style={{background:"pink", color:"green",textAlign:"center", border:"solid green 2px"}} >
          <Card.Body >
          <Card.Img variant="top" src={"https://assets-global.website-files.com/60680e16f45cd34525698cd7/6071bcadbfba5c5413386441_Mint%20Chocolate%20Chip.png"} />
         <Card.Title>Mint Chocolate Chip Ice Cream</Card.Title>
         </Card.Body>
       </Card>
       </div>
       </div>
       </>
  )
    }
export default Home;