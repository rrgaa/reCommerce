import React from "react";
import "./App.css";
import Home from "./assets/Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header";
import Shop from "./assets/Pages/Shop";
import Categories from "./assets/Pages/Categories";
import SearchResults from "./assets/Pages/SearchResults";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Categories" element={<Categories/>} />
          <Route path="/SearchResults" element={<SearchResults/>} />
        </Routes>
      </div>
    </Router>
  );
}
