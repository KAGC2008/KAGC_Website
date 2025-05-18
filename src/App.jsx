import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "@components/Landing/index";
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";

import homeData from "@data/home.json";

const App = () => {
  return (
    <>
      <Router>
        <Landing>
          <Routes>
            <Route path="/" element={<Home data={homeData} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Landing>
      </Router>
    </>
  );
};

export default App;
