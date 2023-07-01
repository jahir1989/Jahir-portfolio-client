import { Link } from 'react-scroll'


const NavBar = () => {
    const navItems = <> 
        <li><Link to='service' spy={true} smooth={true} offset={50} duration={800}>Services</Link></li>
        <li><Link to='portfolio' spy={true} smooth={true} offset={50} duration={800}>Portfolio</Link></li>
        <li><Link to='about' spy={true} smooth={true} offset={50} duration={800}>About</Link></li>
        <li><Link to='blog' spy={true} smooth={true} offset={50} duration={800}>Blog</Link></li>
        <li className='bg-sky-500 text-white rounded-md shadow-lg shadow-sky-500/50'>
        <a href="https://drive.google.com/uc?id=1ZBQF-1zL5ptNu-ASk0iEKTNmJMKLFuFN&export=download">Resume</a></li>
    </>


    return (
        <div className=" text-sky-900 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Jahirul Haque</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className=" navbar-end">
                <a className=" text-white btn btn-ghost bg-sky-900 shadow-lg shadow-sky-900/50">Contact</a>
            </div>
        </div>
    );
};

export default NavBar;