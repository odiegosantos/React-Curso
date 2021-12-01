import React from "react";

const WithChildren = (props) => {

  return (
    <>
      <h2>Fight Club</h2>
      <div>
        {props.children}
      </div>
    </>
  );
};

export default WithChildren;