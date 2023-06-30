
const Services = () => {
    return (
        <div>
            <h2 className="my-32 text-sky-900 text-5xl mx-auto text-center font-bold">My Services</h2>
            <div className="text-sky-900 flex my-32 gap-10 justify-center">
                <div className="bg-sky-300 card w-96 ">
                    <div className="card-body">
                        <h2 className="card-title">Web Design & Development</h2>
                        <p><b>I don't just design websites.</b> I build high-performing, beautiful websites that are conversion-focused, brand-accurate, and user-friendly.</p>
                    </div>
                </div>
                <div className="bg-sky-300 card w-96 ">
                    <div className="card-body">
                        <h2 className="card-title">Web Server</h2>
                        <p><b>Web server is essential for a website</b> I build high-performing, beautiful websites that are conversion-focused, brand-accurate, and user-friendly.</p>
                    </div>
                </div>
                <div className="bg-sky-300 card w-96 ">
                    <div className="card-body">
                        <h2 className="card-title">SEO</h2>
                        <p><b>A greater audience.</b> A high converting website won't be effective if no one visits it. Ranking on Google is essential to getting new clients in the door.</p>
                    </div>
                </div>
                <div className="bg-sky-300 card w-96 ">
                    <div className="card-body">
                        <h2 className="card-title">Graphic & Branding</h2>
                        <p><b>Catch the eye.</b> In addition to web services, I can produce branding and marketing resources for both print and digital applications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;