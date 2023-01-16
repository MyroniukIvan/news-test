import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const articlesApi = createApi({
    reducerPath: 'articlesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spaceflightnewsapi.net/v3/'}),
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => '/articles'
        })
    })
})

export const {useGetArticlesQuery} = articlesApi

