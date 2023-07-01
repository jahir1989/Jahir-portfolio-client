
const MyProcess = () => {
    return (
        <div className=" py-32 flex">
            <div className="w-2/5">
                <h3 className="text-gray-400">Methodology</h3>
                <h2 className="text-6xl font-bold text-sky-900">My Process</h2>
            </div>
            <div className="w-3/5 text-sky-900">
                <div className=" my-5 p-10 card shadow-2xl hover:shadow-gray-400 ">
                    <h2 className="text-4xl font-semibold text-sky-600">Discovery</h2>
                    <p className=" pt-5 text-lg">This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience.</p>
                </div>
                <div className=" my-5 p-10 card shadow-2xl hover:shadow-gray-400 ">
                    <h2 className="text-4xl font-semibold text-sky-600">Design</h2>
                    <p className=" pt-5 text-lg">I take what I’ve learned about you & craft a bespoke website that’s tailored to meet your unique needs, all while accurately representing your brand & keeping things aesthetically pleasing & useable for your audience.</p>
                </div>
                <div className=" my-5 p-10 card shadow-2xl hover:shadow-gray-400 ">
                    <h2 className="text-4xl font-semibold text-sky-600">Build</h2>
                    <p className=" pt-5 text-lg">Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability.</p>
                </div>
                <div className=" my-5 p-10 card shadow-2xl hover:shadow-gray-400 ">
                    <h2 className="text-4xl font-semibold text-sky-600">Launch</h2>
                    <p className=" pt-5 text-lg">After I’ve completed the build and double checked everything alongside your approval, it’s time to launch your website. In this phase I will also provide some training videos on how you can add content to your website so you can do it yourself.</p>
                </div>
                
            </div>
        </div>
    );
};

export default MyProcess;