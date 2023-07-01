
const Services = () => {
    return (
        <div id="service" className="pt-5">
            <h2 className="my-32 text-sky-900 text-6xl mx-auto text-center font-bold">My Services</h2>
            <div className="text-sky-900 flex my-24 gap-10 justify-center">
                <div className=" p-10 card w-2/3 my-auto shadow-2xl hover:shadow-gray-400 ">
                    <div className="card-body">
                        <h2 className=" text-2xl card-title text-sky-500">Web Design & Development</h2>
                        <p className="text-lg"><b>I do not just design websites.</b> I build high-performing, beautiful websites that are conversion-focused, brand-accurate, and user-friendly.</p>
                    </div>
                </div>
                <div className="p-10 card w-2/3 my-auto shadow-2xl hover:shadow-gray-400 ">
                    <div className="card-body">
                        <h2 className="text-2xl card-title text-sky-500">Web Server</h2>
                        <p className="text-lg"><b>Web server is much essential. </b> I build high-performing, beautiful websites that are conversion-focused, brand-accurate, and user-friendly.</p>
                    </div>
                </div>
            </div>
            <div className="text-sky-900 flex my-24 gap-10 justify-center">
                <div className="p-10 card w-2/3 my-auto shadow-2xl hover:shadow-gray-400 ">
                    <div className="card-body">
                        <h2 className="text-2xl card-title text-sky-500">SEO</h2>
                        <p className="text-lg"><b>A greater audience.</b> A high converting website would not be effective if no one visits it. Ranking on Google is essential to getting new clients in the door.</p>
                    </div>
                </div>
                <div className="p-10 card w-2/3 my-auto shadow-2xl hover:shadow-gray-400 ">
                    <div className="card-body">
                        <h2 className="text-2xl card-title text-sky-500">Graphic & Branding</h2>
                        <p className="text-lg"><b>Catch the eye.</b> In addition to web services, I can produce branding and marketing resources for both print and digital applications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;