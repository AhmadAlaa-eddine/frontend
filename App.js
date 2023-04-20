import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home";
import Games from "./components/Games";
// import Books from "./components/Books";
import Movies from "./components/Movies";
import Apps from "./components/Apps";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Home" element={<Home />} />
      </Routes>

      <Routes>
        <Route
          path="/Games"
          element={
            <>
              <NavBar />
              <Games />
            </>
          }
        />
        <Route
          path="/Movies"
          element={
            <>
              <NavBar />
              <Movies />
            </>
          }
        />
        <Route
          path="/Apps"
          element={
            <>
              <NavBar />
              <Apps />
            </>
          }
        />
        {/* <Route path="/Books" element={<Books />} /> */}
      </Routes>

      <Routes>
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
