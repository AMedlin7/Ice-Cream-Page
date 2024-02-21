import React from 'react';


function About() {
return(
    <div style={{padding:"10%", background:"pink"}} class="container-fluid">
     <div class="row">
      <div style={{ textAlign:"center",color:"green",fontFamily:"cursive"}}class="col-sm-6"> 
       <h1>About Us</h1>
        <p>
        With roots tracing back to the late 1990s, we're proud of our part in the history of Arlington, Tx. 
        Discover the story of Better Ice Cream journey today!The origins of ice cream, sorbet and other chilled dairy treats are difficult to pin down—but span back to antiquity. According to popular legend, ice cream was invented by the ancient Chinese, brought to Italy by Marco Polo, to France by Catherine de Medici, and thence to America by Thomas Jefferson.
        </p>
        </div>
    
     <div class="col-sm-6"> 
     <div class="row">
        <div class="col-sm-6"> 
     <img style={{ width:"200%"}}src="https://media.istockphoto.com/id/1466789877/photo/pistachio-chocolate-strawberry-and-vanilla-ice-cream-in-a-cone.jpg?s=1024x1024&w=is&k=20&c=kfpBKRf52glVkdJqfKh83dgtrr568DKkaWYdx9Aa2yw=" alt='ice cream'/>
     </div>
     </div> 
     </div>
     </div>
     </div>
);

}

export default About;