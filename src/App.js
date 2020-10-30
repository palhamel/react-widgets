import React, {useState} from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a JS framework. And it's pretty fun to use.",
//   },
//   {
//     title: "What is JSX?",
//     content:
//       "JSX is a syntax extension to JavaScript and comes with the full power of JavaScript..",
//   },
//   {
//     title:
//       "What are the differences between a class component and functional component?",
//     content:
//       "Class components allows us to use additional features such as local state and lifecycle hooks. Also, to enable our component to have direct access to our store and thus holds state.",
//   },
// ];

const options = [
  {
    label: "The red",
    value: "red",
  },
  {
    label: "The green",
    value: "green",
  },
  {
    label: "The blue",
    value: "blue",
  },
];

export default () => {

  const [selected, setSelected] = useState(options[0]);


  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown 
        selected={selected} 
        onSelectedChange={setSelected}
        options={options} 
      />
    </div>
  );
};
