import { NavLink } from "react-router";

function NavBar() {
    return (
        <nav>
            <h1>Hetic</h1>
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}
export default NavBar;