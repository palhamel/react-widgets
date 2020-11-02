import React from "react";

const Link = ({ href, className, children }) => {
  // event handler:
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", href);

    // communicate to route components about URL changes:
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
