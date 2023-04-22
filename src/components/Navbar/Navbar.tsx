import "./styles.scss"
import NavItem from "./NavItem"
import NavMenu from "./Navmenu/NavMenu"
import { useLocation } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { useState } from "react"

const Navbar = () => {
  const { pathname } = useLocation()
  const isMobile = useMediaQuery("(max-width:470px)")
  const [showNavmenu, setShowNavmenu] = useState(false)

  const toggleNavMenu = () => {
    setShowNavmenu((current) => !current)
  }
  return (
    <nav className="navbar">
      {showNavmenu && <NavMenu toggleNavMenu={toggleNavMenu} />}

      <div className="nav__left">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      {!showNavmenu && (
        <div className="nav__right">
          {isMobile ? (
            <div className="hamburger__container">
              <button className="hamburger__button" onClick={toggleNavMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                  <g fill="#D0D6F9" fillRule="evenodd">
                    <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                  </g>
                </svg>
              </button>
            </div>
          ) : (
            <ul>
              <li>
                <NavItem
                  id={0}
                  text="HOME"
                  to="/"
                  isActive={pathname === "/" ? true : false}
                />
              </li>
              <li>
                <NavItem
                  id={1}
                  text="DESTINATION"
                  to="/destiation"
                  isActive={pathname === "/destination" ? true : false}
                />
              </li>
              <li>
                <NavItem
                  id={2}
                  text="CREW"
                  to="/crew"
                  isActive={pathname === "/crew" ? true : false}
                />
              </li>
              <li>
                <NavItem
                  id={3}
                  text="TECHNOLOGY"
                  to="/technology"
                  isActive={pathname === "/technology" ? true : false}
                />
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
