import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> home </Link>{" "}
        </li>
        <li>
          <Link to="/about"> About</Link>{" "}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
