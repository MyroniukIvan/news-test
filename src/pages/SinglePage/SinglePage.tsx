import React, {useEffect, useState} from 'react';
import './SinglePage.scss'
import EastIcon from "@mui/icons-material/East";
import {Link, useParams} from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {useHttp} from "../../hooks/useHttp";

interface Blog {
    title: string,
    imageUrl: string,
    summary: string
}

const SinglePage = ({title, imageUrl, summary}: any) => {
    const {id} = useParams()
    const [singleBlog, setSingleBlog] = useState<Blog>();
    const {request} = useHttp();

    useEffect(() => {
        request(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
            .then((response) => setSingleBlog(response))
    }, [request])


    return (
        <ErrorBoundary>
            <div className={'event'}>
                <img src={singleBlog?.imageUrl}
                     className={'event_img'}
                     alt=""/>
                <div className={'event_card'}
                     key={id}>
                    <h1 className={'event_card-header'}>{singleBlog?.title}</h1>
                    <p className={'event_card-text'}>{singleBlog?.summary}</p>
                </div>
                <Link to={'/'}
                      className={'event_card-button'}>
                    <EastIcon className={'event_card-icon'} sx={{width: 12, height: 15}}/>
                    Back to Home Page
                </Link>
            </div>
        </ErrorBoundary>
    );
}

export default SinglePage;