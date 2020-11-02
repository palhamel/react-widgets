import React from "react";

const Link = ({ href, className, children}) => {
  // event handler:
  const onClick = () => {


  };

  
  return (
  <a oncClick={onClick} href={href} className={className}>{children}</a>
  )
};

export default Link;
