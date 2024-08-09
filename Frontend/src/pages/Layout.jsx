/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet , useLocation} from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Layout = ({ props }) => {
  const location = useLocation();
  const isSignupPage = location.pathname === '/signup';

  return (
    <div>
      {!isSignupPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isSignupPage && <Footer />}
    </div>
  );
}

export default Layout