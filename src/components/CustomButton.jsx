import React from "react";

import "./style.css";

const CustomButton = props => {
  const btnEnableDisable = !props.isDisabled ? "btn-enable" : "btn-disabled";

  return (
    <button
      id={props.id}
      className={`btn ${props.btn} ${btnEnableDisable}`}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

CustomButton.defaultProps = {
  type: "button",

  disabled: false
};

export default CustomButton;
