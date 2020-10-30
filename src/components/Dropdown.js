import React from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  console.log("selected:", selected);
  // console.log(options);

  const renderedOptions = options.map((optionData) => {
    return (
      <div
        key={optionData.value}
        className="item"
        onClick={() => onSelectedChange(optionData)}
      >
        {optionData.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{`Selected label is:  ${selected.label}`}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
