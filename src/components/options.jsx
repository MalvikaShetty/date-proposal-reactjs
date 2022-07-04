
import { useState } from "react";
import { places } from "./places";
import YesLast from './yesLastpage';
import { useNavigate  } from "react-router-dom";


export default function App() {
    let navigate=useNavigate();
  const [checkedState, setCheckedState] = useState(
    new Array(places.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    setCheckedState(!checkedState);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    // setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + places[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className="App1">
      <h4>Select your preferred date place:</h4>
      <ul className="places-list">
        {places.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="places-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                {/* <div className="right-section">{getFormattedPrice(price)}</div> */}
              </div>
            </li>
          );
        })}
        <li>
          <div className="places-list-item">
            {checkedState ? "" : "Bold of you to think we'll be going to any of these :)"}
            {/* <div className="right-section">{getFormattedPrice(total)}</div> */}
            <button style={{fontWeight:'bold',padding:5}} 
               className='btn btn-primary btn-m' onClick={()=>{navigate("/YesLast")}} >&nbsp; Next &nbsp;</button>
          </div>
        </li>
      </ul>
      
    </div>
  );
}
