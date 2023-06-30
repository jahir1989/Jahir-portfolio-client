import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBer/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import Banner from "../Pages/Home/Home/Banner";
import Services from "../Pages/Home/Services/Services";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Main;