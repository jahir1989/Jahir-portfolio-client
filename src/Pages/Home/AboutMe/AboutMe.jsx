import jahirphoto from '../../../assets/jahir-photo.jpg';
const AboutMe = () => {
    return (
        <div id='about' className="py-32 text-sky-900 text-center">
            <div className="hero min-h-screen bg-base-200">
                <div className="mx-10 hero-content flex-col lg:flex-row">
                    <img src={jahirphoto} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6">Being an Full Stack react Web Developer, i want to lead the web development industry. i am new, but i am still learning. But you should not judje me by my experience, but my work.</p>
                        <button className="btn bg-sky-500 text-white hover:bg-sky-900">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;