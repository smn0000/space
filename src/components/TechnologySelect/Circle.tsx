import "./styles.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const Circle = ({ isActive, id }: { isActive: boolean; id: number }) => {
  const circleVariants = {
    idle: {
      borderColor: "rgba(255, 255, 255, .3)",
      color: "rgba(255, 255, 255, 1)",
      backgroundColor: "rgba(255,255,255,0)",
    },
    active: {
      borderColor: "rgba(255, 255, 255, 1)",
      color: "rgba(0,0,0,1)",
      backgroundColor: "rgba(255,255,255,1)",
      scale: 1.15,
    },
    hover: {
      borderColor: "rgba(255, 255, 255, .8)",
    },
  }
  return (
    <Link to={`/technology/${id}`}>
      <motion.div
        className={`technologyselect__circle ${isActive === true && "active"}`}
        variants={circleVariants}
        initial="idle"
        animate={isActive ? "active" : "idle"}
        whileHover="hover"
      >
        <span>{id + 1}</span>
      </motion.div>
    </Link>
  )
}

export default Circle
