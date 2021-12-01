import './Counter.css';
import React from "react";
import Step from "./Step";
import Display from "./Display";
import Button from "./Button";

class Counter extends React.Component {

  state = {
    step: this.props.step || 1,
    valor: this.props.valor || 0
  };

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.step
    })
  };

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.step
    })
  };

  changeStep = (newStep) => {
    this.setState({
      step: newStep
    })
  };

  render() {
    return (
      <div className="Counter">

        <h2>Counter</h2>

        <Step 
          step={this.state.step}
          onStepChange={this.changeStep}>  
        </Step>
        <Display 
          valor={this.state.valor}>
        </Display>
        <Button 
          onInc={this.inc} 
          onDec={this.dec}>
        </Button>
      </div>
    );
  };
};

export default Counter;