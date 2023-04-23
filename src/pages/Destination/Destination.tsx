import "./styles.scss"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import Tabs from "../../components/Tabs/Tabs"

const Destination = ({ data }: { data: Destination[] }) => {
  const { pathname } = useLocation()

  const [pageNumber, setPageNumber] = useState(Number(pathname.slice(-1)))
  const [pageData, setPageData] = useState(data[pageNumber])

  let click = () => {
    setPageNumber(0)
    setPageData((current) => current)
  }

  let img = new URL("/" + pageData.images.webp, import.meta.url).href
  return (
    <div className="page destination" onClick={click}>
      <h5 className="destination__heading">
        <span>01</span> PICK YOUR DESTINATION
      </h5>
      <img src={img} alt={`${pageData.name}`} className="destination__image" />
      <Tabs></Tabs>
    </div>
  )
}

export default Destination
