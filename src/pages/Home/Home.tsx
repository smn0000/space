import "./styles.scss"
import { motion, useAnimate } from "framer-motion"

const Home = () => {
  const [scope, animate] = useAnimate()

  const expandCircle = () => {
    animate(
      scope.current,
      { scale: 1.5 },
      { type: "spring", duration: 0.5, bounce: 0.6 }
    )
  }

  const shrinkCircle = () => {
    animate(scope.current, { scale: 1 }, { duration: 0.1 })
  }

  return (
    <div className="home">
      <section className="home__left">
        <div className="home__hero">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </section>
      <section className="home__right">
        <div className="button_wrapper">
          <motion.button
            className="explore__button"
            onMouseEnter={expandCircle}
            onMouseLeave={shrinkCircle}
            whileTap={{ scale: 0.9, transition: { duration: 0.05 } }}
          >
            <h4>EXPLORE</h4>
          </motion.button>
          <div className="circle__hover" ref={scope}></div>
        </div>
      </section>
    </div>
  )
}

export default Home
