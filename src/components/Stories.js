const Stories = () => {
  const user = {
    img: "https://images.pexels.com/photos/15176672/pexels-photo-15176672/free-photo-of-car-on-road-among-palm-trees-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    name: "Pariwesh",
  }
  // dummy data
  const stories = [
    {
      id: 1,
      name: "Pariwesh Tamrakar",
      img: "https://images.pexels.com/photos/15176672/pexels-photo-15176672/free-photo-of-car-on-road-among-palm-trees-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 2,
      name: "Pariwesh Tamrakar",
      img: "https://images.pexels.com/photos/15176672/pexels-photo-15176672/free-photo-of-car-on-road-among-palm-trees-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 3,
      name: "Pariwesh Tamrakar",
      img: "https://images.pexels.com/photos/15176672/pexels-photo-15176672/free-photo-of-car-on-road-among-palm-trees-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
  ]

  return (
    <div className="flex gap-[10px] h-[280px] mb-[30px] p-[20px]">
      <div className="flex-1 rounded-[10px] overflow-hidden relative">
        <img src={user.img} alt="story-img" className="w-full h-[250px]" />
        <span className="absolute bottom-[10px] left-[10px] text-white text-sm font-[500]">
          {user.name}
        </span>
        <button className="absolute bottom-[40px] left-[10px] text-white bg-[#4b9bc8] rounded-full cursor-pointer w-[30px] h-[30px]">
          +
        </button>
      </div>
      {stories?.map((story) => (
        <div
          className="flex-1 rounded-[10px] overflow-hidden relative"
          key={story.id}
        >
          <img src={story.img} alt="story-img" className="w-full h-full" />
          <span className="absolute bottom-[10px] left-[10px] text-white text-sm font-[500]">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  )
}
export default Stories
