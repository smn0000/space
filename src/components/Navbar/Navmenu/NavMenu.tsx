import "./styles.scss"
import { Link } from "react-router-dom"

const Navmenu = ({ toggleNavMenu }: { toggleNavMenu: () => any }) => {
  return (
    <div className="nav__menu">
      <div className="nav__menu__top" onClick={toggleNavMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </div>
      <div className="nav__menu__bottom">
        <ul>
          <li>
            <Link to={"/"}>
              <span>00</span>HOME
            </Link>
          </li>
          <li>
            <Link to={"/destination"}>
              <span>01</span>DESTINATION
            </Link>
          </li>
          <li>
            <Link to={"/crew"}>
              <span>02</span>CREW
            </Link>
          </li>
          <li>
            <Link to={"/technology"}>
              <span>03</span>TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navmenu
