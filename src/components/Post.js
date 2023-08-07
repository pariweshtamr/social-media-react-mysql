import {
  FavoriteBorder,
  Favorite,
  Textsms,
  Share,
  MoreHoriz,
} from "@mui/icons-material"
import { Link } from "react-router-dom"
import Comments from "./Comments"
import { useState } from "react"

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)
  const liked = false
  return (
    <div className="post-shadow bg-white rounded-[10px]">
      <div className="p-[20px] xs:p-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[10px] text-sm xs:text-xs">
            <img
              src={post.profilePic}
              alt="profile-pic"
              className="h-[40px] w-[40px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <Link to={`/profile/${post.userId}`}>
                <span className="font-[500]">{post.name}</span>
              </Link>
              <span className="text-xs">1 min ago</span>
            </div>
          </div>
          <MoreHoriz />
        </div>

        <div className="my-[20px]">
          <p className="xs:text-sm">{post.desc}</p>
          <img
            src={post.img}
            alt="post-img"
            className="w-full max-h-[500px] object-cover mt-[20px]"
          />
        </div>

        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[10px] cursor-pointer text-sm">
            {liked ? <Favorite /> : <FavoriteBorder />}7 likes
          </div>
          <div
            className="flex items-center gap-[10px] cursor-pointer text-sm"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <Textsms />
            12 Comments
          </div>
          <div className="flex items-center gap-[10px] cursor-pointer text-sm">
            <Share /> Share
          </div>
        </div>

        {commentOpen && <Comments />}
      </div>
    </div>
  )
}
export default Post
