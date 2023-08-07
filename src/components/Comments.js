const Comments = () => {
  // dummy data
  const comments = [
    {
      id: 1,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quis!",
      name: "Pariwesh Tamrakar",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/15481199/pexels-photo-15481199/free-photo-of-yellow-cab-between-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-[20px] m-[20px_0]">
        <img
          src={""}
          alt="profile-pic"
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="Write a comment"
          className="flex-[5] p-[5px_10px] border border-solid border-[#b2b2b2] xs:text-sm"
        />
        <button className="bg-[#024172] text-white p-[10px] text-sm cursor-pointer rounded-[5px] xs:p-[5px]">
          Comment
        </button>
      </div>

      {comments?.map((comment) => (
        <div
          className="flex justify-between my-[30px] gap-[20px]"
          key={comment.id}
        >
          <img
            src={comment.profilePic}
            alt="profile-pic"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div className="flex-[5] flex flex-col gap-[3px] items-start xs:text-sm">
            <span className="font-[500]">{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="flex-[1] flex justify-end text-gray-500 text-xs xs:text-[8px]">
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  )
}
export default Comments
