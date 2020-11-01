import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
// import AxiosFetchWithAsync from './components/practice/PracticeAxios';

import Route from "./components/Route";

const items = [
  {
    title: "What is React?",
    content: "React is a JS framework. And it's pretty fun to use.",
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
/*
// routing via pathname object:
const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};
*/

export default () => {
  const [selected, setSelected] = useState([0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}

      {/* <Accordion /> */}
      {/* <Search /> */}
      {/* <Translate /> */}
      {/* <AxiosFetchWithAsync /> */}
    </div>
  );
};
