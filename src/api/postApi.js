import { requestApi } from "api"

const rootUrl = process.env.REACT_APP_ROOT_URL

const postEp = rootUrl + "/posts"

const postAPI = {
  getPosts: async () => {
    const axiosData = {
      url: postEp,
      method: "GET",
      withCredentials: true,
    }

    const data = await requestApi(axiosData)
    return data
  },
}

export default postAPI
