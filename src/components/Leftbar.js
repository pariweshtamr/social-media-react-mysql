import Friends from "assets/1.png"
import Groups from "assets/2.png"
import Market from "assets/3.png"
import Watch from "assets/4.png"
import Memories from "assets/5.png"
import Events from "assets/6.png"
import Gaming from "assets/7.png"
import Gallery from "assets/8.png"
import Videos from "assets/9.png"
import Messages from "assets/10.png"
import Tutorials from "assets/11.png"
import Courses from "assets/12.png"
import Fund from "assets/13.png"
const Leftbar = () => {
  return (
    <div className="flex-[2.5] sticky top-[50px] !h-[calc(100vh_-_50px)] overflow-scroll leftbar bg-white xs:hidden">
      <div className="p-[20px] text-sm">
        <div className="menu flex flex-col gap-[15px]">
          <div className="flex items-center gap-[10px] font-[500] text-sm">
            <img
              src=""
              alt="profile-img"
              className="w-[30px] h-[30px] rounded-[50%] object-cover"
            />
            <span>Pariwesh Tamrakar</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Friends} alt="icon" />
            <span>Friends</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Groups} alt="icon" />
            <span>Groups</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Market} alt="icon" />
            <span>Marketplace</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Watch} alt="icon" />
            <span>Watch</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Memories} alt="icon" />
            <span>Memories</span>
          </div>
        </div>

        <hr className="my-5 border-none h-[0.5px] bg-[lightgray]" />

        <div className="menu flex flex-col gap-[15px]">
          <span className="text-xs">Your shortcuts</span>

          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Events} alt="icon" />
            <span>Events</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Gaming} alt="icon" />
            <span>Gaming</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Gallery} alt="icon" />
            <span>Gallery</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Videos} alt="icon" />
            <span>Videos</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Messages} alt="icon" />
            <span>Messages</span>
          </div>
        </div>

        <hr className="my-5 border-none h-[0.5px] bg-[lightgray]" />

        <div className="menu flex flex-col gap-[15px]">
          <span className="text-xs">Others</span>

          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Fund} alt="icon" />
            <span>Fund</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Tutorials} alt="icon" />
            <span>Tutorials</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img className="w-[25px]" src={Courses} alt="icon" />
            <span>Coursesplace</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Leftbar
