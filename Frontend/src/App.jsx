import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Course from "./pages/Course.jsx";
import Layout from "./pages/Layout.jsx";
import SignUp from "./pages/SignUp.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";

function App() {
  return (
    <>
      <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>} index/> 
        <Route path="/course" element={<Course/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Route>
      </Routes>
    </>
  );
}

export default App;
