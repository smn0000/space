import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useAnimate } from "framer-motion"

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
  const highlightVariants = {
    idle: {
      scaleX: 0,
      duration: 1,
    },
    active: {
      scaleX: 1,
    },
    hover: {
      scaleX: 1,
    },
  }

  const [scope, animate] = useAnimate()

  const handleHoverShow = () => {
    if (isActive) animate(scope.current, { scaleX: 1, opacity: 1 })
    else animate(scope.current, { scaleX: 1, opacity: 0.5 })
  }

  const handleHoverHide = () => {
    if (isActive) animate(scope.current, { scaleX: 1, opacity: 1 })
    else animate(scope.current, { scaleX: 0, opacity: 0 })
  }

  return (
    <Link
      to={to}
      className="nav__link"
      onMouseEnter={handleHoverShow}
      onMouseLeave={handleHoverHide}
    >
      <span className="navbar__count">0{id}</span> {text}
      <motion.div
        ref={scope}
        className="highlight__bar"
        variants={highlightVariants}
        initial="idle"
        animate={isActive ? "active" : "idle"}
      ></motion.div>
    </Link>
  )
}

export default NavItem
