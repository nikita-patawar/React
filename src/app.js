// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery"
  //React Element
  // const heading =React.createElement("h1",{id:"heading"},"namaste react");
  // const root = ReactDOM.createRoot(document.getElementById("root"));

  //const jsxHeading=(<h1 className="head">Namaste React using JSX</h1>)
  // const Title=()=>(
  //   <div className="title"><h2> Hello From title component</h2></div>
  // )
const Grocery = lazy(()=>import("./components/Grocery"))
const About =lazy(()=> import("./components/About"));
  const AppLayout = () =>{
    return (
      <div className="app">
              <Header></Header>
             <Outlet></Outlet>
      </div>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/Grocery",
          element:<Suspense fallback=
          {<div>Component1 are loading please wait...</div>}>
                          <Grocery />
                          </Suspense>
        },
        {
          path:"/restaurants/:resId",
          element:<RestaurentMenu/>,
        }
        

      ],
      errorElement:<Error/>,
    },
    
  ])
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter
  } />)