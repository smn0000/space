import "./styles.scss"
import Dot from "./Dot"

const Dotselect = ({
  activePage,
  data,
}: {
  activePage: number
  data: CrewMember[]
}) => {
  return (
    <div className="dotselect">
      {data.map((_el, id) => (
        <Dot key={id} id={id} isActive={activePage === id ? true : false} />
      ))}
    </div>
  )
}

export default Dotselect
