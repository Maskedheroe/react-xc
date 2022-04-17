import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface UserState {
  loading: boolean
  error: string | null
  token: string | null
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
}

export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    paramaters: {
      email: string
      password: string
    },
    thunkApi
  ) => {
    const { data } = await axios.post("http://123.56.149.216:8080/auth/login", {
      ...paramaters,
    })
    return data.token
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state) {
      state.token = null
      state.error = null
      state.loading = false
    }
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true
    },
    [signIn.fulfilled.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.token = action.payload
      state.loading = false
      state.error = ""
    },
    [signIn.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false
      state.error = action.payload
    },
  },
})
