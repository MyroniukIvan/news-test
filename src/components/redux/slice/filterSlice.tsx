import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    blog: [],
    filteredSearch: [],

}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        FILTER_BY_SEARCH(state, action) {
            const {blog, search} = action.payload
            state.filteredSearch = blog.filter((blog: { title: string; summary: string }) => blog.title.toLowerCase().includes(search.toLowerCase()) || blog.summary.toLowerCase().includes(search.toLowerCase()))
        },
    }
})

export const {FILTER_BY_SEARCH} = filterSlice.actions
export const selectFilteredBlogs = (state: { filter: { filteredSearch: any } }) => state.filter.filteredSearch


export default filterSlice.reducer
