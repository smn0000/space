import { useParams } from "react-router-dom"

const Destination = () => {
  const { name } = useParams()
  /*  console.log(param) */

  return <div>{name}</div>
}

export default Destination
