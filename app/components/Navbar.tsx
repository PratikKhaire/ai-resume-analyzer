import { Link } from "react-router"



const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <Link to="/uploade" className=" primary-button w-fit">
            Uploade Resume</Link>
        </nav>
    );
}

export default Navbar