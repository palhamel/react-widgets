import React from "react";

const Dropdown = ({ options }) => {
  // console.log(options);

  const renderedOptions = options.map((optionData) => {
    return (
      <div key={optionData.value} className="item">
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
          <div className="text">Drop down here</div>
          <div className="menu visible transition">
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dropdown;
