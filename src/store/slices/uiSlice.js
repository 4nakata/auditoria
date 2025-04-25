import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSidebarShow: (state, action) => {
      state.sidebarShow = action.payload
    }
  }
})

export const { setSidebarShow } = uiSlice.actions
export default uiSlice.reducer