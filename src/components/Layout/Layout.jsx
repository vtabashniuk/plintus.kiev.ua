import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { navigationLabels } from "../../data/navigationLabels";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";

const Layout = () => {
  return (
    <>
      {/* <div>LOGO</div> */}
      <Logo />
      <Navbar navigationLabels={navigationLabels} />
      <div>CART</div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
