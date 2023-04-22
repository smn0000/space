import "./styles.scss"

const Home = () => {
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
        <button className="explore__button">
          <h4>EXPLORE</h4>
        </button>
      </section>
    </div>
  )
}

export default Home
