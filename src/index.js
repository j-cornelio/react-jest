import React from "react";
import ReactDOM from "react-dom";
import Buttons  from "./components/Buttons";

const Index = () => {
  return (
  	<div>
  		<Buttons />
  	</div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
