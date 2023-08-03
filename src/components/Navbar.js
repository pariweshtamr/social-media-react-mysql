import {
  Home,
  DarkMode,
  GridView,
  Search,
  Person,
  Email,
  Notifications,
} from "@mui/icons-material"

import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-[10px_20px] h-[50px] border-b border-b-lightgray">
      <div className="flex items-center gap-[30px]">
        <Link to={"/"}>
          <span className="font-bold text-[20px] text-[#024172]">
            Social App.
          </span>
        </Link>
        <Home />
        <DarkMode />
        <GridView />

        <div className="flex items-center gap-[10px] border border-lightgray rounded-[5px] p-[5px]">
          <Search />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-[500px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-[20px]">
        <Person />
        <Email />
        <Notifications />
        <div className="flex items-center gap-[10px] font-[500] text-sm">
          <img
            src=""
            alt="profile-img"
            className="w-[30px] h-[30px] rounded-[50%] object-cover"
          />
          <span>Pariwesh Tamrakar</span>
        </div>
      </div>
    </div>
  )
}
export default Navbar
