import Welcome from "./page/welcome";
import {Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Success from "./page/success";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </>
  )
}

export default App
