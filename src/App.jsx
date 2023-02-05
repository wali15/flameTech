import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
