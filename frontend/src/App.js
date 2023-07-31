import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import LoginScreen from "./components/LoginScreen";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
