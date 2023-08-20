import authAPI from "api/authApi"
import { loginSuccess, requestPending } from "./userSlice"
import { toast } from "react-hot-toast"

export const loginAction = (formData) => async (dispatch) => {
  dispatch(requestPending())

  try {
    const { status, message, user } = await authAPI.loginUser(formData)

    status === "success" ? dispatch(loginSuccess(user)) : toast.error(message)
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    }
  }
}
