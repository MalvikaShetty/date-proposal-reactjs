import React, { Component, useState } from 'react';
import Home from './home';
import { useNavigate  } from "react-router-dom";
import ImageYesLast from '../imageYesLast.jpg';

class YesLast extends Component {
    // constructor() {
    //     // let navigate=useNavigate();
    //     super();
    //     this.state = {
    //       name: "React11"
    //     };
    // }
    render() { 
        return <div>
            <div className="App">

            <h4>
        Would've added more pages here, but my insecure ass couldn't wait that long :)
      </h4>
      <h2>Can't wait to meet youuu </h2>
      <img src={ImageYesLast} />
      <p>Jk not really</p> 
      <h3>Add whatever you want ;)</h3>
       
       
      </div>
    
      </div>
    }
}
 
export default YesLast;