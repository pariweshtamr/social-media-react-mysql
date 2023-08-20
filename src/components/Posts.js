import { useQuery } from "@tanstack/react-query"
import postAPI from "api/postApi"
import Post from "./Post"

const Posts = () => {
  const { isLoading, error, data } = useQuery(["timelinePosts"], async () => {
    const { status, posts } = await postAPI.getPosts()
    if (status === "success") return posts
  })

  return (
    <div className="flex flex-col gap-[50px] pb-[30px]">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "Loading..."
        : data?.map((post) => <Post key={post.id} post={post} />)}
    </div>
  )
}
export default Posts
