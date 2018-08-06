import React from "react";
import ReactDOM from "react-dom";
//import Buttons  from "./components/Buttons";
import LeftPanel  from "./components/LeftPanel";

const Index = () => {
  return (
  	<div>
  		<LeftPanel />
  	</div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
