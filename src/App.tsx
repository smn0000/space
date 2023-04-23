import { Routes, Route } from "react-router-dom"
import Destination from "./pages/Destination/Destination"
import Crew from "./pages/Crew/Crew"
import Home from "./pages/Home/Home"
import Technology from "./pages/Technology/Technology"
import Navbar from "./components/Navbar/Navbar"
import data from "./data.json"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew/:id" element={<Crew data={data.crew} />} />
        <Route
          path="/technology/:id"
          element={<Technology data={data.technology} />}
        />
        <Route
          path="/destination/:id"
          element={<Destination data={data.destinations} />}
        />
      </Routes>
    </>
  )
}

export default App
