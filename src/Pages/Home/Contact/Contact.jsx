
const Contact = () => {
    return (
        <div>
            <h2 className="pt-12 text-center text-6xl font-bold text-sky-900">Contact Me</h2>
            <h3 className="pt-5 text-center text-xl font-bold text-sky-500"><a href="mailto:jahirul.jahir@gmail.com">Email Me</a></h3>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-gray-200">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-sky-900 label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-sky-900 label-text">Your Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Email" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-500 text-white hover:bg-sky-900">Add Your Mail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;