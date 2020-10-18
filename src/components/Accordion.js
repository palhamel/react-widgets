import React, { useState } from "react";

// render out jsx using class names - semantic-ui
const Accordion = ({ items }) => {
// init new State:
const [activeIndex , setActiveIndex] = useState(null);

  // helper function/method onClick:
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      // using React.Fragment to avoid generate an extra div html to semantic-ui:
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
return <div className="ui styled accordion">
    {renderedItems}
    <h1>{activeIndex}</h1>
  </div>;
};

export default Accordion;
