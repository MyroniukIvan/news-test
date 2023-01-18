import React, {useEffect, useState} from 'react';
import './SinglePage.scss'
import {ReactComponent as ArrowIcon} from "../../assets/arrow.svg";
import {Link, useParams} from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {useHttp} from "../../hooks/useHttp";
import Typography from "@mui/material/Typography";

interface Blog {
    title: string,
    imageUrl?: string,
    summary?: string
}

const SinglePage = () => {
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
                <div className={'event_card-wrapper'}>
                    <div className={'event_card'}
                         key={id}>
                        <div className={'event_card-container'}>
                            <Typography sx={{
                                textAlign: "center",
                                fontSize: "24px",
                                lineHeight: "29px",
                            }} className={'event_card-header'}>{singleBlog?.title}</Typography>
                            <Typography className={'event_card-text'}>{singleBlog?.summary}</Typography>
                        </div>
                    </div>
                    <Link to={'/'}
                          className={'event_card-button'}>
                        <ArrowIcon/>
                        <Typography sx={{
                            fontWeight: "700",
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#363636",
                            textAlign: "left",

                        }}>
                            Back to homepage
                        </Typography>
                    </Link>
                </div>
            </div>
        </ErrorBoundary>
    );
}

export default SinglePage;