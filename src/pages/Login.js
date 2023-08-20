import { useFormik } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginAction } from "redux/user/userAction"
import { useEffect } from "react"

const initialValues = {
  username: "",
  password: "",
}

const Login = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.id) {
      navigate("/")
    }
  }, [user.id, navigate])

  const onSubmit = (values) => {
    dispatch(loginAction(values))
  }

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!"),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })
  return (
    <div className="h-screen w-screen bg-[rgb(191,237,247)] flex items-center justify-center">
      <div className="flex bg-white w-[70%] rounded-[10px] min-h-[600px] overflow-hidden">
        <div className="flex-1 login-bg p-[50px] flex flex-col gap-[30px] text-white">
          <h1 className="text-[100px] leading-[100px] font-bold">
            Hello World.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            repellat accusantium quaerat doloremque obcaecati debitis numquam
            ipsam aut error voluptatem.
          </p>
          <span className="text-sm">Don&apos;t have an account?</span>
          <Link to="/register">
            <button className="w-1/2 p-[10px] border-none bg-white text-[#4b9bc8] font-bold cursor-pointer">
              Register
            </button>
          </Link>
        </div>

        <div className="flex-[1.2] p-[50px] flex flex-col gap-[50px] justify-center">
          <h1 className="text-[#555] font-bold text-3xl">Login</h1>
          <form
            className="flex flex-col gap-[30px]"
            onSubmit={formik.handleSubmit}
          >
            <input
              type="text"
              placeholder="Username"
              className="border-b border-b-solid border-b-lightgray p-[20px_10px]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="username"
              value={formik.values.username}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-b-solid border-b-lightgray p-[20px_10px]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              value={formik.values.password}
            />
            <button
              type="submit"
              className="w-1/2 p-[10px] bg-[#6ca6c7] text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
