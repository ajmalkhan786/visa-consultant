import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Photo from "./components/Photo";
import Services from "./components/Services";
import Australia from './components/Australia'
import Canada from './components/Canada'
import Germany from './components/Germany'
import Norway from './components/Norway'
import Sweden from "./components/Sweden"
import UK from "./components/Uk";
import USA from "./components/Usa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about-us" element={ <About /> } />
          <Route exact path="/contact-us" element={ <Contact /> } />
          <Route exact path="/services" element={ <Services /> } />
          <Route exact path="/gallery" element={ <Photo /> } />
          <Route exact path="/australia" element={ <Australia /> } />
          <Route exact path="/canada" element={ <Canada /> } />
          <Route exact path="/germany" element={ <Germany /> } />
          <Route exact path="/norway" element={ <Norway /> } />
          <Route exact path="/sweden" element={ <Sweden /> } />
          <Route exact path="/united-kingdom" element={ <UK /> } />
          <Route exact path="/usa" element={ <USA /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
