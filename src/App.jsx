import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Skills from "./routes/skills";
import PastWork from "./routes/pastwork";
import Contact from "./routes/contact";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <div className="nav-menu-container">
        <nav className="nav-menu">
          <NavLink exact to={`/`} activeClassName="active-link">
            Home
          </NavLink>

          <NavLink to={`about`} activeClassName="active-link">
            About Me
          </NavLink>

          <NavLink to={`skills`} activeClassName="active-link">
            My Skills
          </NavLink>

          <NavLink to={`pastwork`} activeClassName="active-link">
            My Past Work
          </NavLink>

          <NavLink to={`contact`} activeClassName="active-link">
            Contact
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="pastwork" element={<PastWork />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
