import React, {useState} from 'react';
import Counter from './Counter';

function App (props) {
  const [initialVal, setInitialVal] = useState(10);

  const handleIncrement = () => {
    setInitialVal(initialVal + 1);
  }

  const handleDecrement = () => {
    setInitialVal(initialVal -1)
  }
  return (
    <div>
      <h3> This is {props.componentName} </h3>
      Initial Value : {initialVal} <br/> <br/>

      <button onClick={handleIncrement}> Increment </button> &nbsp; &nbsp;

      <button onClick= {() => handleDecrement()} > Decrement </button> &nbsp; &nbsp;

      <button onClick={() => setInitialVal(5)}> Reset </button> &nbsp; &nbsp;

      <Counter componentName="Class Component" />
    </div>
  )
}

export default App;