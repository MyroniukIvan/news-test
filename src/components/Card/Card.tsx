import * as React from 'react';
import {Link} from "react-router-dom";
import moment from "moment";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {ReactComponent as EastIcon} from "../../assets/arrow.svg";
import {FuseResultMatch} from "../../pages/Main/Main";
import {ReactComponent as CalendarTodayIcon} from '../../assets/calendar.svg';
import './Card.scss';

const TEXT_LIMIT = 100;
export default function RecipeReviewCard(
    {title, updatedAt, summary, imageUrl, id, matches}:
        { updatedAt: string, summary: string, title: string, imageUrl: any, id: any, matches: FuseResultMatch[] }) {

    const renderText = (text: string, key: string) => {
        if (!matches) {
            return truncateText(text)
        }
        const match = matches.find(match => match.key === key);
        if (match) {
            return match.indices.map(([from, to], i, arr) => {
                return (
                    <>
                        <span>
                            {i === 0 && (text.slice(0, from) ?? '')}
                        </span>
                        <span className="highlighted">
                            {text.slice(from, to) ?? ''}
                        </span>
                        <span>
                            {arr[i + 1] ? (text.slice(to, arr[i + 1][0]) ?? '') : (text.slice(to, arr.length ?? ''))}
                        </span>
                    </>
                )
            })
        } else {
            return text.slice(0, 100);
        }
    }

    const truncateText = (str: string) => {
        return str.length > TEXT_LIMIT ? `${str.slice(0, TEXT_LIMIT)}` + '...' : str;
    }

    return (
        <Card sx={{
            alignItems: 'center',
            width: 400,
            height: 530,
            minWidth: 230,
            textAlign: 'left'
        }}>
            <Link to={`/event/${id}`}>

                <CardMedia
                    sx={{objectFit: 'cover'}}
                    component="img"
                    height="217"
                    width="400"
                    image={imageUrl}
                    alt="Event Image"/>
                <CardContent>
                    <div className={"card_header-wrapper"}>
                        <CalendarTodayIcon className={'card_header-icon'}/>
                        <Typography
                            sx={{fontSize: "14px", paddingBlock: "10px"}} className={'card_header-block'}>
                            {moment(updatedAt).format("MMMM Do, YYYY")}
                        </Typography>
                    </div>
                    <div className={'card_content-header'}>
                        <Typography sx={{
                            fontStyle: "normal",
                            fontSize: "24px",
                            lineHeight: "29px",}}>
                            {title ? renderText(title, 'title') : 'There is no title for this article'}
                        </Typography>
                    </div>
                    <Typography sx={{
                        height: "96px",
                        fontSize: "16px",
                        width: '100%',
                        lineHeight: "150%",
                    }} variant="body2" color="text.main">
                        {summary ? renderText(summary, 'summary') : 'There is no description for this blog!'}
                    </Typography>
                    <div className={'card_content-button'}>
                        <Typography sx={{fontWeight: 700, fontSize: 16,}}>Read more</Typography>
                        <EastIcon className={'arrow-icon'}/>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
