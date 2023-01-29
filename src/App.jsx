import React from "react";
import "./App.css";
import Header from "./Components/Heading/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/" /> */}</Routes>
      <Header />
    </BrowserRouter>
  );
};
export default App;
