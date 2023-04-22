import { Routes, Route } from "react-router-dom"
import Destination from "./pages/Destination/Destination"
import Crew from "./pages/Crew/Crew"
import Home from "./pages/Home/Home"
import Technology from "./pages/Technology/Technology"
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew:/name" element={<Crew />} />
        <Route path="/technology:/name" element={<Technology />} />
        <Route path="/destination/:name" element={<Destination />} />
      </Routes>
    </>
  )
}

export default App
