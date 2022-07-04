import React, { Component, useState } from 'react';
import Home from './home';
import { useNavigate  } from "react-router-dom";
import ImageYes from '../imageYes.jpg';

function Yes(){
        let navigate=useNavigate();
    return (<div>
            <div className="App">
            <header className="App-header">
            <h2>
       Hayyy *I cri*
      </h2>
      <img src={ImageYes} />
      
      
      <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40,float:'right'}} 
            className='btn btn-primary btn-lg m-3' onClick={()=>{navigate("/Options")}}>&nbsp;&nbsp; Next &nbsp;&nbsp;</button>
    </header>
    </div>
      </div>);
    }

 
export default Yes;