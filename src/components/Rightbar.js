const Rightbar = () => {
  return (
    <div className="rightbar flex-[4.2] sticky top-[70px] !h-[calc(100vh_-_70px)] overflow-scroll">
      <div className="p-[20px] text-sm">
        <div className="custom-shadow p-[15px] mb-[15px]">
          <span className="text-gray-500">Suggestions for you</span>
          <div className="flex justify-between items-center m-[15px_0]">
            <div className="flex items-center gap-[15px] text-xs">
              <img
                src=""
                alt="user"
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              <span className="font-[500]">Pariwesh Tamrakar</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <button className="cursor-pointer p-[5px] text-white bg-[#024172]">
                Follow
              </button>
              <button className="cursor-pointer p-[5px] text-white bg-[#F24C62]">
                Dismiss
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center m-[15px_0]">
            <div className="flex items-center gap-[15px] text-xs">
              <img
                src=""
                alt="user"
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              <span className="font-[500]">Pariwesh Tamrakar</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <button className="cursor-pointer p-[5px] text-white bg-[#024172]">
                Follow
              </button>
              <button className="cursor-pointer p-[5px] text-white bg-[#F24C62]">
                Dismiss
              </button>
            </div>
          </div>
        </div>

        <div className="custom-shadow p-[15px] mb-[15px]">
          <span className="text-gray-500">Latest activities</span>
          <div className="flex justify-between items-center m-[15px_0]">
            <div className="flex items-center gap-[15px] text-[11px]">
              <img
                src=""
                alt="user"
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              <p>
                <span className="font-[500] mr-2">Pariwesh Tamrakar</span>
                <span className="text-[gray]">
                  changed their profile picture
                </span>
              </p>
            </div>
            <span className="text-[11px] text-[#555]">1 min ago</span>
          </div>
        </div>

        <div className="custom-shadow p-[15px] mb-[15px]">
          <span className="text-gray-500">Online Users</span>
          <div className="flex justify-between items-center m-[15px_0]">
            <div className="flex items-center gap-[15px] text-[11px] relative">
              <img
                src=""
                alt="user"
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              <div className="w-[10px] h-[10px] rounded-full bg-[limegreen] absolute top-0 left-[30px]" />
              <span className="font-[500]">Pariwesh Tamrakar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rightbar
