import { useParams } from "react-router-dom"
import "./styles.scss"

const Destination = () => {
  const { name } = useParams()

  return <div>{name}</div>
}

export default Destination
