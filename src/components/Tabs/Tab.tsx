import { Link } from "react-router-dom"
import { useAnimate, motion } from "framer-motion"

const Tab = ({
  data,
  id,
  isActive,
}: {
  data: Destination
  id: number
  isActive: boolean
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
    if (!isActive) animate(scope.current, { scaleX: 1, opacity: 0.5 })
  }

  const handleHoverHide = () => {
    if (!isActive) animate(scope.current, { scaleX: 0, opacity: 0 })
  }

  return (
    <Link
      to={`/destination/${id}`}
      className=" tab"
      onMouseEnter={handleHoverShow}
      onMouseLeave={handleHoverHide}
      onMouseDown={() =>
        animate(scope.current, {
          scaleX: 1,
          opacity: 1,
        })
      }
    >
      <span
        className="nav__text tab__text"
        data-active={isActive ? "true" : "false"}
      >
        {data.name}
      </span>

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

export default Tab
