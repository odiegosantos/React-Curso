import React from "react";

const Step = (props) => {

  return (
    <div>
      <label htmlFor="stepInput">Step: </label>
      <input
        id="stepInput"
        type="number"
        value={props.step}
        onChange={(e) => props.onStepChange(+e.target.value)}
      />
    </div>
  );
};

export default Step;