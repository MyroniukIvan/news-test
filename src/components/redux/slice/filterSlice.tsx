import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filteredSearch: [],
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        FILTER_BY_SEARCH(state, action) {
            const {blog} = action.payload
            state.filteredSearch = blog.filter(((blog: any) => blog === action.payload))
        },
    }
})

export const {FILTER_BY_SEARCH} = filterSlice.actions
export const selectFilteredBlogs = (state: { filter: { filteredSearch: any } }) => state.filter.filteredSearch


export default filterSlice.reducer
