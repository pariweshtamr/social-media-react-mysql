import Leftbar from "./Leftbar"
import Navbar from "./Navbar"
import Rightbar from "./Rightbar"

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Leftbar />
        {children}
        <Rightbar />
      </div>
    </div>
  )
}
export default Layout
