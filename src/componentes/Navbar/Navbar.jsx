import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-bar">
            <Link to="/">Inicio</Link>
            <Link to="/personajes">Personajes</Link>
            <Link to="/opiniones">Opiniones</Link>
        </nav>
    );
};

export default Navbar;
