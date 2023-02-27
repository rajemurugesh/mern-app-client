import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
// import Partners from './components/Partners';
import Contact from './components/Contact';
import Client from './components/Client';
import Project from './components/Project';
import Footer from './components/Footer';
import Admin from './components/Admin';
//crud operation
import Editproject from './components/Projectss/Editproject';
import Addproject from './components/Projectss/Addproject';
import Viewproject from './components/Projectss/Viewproject';

import PrivateRoutes from "./Utils/PrivateRoutes";
const App = () => {
  return (
    <>
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/client" element={<Client />} />
      {/* <Route path="/partners" element={<Partners />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/project" element={<Project />} />
      <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route
          path="/components/Projectss/Editproject/:_id"
          element={<Editproject />}
        />
        <Route
          path="/components/Projectss/Addproject"
          element={<Addproject />}
        />
        <Route
          path="/components/Projectss/Viewproject/:_id"
          element={<Viewproject />}
        />  
    </Routes>

    <Footer />

    </>
    
  );
};

export default App;
