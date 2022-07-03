import React from 'react';

class Counter extends React.Component {
    constructor(props){
        console.log('constructor')
        super();
        this.state = {
            initialValue : 5
        }
    }
    handleDecrement = () => {
        console.log('In Decrement Function')
        this.setState({initialValue : --this.state.initialValue})
    }
    handleReset = (resetValue) => {
        console.log('In Reset Function')
        this.setState({initialValue : resetValue})
    }
    render(){
        
        const handleIncrement = () => {
            console.log('In increment Function')
            this.setState({initialValue : ++this.state.initialValue})
        }

        return(
            <div>
                <h3> This is {this.props.componentName} </h3>
                Initial Value : {this.state.initialValue} <br/> <br/>

                <button onClick={handleIncrement}> Increment </button> &nbsp; &nbsp;

                <button onClick={this.handleDecrement}> Decrement </button> &nbsp; &nbsp;

                <button onClick={() => this.handleReset(5)}> Reset </button> &nbsp; &nbsp;
            </div>
        )
    }
}
export default Counter;