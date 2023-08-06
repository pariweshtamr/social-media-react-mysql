import Posts from "components/Posts"
import Stories from "components/Stories"

const Home = () => {
  return (
    <div>
      <Stories />
      <div className="px-[20px]">
        <Posts />
      </div>
    </div>
  )
}
export default Home
