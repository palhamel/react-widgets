import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  console.log(selected)
  // for drop down menu css:
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // event listener on body element to close drop down:
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    
    // cleanup useEffect state:
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((optionData) => {
    // hide the selected value from render in the list:
    if (optionData.value === selected.value) {
      return null;
    }

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
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          {/* <div className="text">{`Selected label is: ${selected.label}`}</div> */}
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
