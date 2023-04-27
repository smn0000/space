import "./styles.scss"
import "../page.scss"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Dotselect from "../../components/Dotselect/Dotselect"

const Crew = ({ data }: { data: CrewMember[] }) => {
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
    <div className='page crew'>
      <h5 className='page__heading'>
        <span>02</span> MEET YOUR CREW
      </h5>
      <div className='page__wrapper'>
        <div className='page__left page__info'>
          <h4 className='crew__role'>{pageData.role}</h4>
          <h3 className='page__title'>{pageData.name}</h3>
          <p className='page__description'>{pageData.bio}</p>
          <div className='dot__select'>
            <Dotselect
              activePage={pageNumber}
              data={data}
            />
          </div>
        </div>
        <div className='page__right'>
          <img
            src={img}
            alt={`${pageData.name}`}
            loading='lazy'
            className='page__image'
          />
        </div>
      </div>
    </div>
  )
}

export default Crew
