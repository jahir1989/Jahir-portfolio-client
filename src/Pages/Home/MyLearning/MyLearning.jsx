import html5 from "../../../assets/HTML-5.png";
import css3 from "../../../assets/Css-3.png";
import jslogo from "../../../assets/jslogo.png";
import Reactlogo from "../../../assets/reactlogo.png";
import nodeJS from "../../../assets/node.js.png";
import mongoDB from "../../../assets/mongoDB.png";


const MyLearning = () => {
    return (
        <div className=" py-32 flex gap-10">
            <div>
                <img src={html5} alt="" />
            </div>
            <div>
                <img src={css3} alt="" />
            </div>
            <div>
                <img src={jslogo} alt="" />
            </div>
            <div>
                <img src={Reactlogo} alt="" />
            </div>
            <div>
                <img src={nodeJS} alt="" />
            </div>
            <div>
                <img src={mongoDB} alt="" />
            </div>
        </div>
    );
};

export default MyLearning;