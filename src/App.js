import React, {useState, useEffect} from 'react';
import Counter from './Counter';
import BasicCard from './Cards';

function App (props) {
  const [initialVal, setInitialVal] = useState(10);
  const [counter, setCounter] = useState(true);

  useEffect(()=>{
    // console.log('Execute in Mounting phase');
  }, []);

  useEffect(() => {
    // console.log('Execute in updating phase of initialVal and mounting phase')
  }, [initialVal])

  const handleIncrement = () => {
    setInitialVal(initialVal + 1);
  }

  const handleDecrement = () => {
    setInitialVal(initialVal -1)
  }

  const toggleComponent = (childRender) => {
    setCounter(childRender);
  }
  
  return (
    <div className={{padding: '40px'}}>
      <h3> This is {props.componentName} </h3>
      Initial Value : {initialVal} <br/> <br/>

      <button onClick={handleIncrement}> Increment </button> &nbsp; &nbsp;

      <button onClick= {() => handleDecrement()} > Decrement </button> &nbsp; &nbsp;

      <button onClick={() => setInitialVal(5)}> Reset </button> &nbsp; &nbsp; <br/> <br/>

      {/* <button onClick={() => setCounter(!counter)}>Mount / Unmount Component</button> <br/> <br/> */}
      
      <BasicCard subheading="Counter Application" heading="Functional Component" 
      description="This componnent is having Ccounter Application as well as Button to toggle class component" 
      functionalities="Increment | Decrement | Reset | Mount/Unmount Component" 
      buttonName="Toggle" textColour="green" 
      toggleComponentFromParent = {(childRenders) => toggleComponent(childRenders)}/> 

      {/* Conditional Rendering */}
      {counter ? <Counter componentName="Class Component" /> : <></>}
      
    </div>
  )
}

export default App;