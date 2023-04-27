import "./styles.scss"
import "../page.scss"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Tabs from "../../components/Tabs/Tabs"

const Destination = ({ data }: { data: Destination[] }) => {
  const { pathname } = useLocation()

  const [pageNumber, setPageNumber] = useState(Number(pathname.slice(-1)))
  const [pageData, setPageData] = useState(data[pageNumber])

  useEffect(() => {
    setPageNumber(Number(pathname.slice(-1)))
  }, [pathname])

  useEffect(() => {
    setPageData(data[pageNumber])
  }, [pageNumber])

  const img = new URL("/" + pageData.images.webp, import.meta.url).href
  return (
    <div className='page destination'>
      <h5 className='page__heading'>
        <span>01</span> PICK YOUR DESTINATION
      </h5>
      <div className='page__wrapper'>
        <div className='page__right'>
          <img
            src={img}
            alt={`${pageData.name}`}
            loading='lazy'
            className='page__image'
          />
        </div>
        <div className='page__left'>
          <Tabs
            data={data}
            activePage={pageNumber}></Tabs>
          <h2 className='page__title'>{pageData.name}</h2>
          <p className='page__description'>{pageData.description}</p>
          <div className='destination__numbers'>
            <div className='destinanion__distance'>
              <h6>AVG. DISTANCE</h6>
              <h4>{pageData.distance}</h4>
            </div>
            <div className='destination__time'>
              <h6>EST. TRAVEL TIME</h6>
              <h4>{pageData.travel}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
