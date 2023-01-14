import {useHttp} from "./useHttp";

const UseService = () => {
    const {request, error, loading} = useHttp()

    const getBlogById = async (id: number) => {
        let res = await request(`https://api.spaceflightnewsapi.net/v3/blogs/${id}`)
        return  _transformBlog(res)
    }
    const _transformBlog = (blog: { imageUrl: any; id?: number; title: any; summary: any; }) => {
        return {
            imageUrl: blog.imageUrl,
            id: blog.id,
            title: blog.title,
            summary: blog.summary || 'There is nothing for this blog...',
        }
    }

    return {getBlogById, error, loading}
};

export default UseService;
