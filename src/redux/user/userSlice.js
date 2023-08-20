const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  isFetching: false,
  user: {},
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, { payload }) => {
      state.isFetching = false
      state.user = payload
    },
  },
})

const { actions, reducer } = userSlice

export const { requestPending, loginSuccess } = actions
export default reducer
