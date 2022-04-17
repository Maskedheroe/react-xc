import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface ProductDetailState {
  loading: boolean
  error: string | null
  data: any
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
}

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkApi) => {
    // thunkApi.dispatch(productDetailSlice.actions.fetchStart())
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
    )
    return data
    // thunkApi.dispatch(productDetailSlice.actions.fetchSuccess(data))
    // thunkApi.dispatsch(productDetailSlice.actions.fetchFail(`${error}`))
  }
)

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      state.loading = true
    },
    [getProductDetail.fulfilled.type]: (state, action: PayloadAction<string | null>) => {
      state.data = action.payload
      state.loading = false
      state.error = ""
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.error = action.payload
    },
  
  }
})
