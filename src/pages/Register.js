import authAPI from "api/authApi"
import { useFormik } from "formik"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { Link } from "react-router-dom"
import * as Yup from "yup"

const initialValues = {
  f_name: "",
  l_name: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
}

const Register = () => {
  const [err, setErr] = useState(null)
  const onSubmit = async (values) => {
    const { confirmPassword, ...rest } = values
    if (rest.password !== confirmPassword) {
      return toast.error("Passwords do not match!")
    }

    try {
      const { status, message } = await authAPI.registerUser(rest)
      if (status === "error") {
        return setErr(message)
      }
      toast.success(message)
    } catch (error) {
      console.log(error)
    }
  }
  const validationSchema = Yup.object({
    f_name: Yup.string().required("First name is required!"),
    l_name: Yup.string().required("Last name is required!"),
    email: Yup.string()
      .email("Invalid email format!")
      .required("Email is required!"),
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!"),
    confirmPassword: Yup.string().required("Confirm Password is required!"),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <div className="h-screen bg-[rgb(191,237,247)] flex items-center justify-center">
      <div className="flex bg-white w-[70%] rounded-[10px] min-h-[600px] overflow-hidden">
        <div className="flex-[1.2] p-[50px] flex flex-col gap-[50px] justify-center">
          <h1 className="text-[#555] font-bold text-3xl">Register</h1>
          <form
            className="flex flex-col gap-[30px]"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex justify-between">
              <div>
                {formik.touched.f_name && formik.errors.f_name && (
                  <div className="text-red-600 text-xs">
                    {formik.errors.f_name}
                  </div>
                )}
                <input
                  type="text"
                  placeholder="First name"
                  className="border-b border-b-solid border-b-lightgray p-[10px] outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.f_name}
                  name="f_name"
                />
              </div>

              <div>
                {formik.touched.l_name && formik.errors.l_name && (
                  <div className="text-red-600 text-xs">
                    {formik.errors.l_name}
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Last name"
                  className="border-b border-b-solid border-b-lightgray p-[10px] outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.l_name}
                  name="l_name"
                />
              </div>
            </div>

            <div className="w-full">
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600 text-xs">
                  {formik.errors.email}
                </div>
              )}
              <input
                type="email"
                placeholder="Email"
                className="border-b border-b-solid border-b-lightgray p-[10px] outline-none w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
              />
            </div>

            <div>
              {formik.touched.username && formik.errors.username && (
                <div className="text-red-600 text-xs">
                  {formik.errors.username}
                </div>
              )}
              <input
                type="text"
                placeholder="Username"
                className="border-b border-b-solid border-b-lightgray p-[10px] outline-none w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                name="username"
              />
            </div>

            <div className="flex justify-between">
              <div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-600 text-xs">
                    {formik.errors.password}
                  </div>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b border-b-solid border-b-lightgray p-[10px] outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  name="password"
                />
              </div>
              <div>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="text-red-600 text-xs">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border-b border-b-solid border-b-lightgray p-[10px] outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  name="confirmPassword"
                />
              </div>
            </div>

            {err && (
              <div className="text-sm text-gray-700 p-4 bg-red-300 rounded-lg">
                {err}
              </div>
            )}
            <button
              type="submit"
              className="w-1/2 p-[10px] bg-[#6ca6c7] text-white mt-[30px]"
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
            <button className="w-1/2 p-[10px] outline-none border-none bg-white text-[#4b9bc8] font-bold cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Register
