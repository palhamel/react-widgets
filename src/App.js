import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a JS framework.",
  },
  {
    title: "What is JSX?",
    content:
      "JSX is a syntax extension to JavaScript and comes with the full power of JavaScript..",
  },
  {
    title:
      "What are the differences between a class component and functional component?",
    content:
      "Class components allows us to use additional features such as local state and lifecycle hooks. Also, to enable our component to have direct access to our store and thus holds state.",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
