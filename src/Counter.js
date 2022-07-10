import React, {Component} from 'react';
import BasicCard from './Cards';

class Counter extends Component {
    constructor(props){
        // console.log('constructor');
        super();
        this.state = {
            initialValue : 5
        }
    }
    componentDidMount(){
        // logic
        // fetch('API URL')
        // data
        // store in state variable
        // populate in HTML 
        // console.log("Mounting Phase of Counter Component");
    }
    componentDidUpdate(){
        // console.log("Updating Phase of Counter Component");
    }
    componentWillUnmount(){
        console.log('Unmounting phase of Countrt Component')
    }
    handleDecrement = () => {
        // console.log('In Decrement Function')
        this.setState({initialValue : --this.state.initialValue})
    }
    handleReset = (resetValue) => {
        // console.log('In Reset Function')
        this.setState({initialValue : resetValue})
    }
    render(){
        // console.log('render');
        const handleIncrement = () => {
            // console.log('In increment Function')
            this.setState({initialValue : ++this.state.initialValue})
        }

        return(
            <div>
                <h3> This is {this.props.componentName} </h3>
                Initial Value : {this.state.initialValue} <br/> <br/>

                <button onClick={handleIncrement}> Increment </button> &nbsp; &nbsp;

                <button onClick={this.handleDecrement}> Decrement </button> &nbsp; &nbsp;

                <button onClick={() => this.handleReset(5)}> Reset </button> &nbsp; &nbsp; <br/> <br/>
                <BasicCard subheading="Counter Application" heading="Class Component" 
                description="This component is having Counter Application only" 
                functionalities="Increment | Decrement | Reset" buttonName="Learn More"
                textColour="brown"/>

            </div>
        )
    }
}
export default Counter;