import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar/Navbar";
import Home from "./Homepage/Home";
import Engineering from "./Engineering/Engineering";
import Architecture from "./Architecture/Architecture";
import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
