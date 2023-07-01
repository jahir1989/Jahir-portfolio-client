import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBer/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import Banner from "../Pages/Home/Home/Banner";
import Services from "../Pages/Home/Services/Services";
import RecentWork from "../Pages/Home/Home/RecentWork/RecentWork";
import MyProcess from "../Pages/Home/MyProcess/MyProcess";
import MyBlog from "../Pages/Home/MyBlog/MyBlog";
import MyLearning from "../Pages/Home/MyLearning/MyLearning";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Banner></Banner>
            <MyLearning></MyLearning>
            <Services></Services>
            <RecentWork></RecentWork>
            <MyProcess></MyProcess>
            <MyBlog></MyBlog>
            <Footer></Footer>
        </div>
    );
};

export default Main;