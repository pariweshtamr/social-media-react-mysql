const { requestApi } = require("api")

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
}

export default authAPI
