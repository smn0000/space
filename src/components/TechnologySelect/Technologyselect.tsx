import "./styles.scss"
import Circle from "./Circle"
const Technologyselect = ({
  data,
  activePage,
}: {
  data: Technology[]
  activePage: number
}) => {
  return (
    <div className="technologyselect">
      {data.map((_el, id) => (
        <Circle key={id} isActive={activePage === id ? true : false} id={id} />
      ))}
    </div>
  )
}

export default Technologyselect
