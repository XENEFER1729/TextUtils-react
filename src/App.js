
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from './components/Alert';
import Custom_theme from './components/Custom_theme';
import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const [modebg, setmodebg] = useState("light");
  const [textcolor, setTextcolor] = useState("dark");
  const [textindark_light, settextindarklight] = useState("Enable dark Mode");
  const [alert, setalert] = useState(null);
  
  const showalert = (type, message) => {
    setalert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setalert(null);
    }, 2000)
  }
  const togglemode1 = () => {
    console.log(mode);
    if (mode === "light") {
      setmode("dark");
      setmodebg("dark");
      settextindarklight("Enable light Mode");
      setTextcolor("light");
      document.body.style.backgroundColor = "black";
      showalert("success", "dark Mode Enabled");
    } else {
      setmode("light");
      setmodebg("light")
      settextindarklight("Enable dark Mode");
      document.body.style.backgroundColor = "white"
      setTextcolor("dark")
      showalert("success", "light Mode Enabled")
    }
  }
  function handletheme(color) {
    setmodebg(color);
    if (color === "primary") {
      document.body.style.backgroundColor = "blue"
      setTextcolor("white")
    }
    if (color === "success") {
      document.body.style.backgroundColor = "green"
      setTextcolor("white")
    }
    if (color === "warning") {
      document.body.style.backgroundColor = "orange"
      setTextcolor("white")
    }
    if (color === "danger") {
      document.body.style.backgroundColor = "red"
      setTextcolor("white")
    }
    if (color === "info") {
      document.body.style.backgroundColor = "cyan"
      setTextcolor("black")
    }
  }


  return (
    <>
      <Router>
        <Navbar bgmode={mode} bgmode2={modebg} togglemode11={togglemode1} tagglemode12={handletheme} textofd_l={textindark_light}></Navbar>
        <Alert alert1={alert} tagglemode12={handletheme} ></Alert>
        <Routes>
          <Route path='/about'
            element={
              <About alert1={showalert} textcolor1={textcolor} tagglemode12={handletheme} textcolor2={handletheme} togglemode={togglemode1} textofd_l={textindark_light}></About>
            }
          />
          <Route path='/theme'
            element={
              <Custom_theme bgmode={handletheme} textcolor1={textcolor} />
            }
          />
        </Routes>
        {/* <About alert1={showalert} textcolor1={textcolor} tagglemode12={handletheme} textcolor2={handletheme} togglemode={togglemode1} textofd_l={textindark_light}></About>
        <Custom_theme bgmode={handletheme} textcolor1={textcolor} /> */}
      </Router>
    </>
  );
}

export default App;
