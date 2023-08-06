import Leftbar from "./Leftbar"
import Navbar from "./Navbar"
import Rightbar from "./Rightbar"

const Layout = ({ children }) => {
  return (
    <div className="bg-[#F6F3F5]">
      <Navbar />
      <div className="flex">
        <Leftbar />
        <div className="flex-[8]">{children}</div>
        <Rightbar />
      </div>
    </div>
  )
}
export default Layout
