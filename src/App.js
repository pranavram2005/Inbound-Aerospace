import "./styles.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Aboutus from "./components/Aboutus";
import Product from "./components/Product";
import Login from "./components/Login";
import News from "./components/News";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import Science from "./components/Science";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import MissionProfile from "./components/missionprofile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="science" element={<Science />} />
          <Route path="engine" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="news" element={<News />} />
          <Route path="career" element={<Careers />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
