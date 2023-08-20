import { requestApi } from "api"
const rootUrl = process.env.REACT_APP_ROOT_URL

const authEp = rootUrl + "/auth"

const authAPI = {
  registerUser: async (obj) => {
    const axiosData = {
      url: authEp + "/register",
      method: "POST",
      data: obj,
    }
    const data = await requestApi(axiosData)
    return data
  },

  loginUser: async (obj) => {
    const axiosData = {
      url: authEp + "/login",
      method: "POST",
      data: obj,
      withCredentials: true,
    }
    const data = await requestApi(axiosData)
    return data
  },
}

export default authAPI
