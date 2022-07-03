import React from "react";
import { Route, Routes } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container bg">
      <Header />
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path="/launch/:flight_number" element={<Launch />} />
      </Routes>
    </div>
  );
};

export default App;
