import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface shoppingCartState {
  loading: boolean
  error: string | null
  item: any[]
}

const initialState: shoppingCartState = {
  loading: true,
  error: null,
  item: [],
}

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/shoppingCart`,
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    )
    return data.shoppingCartItems
  }
)

export const shoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {
      state.loading = true
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.item = action.payload
      state.loading = false
      state.error = ""
    },
    [getShoppingCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
  
  }
})
