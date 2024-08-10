/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Course from "./pages/Course.jsx";
import Layout from "./pages/Layout.jsx";
import SignUp from "./pages/SignUp.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} index />
            <Route
              path="/course"
              element={authUser ? <Course /> : <Navigate to="/signup" />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
