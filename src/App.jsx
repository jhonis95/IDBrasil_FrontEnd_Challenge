import Welcome from "./page/welcome";
import {Routes, Route } from "react-router-dom";
import Home from "./page/home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
