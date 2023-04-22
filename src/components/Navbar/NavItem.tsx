import { Link } from "react-router-dom"

const NavItem = ({
  to,
  isActive,
  id,
  text,
}: {
  to: string
  isActive: boolean
  id: number
  text: string
}) => {
  return (
    <Link to={to} data-active={`${isActive}`} className="nav__link">
      <span className="navbar__count">0{id}</span> {text}
    </Link>
  )
}

export default NavItem
