import { motion, useAnimate } from "framer-motion"
import { Link } from "react-router-dom"

const Dot = ({ isActive, id }: { isActive: boolean; id: number }) => {
  const highlightVariants = {
    idle: {
      backgroundColor: "#ffffff80",
    },
    active: {
      backgroundColor: "#ffffff",
    },
  }

  return (
    <Link to={`/crew/${id}`}>
      <motion.div
        className="dot"
        variants={highlightVariants}
        initial="idle"
        animate={isActive ? "active" : "idle"}
        whileHover="active"
        transition={{ duration: 0.5 }}
      ></motion.div>
    </Link>
  )
}

export default Dot
