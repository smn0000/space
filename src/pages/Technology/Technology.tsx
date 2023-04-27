import "./styles.scss"
import "../page.scss"
import Technologyselect from "../../components/TechnologySelect/Technologyselect"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { usePanNavigate } from "../../usePanNavigate"
import { motion } from "framer-motion"

const Technology = ({ data }: { data: Technology[] }) => {
  const { pathname } = useLocation()

  const [pageNumber, setPageNumber] = useState(Number(pathname.slice(-1)))
  const [pageData, setPageData] = useState(data[pageNumber])
  const handlePanNavigate = usePanNavigate(data.length)
  const isLandscape = useMediaQuery("(max-width:1024px)")

  useEffect(() => {
    setPageNumber(Number(pathname.slice(-1)))
  }, [pathname])

  useEffect(() => {
    setPageData(data[pageNumber])
  }, [pageNumber])

  const landscape = new URL("/" + pageData.images.landscape, import.meta.url)
    .href
  const portrait = new URL("/" + pageData.images.portrait, import.meta.url).href
  return (
    <div className='page technology'>
      <h5 className='page__heading'>
        <span>03</span>
        SPACE LAUNCH 101
      </h5>
      <div className='page__wrapper'>
        <div className='page__left'>
          <Technologyselect
            data={data}
            activePage={pageNumber}
          />
          <div className='page__info'>
            <h4 className='page__falvourtext'>THE TERMINOLOGY...</h4>
            <h3 className='page__title'>{pageData.name}</h3>
            <p className='page__description'>{pageData.description}</p>
          </div>
        </div>
        <motion.div
          onPanEnd={(_e, panInfo) => handlePanNavigate(panInfo.offset.x)}
          className='page__right technology__right'>
          <img
            src={`${isLandscape ? landscape : portrait}`}
            alt=''
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Technology
