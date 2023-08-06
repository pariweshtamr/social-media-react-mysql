import {
  FacebookTwoTone,
  LinkedIn,
  Instagram,
  Twitter,
  Place,
  Language,
  Email,
  MoreVert,
} from "@mui/icons-material"
import Posts from "components/Posts"
const Profile = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <img
          src="https://images.pexels.com/photos/15481199/pexels-photo-15481199/free-photo-of-yellow-cab-between-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="profile-pic"
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/13246954/pexels-photo-13246954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cover-pic"
          className="w-[160px] h-[160px] rounded-full object-cover absolute left-0 right-0 m-auto top-[200px]"
        />
      </div>

      <div className="p-[0px_50px]">
        <div className="h-[250px] post-shadow rounded-b-[20px] bg-white p-[40px] flex items-center justify-between mb-[20px]">
          <div className="flex-1 flex gap-[10px]">
            <a href="www.facebook.com">
              <FacebookTwoTone />
            </a>
            <a href="www.facebook.com">
              <LinkedIn />
            </a>
            <a href="www.facebook.com">
              <Instagram />
            </a>
            <a href="www.facebook.com">
              <Twitter />
            </a>
          </div>

          <div className="flex-1 flex flex-col items-center gap-[16px]">
            <span className="text-[26px] font-500">Pariwesh Tamrakar</span>
            <div className="flex items-center justify-around gap-[40px] w-full">
              <div className="flex items-center">
                <Place /> <span className="text-xs">Australia</span>
              </div>
              <div className="flex items-center">
                <Language /> <span className="text-xs">tamrpariwesh.com</span>
              </div>
            </div>
            <button className="text-white bg-[#024172] rounded-[5px] cursor-pointer p-[5px_10px]">
              Follow
            </button>
          </div>

          <div className="flex-1 flex items-center justify-end gap-[10px]">
            <Email />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}
export default Profile
