import { useNavigate, useLocation } from "react-router-dom"

export const usePanNavigate = (numberOfpages: number) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const currentPage = Number(pathname.slice(-1))

  //Takest the first part of the url
  const path = pathname.replace(/(\/[^/]*).*/, "$1")

  const getNextPage = () => {
    if (currentPage + 1 === numberOfpages) return 0
    return currentPage + 1
  }
  const getPrevPage = () => {
    if (currentPage === 0) return numberOfpages - 1
    return currentPage - 1
  }

  return (offset: number) => {
    if (offset < -75) navigate(`${path}/${getNextPage()}`)
    if (offset > 75) navigate(`${path}/${getPrevPage()}`)
  }
}
