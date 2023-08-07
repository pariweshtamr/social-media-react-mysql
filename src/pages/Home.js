import Posts from "components/Posts"
import Stories from "components/Stories"

const Home = () => {
  return (
    <div className="px-[20px] xs:px-0 md:p-0">
      <Stories />
      <div className="px-[20px] xs:px-[10px]">
        <Posts />
      </div>
    </div>
  )
}
export default Home
