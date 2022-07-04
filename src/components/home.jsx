import React, { Component, useState } from 'react';
import Yes from './yes';
import No from './no';

class Home extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       name: "React",
    //       showHideDemo1: false,
    //       showHideDemo2: false
    //     };
    //     this.hideComponent = this.hideComponent.bind(this);
    //   }
    
    //   hideComponent(name) {
    //     console.log(name);
    //     switch (name) {
    //       case "showHideDemo1":
    //         this.setState({ showHideDemo1: !this.state.showHideDemo1 });
    //         break;
    //       case "showHideDemo2":
    //         this.setState({ showHideDemo2: !this.state.showHideDemo2 });
    //         break;
    //       default:
    //         return null;
    //     }
    //   }
    
    //   render() {
    //     const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    //     return (
    //       <div>
    //         {showHideDemo1 && <Yes />}
    //         <hr />
    //         {showHideDemo2 && <No />}
    //         <hr />
           
    //         <div>
    //           <button onClick={() => this.hideComponent("showHideDemo1")}>
    //             Click to hide Demo1 component
    //           </button>
    //           <button onClick={() => this.hideComponent("showHideDemo2")}>
    //             Click to hide Demo2 component
    //           </button>
              
    //         </div>
    //       </div>
    //     );
    //   }
    
    constructor(props) {
        super(props);
        this.state = {
          condition: false,
          shouldShowButton: true 
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(condition) {
      this.setState( {condition} )
    }
    
    render() {
        const { condition } = this.state;
        return (
            <div>
                <button onClick={() => this.handleClick(true)}>Condition1</button>
                <button onClick={() => this.handleClick(false)}>Condition2</button>
                {condition === true ? <Yes /> : <No />}
            </div>
        )
     }

    // constructor(props) {
    //     super(props);
    
    //     this.handleClick = this.handleClick.bind(this);
    //   }
    
    //   handleClick(){
    //    return  (<div className="App">
    //    <header className="App-header">
       
    //    <h3>Are you sureee?</h3>
    //    </header>
    //    </div>);
    //   }
    
    //   render(){
    //     return(
    //        <div>
    //           <button onClick={this.handleClick}>Click Here</button>
    //         </div>
    //       )
    //   }

    

    // render() { 
    //     return this.handleSubmit();
        // (
        // <div>
        // <h2>
        //   Hey there, Ms.Likla Sinha!
        // </h2>
        // <h3>Would you like to go on a date with me?</h3>
        // <span><button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}}className='btn btn-primary btn-lg m-3'>&nbsp;&nbsp; Yes</button>
        // <button style={{fontWeight:'bold',paddingRight:50,paddingLeft:40}} className='btn btn-secondary btn-lg'>&nbsp;&nbsp; No &nbsp;&nbsp;</button></span>
        // </div>
        // ):
        // (
        // <h2>Pls enter passcode :)</h2>
        // )
       
    // }
}
 
export default Home;