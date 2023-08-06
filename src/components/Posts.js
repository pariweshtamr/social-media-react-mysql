const { default: Post } = require("./Post")

const Posts = () => {
  // dummy data
  const posts = [
    {
      id: 1,
      name: "Pariwesh Tamrakar",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/15481199/pexels-photo-15481199/free-photo-of-yellow-cab-between-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, esse ipsam? Amet earum error beatae consequatur ut veritatis minima. Eveniet inventore fugit reprehenderit dolores provident quis, perspiciatis doloribus vel, magnam, ullam veritatis earum! Exercitationem, accusantium ea. Consectetur unde minima dolorem.",
      img: "https://images.pexels.com/photos/15176672/pexels-photo-15176672/free-photo-of-car-on-road-among-palm-trees-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 2,
      name: "Pariwesh Tamrakar",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/15481199/pexels-photo-15481199/free-photo-of-yellow-cab-between-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, esse ipsam? Amet earum error beatae consequatur ut veritatis minima.",
    },
  ]
  return (
    <div className="flex flex-col gap-[50px]">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
export default Posts
