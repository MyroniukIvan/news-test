import React, {useEffect, useState} from 'react';
import './SinglePage.scss'
import EastIcon from "@mui/icons-material/East";
import {Link} from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import useService from "../../hooks/useService";
import {Cards} from '../../components/types/types'



const SinglePage = (card: Cards) => {
    const {getBlogById}: any = useService();
    const {imageUrl, id, title, summary} = card;

    useEffect(() => {
        getBlogById(id);
    },[])

    return (
        <ErrorBoundary>
            <div className={'event'}>
                <img src={imageUrl}
                     className={'event_img'}
                     alt=""/>
                <div className={'event_card'}
                     key={id}>
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

export default SinglePage;