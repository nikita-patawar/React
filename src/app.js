// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

  //React Element
  // const heading =React.createElement("h1",{id:"heading"},"namaste react");
  // const root = ReactDOM.createRoot(document.getElementById("root"));

  //const jsxHeading=(<h1 className="head">Namaste React using JSX</h1>)
  // const Title=()=>(
  //   <div className="title"><h2> Hello From title component</h2></div>
  // )
  
  const AppLayout = () =>{
    return (
      <div className="app">
              <Header></Header>
              <Body/>
      </div>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<AppLayout />)