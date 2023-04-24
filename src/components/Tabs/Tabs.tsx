import "./styles.scss"
import Tab from "./Tab"

const Tabs = ({
  data,
  activePage,
}: {
  data: Destination[]
  activePage: number
}) => {
  return (
    <div className="tabs">
      {data.map((data, i) => (
        <Tab
          key={i}
          id={i}
          data={data}
          isActive={activePage === i ? true : false}
        ></Tab>
      ))}
    </div>
  )
}

export default Tabs
