import React from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>

      <div className="container">
        <div className="body">
          <h2>Increment/Decrement counter</h2>
          <h4>using React and Redux</h4>
          <button onClick={() => dispatch(decNumber(5))} className="quantity_minus" title="decrement"> - </button>
          <input type="text" value={myState} />
          <button onClick={() => dispatch(incNumber(5))} className="quantity_plus" title="increment"> + </button>
        </div>
      </div>
    </>
  )
}
export default App;
