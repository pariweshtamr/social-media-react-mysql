import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="h-screen bg-[rgb(191,237,247)] flex items-center justify-center">
      <div className="flex bg-white w-1/2 rounded-[10px] min-h-[600px] overflow-hidden">
        <div className="flex-1 p-[50px] flex flex-col gap-[50px] justify-center">
          <h1 className="text-[#555] font-bold text-3xl">Register</h1>
          <form className="flex flex-col gap-[30px]">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-b-solid border-b-lightgray p-[20px_10px]"
            />
            <input
              type="text"
              placeholder="Username"
              className="border-b border-b-solid border-b-lightgray p-[20px_10px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-b-solid border-b-lightgray p-[20px_10px]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border-b border-b-solid border-b-lightgray p-[20px_10px]"
            />
            <button
              type="submit"
              className="w-1/2 p-[10px] bg-[#6ca6c7] text-white"
            >
              Register
            </button>
          </form>
        </div>

        <div className="flex-1 register-bg overflow-hidden p-[50px] flex flex-col gap-[30px] text-white">
          <h1 className="text-[100px] leading-[100px] font-bold">
            Social App.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            repellat accusantium quaerat doloremque obcaecati debitis numquam
            ipsam aut error voluptatem.
          </p>
          <span className="text-sm">Already have an account?</span>
          <Link to="/login">
            <button className="w-1/2 p-[10px] border-none bg-white text-[#4b9bc8] font-bold cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Register
