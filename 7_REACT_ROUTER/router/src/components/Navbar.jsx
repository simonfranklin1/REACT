import { Link } from "react-router-dom"

// 9 - Links ativos
import { NavLink } from "react-router-dom"

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
        {/*<Link to ="/">
          <h3>Home</h3>
        </Link>
        <Link to="/contact">
          <h3>Contatos</h3>
        </Link>*/}
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contatos</NavLink>
    </div>
  )
}

export default Navbar