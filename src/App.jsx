import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Nav from "./component/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Packages from "./pages/packages";
const router=createBrowserRouter([
  {
    path:'/',
    element: (
      <>
      <Nav/>
      <Home/>
      </>
    )
  },
  {
    path:'/about',
    element: (
      <>
      <Nav/>
      <About/>
      </>
    )
  },
  {
    path:'/packages',
    element: (
      <>
      <Nav/>
      <Packages/>
      </>
    )
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
