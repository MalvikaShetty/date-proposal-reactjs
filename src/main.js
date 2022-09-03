import React, { Component, useState } from 'react';
import { useNavigate  } from "react-router-dom";
import Welcome from './welcome.jpg';

function Ex() {
    let navigate=useNavigate();
    const [password,setPassword] = useState();

    if (password == '12345' ) {
        return(
         
         <div className="App">
         <header className="App-header">
         <h2>
           Hey there, Ms Jane Doe!
         </h2>
         <h3>Would you like to go on a date with me?🙈👉👈 </h3>
         <span><button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
               className='btn btn-primary btn-lg m-3' onClick={()=>{navigate("/yes")}} >&nbsp;&nbsp; Yes &nbsp;&nbsp;</button>
         <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} 
                className='btn btn-secondary btn-lg' onClick={()=>{navigate("/no")}}>&nbsp;&nbsp; No &nbsp;&nbsp;</button></span>
         </header>
         </div>
        ) 
     } 
     else {
         return(
             <div className="container">
   
             <div className="col-md-6 mx-auto">
                <div className='form-group'>
                    <h3 className='text-center my-5'>Enter Passcode</h3>
                    <input type="text" className='form-control' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                </div>
                <br></br>
                <img className='image-center' src={Welcome} />
             </div>
            </div>
         )
       
     }
}

export default Ex;