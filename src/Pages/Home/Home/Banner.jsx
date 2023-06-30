import jahirphoto from '../../../assets/jahir-photo.jpg'


const Banner = () => {
    return (
        <div className='py-24 flex '>
            <div className='w-1/2 mx-24 align-center my-auto text-sky-900'>
                <h2 className=' text-5xl font-bold '>I Build Custom <span className='text-sky-500'>Website Solutions</span> That Help Your <span className='text-sky-500'>Business Grow</span></h2>
                <p className='mt-8'>I help you increase conversion and performance in every possible way.</p>
                <div className='mt-8'>
                    <button className='mr-5 btn btn-ghost bg-sky-900 text-white'>See My Work</button>
                    <button className='btn btn-ghost bg-sky-500 text-white'>Start a Project</button>
                </div>
            </div>
            <div className='w-1/2'>
                <div>
                    <figure className='w-4/5'>
                        <img src={jahirphoto} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Banner;