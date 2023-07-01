import summerMusicCamp from "../../../../assets/summerMusicCamp.jpg";
import toyMarketPlace from "../../../../assets/toyMarketPlace.jpg";
import foodieDine from "../../../../assets/foodieDine.jpg"

const RecentWork = () => {
    return (
        <div className="py-32">
            <h2 className="my-24 text-6xl font-bold text-sky-900">Recent Work</h2>

            <div className="flex gap-5 ">
                <div className="">
                    <a href="https://summer-music-camp-c56a8.web.app/">
                        <img src={summerMusicCamp} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://toy-marketplace-43ddc.web.app/">
                        <img src={toyMarketPlace} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://chef-recipe-4e191.web.app/">
                        <img src={foodieDine} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RecentWork;