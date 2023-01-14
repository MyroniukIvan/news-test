import React, {useEffect, useState} from 'react';
import './EventPage.scss'
import EastIcon from "@mui/icons-material/East";
import {Link} from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import useService from "../../hooks/useService";

const EventPage = ({imageUrl, title, summary}: any) => {
    const [blog, setBlog] = useState([]);
    const {getBlogById} = useService();

    const updateBlog = () => {

        // @ts-ignore
        getBlogById().then((data) => setBlog(data)).then((id) => console.log(id))
    }

    useEffect(() => {
        updateBlog()
    }, [])

    return (
        <ErrorBoundary>
            <div className={'event'}>
                <img src={imageUrl}
                     className={'event_img'}
                     alt=""/>
                <div className={'event_card'}>
                    <h1 className={'event_card-header'}>{title}</h1>
                    <p className={'event_card-text'}>{summary}</p>
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

export default EventPage;