import * as React from 'react';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EastIcon from '@mui/icons-material/East';
import './Card.scss';
import {Link} from "react-router-dom";
import {FuseResultMatch} from "../../pages/Main/Main";


export default function RecipeReviewCard({title, updatedAt, summary, imageUrl, id, matches}
                                             : { updatedAt: string, summary: string, title: string, imageUrl: any, id: any, matches: FuseResultMatch[] }) {
    const [time, setTime] = useState<string>();

    useEffect(() => {
        setTime(() => {
            return updatedAt.toString().slice(0, 10);
        })
    }, [time, updatedAt])

    const renderText = (text: string, key: string) => {
        if (!matches) {
            return text.slice(0, 100)
        }
        const match = matches.find(match => match.key === key);
        if (match) {
            return match.indices.map(([from, to], i, arr) => {
                return (
                    <>
                        <span>{i === 0 && (text.slice(0, from) ?? '')}</span>
                        <span className="highlighted">
                            {text.slice(from, to) ?? ''}
                        </span>
                        <span>{arr[i + 1] ? (text.slice(to, arr[i + 1][0]) ?? '') : (text.slice(to, arr.length ?? ''))}</span>
                    </>
                )
            })
        } else {
            return text.slice(0, 100);
        }
    }

    return (
        <Card sx={{
            alignItems: 'center',
            maxWidth: 400,
            maxHeight: 550,
            minWidth: 230,
            minHeight: 530,
            textAlign: 'left'
        }}>
            <CardMedia
                sx={{objectFit: 'cover'}}
                component="img"
                height="217"
                width="400"
                image={imageUrl}
                alt="Event Image"
            />
            <CardContent>
                <div
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <CalendarTodayIcon
                        sx={{height: "20px", color: '#363636', opacity: '0.6'}}/>
                    <Typography
                        sx={{fontSize: "14px", paddingBlock: "10px"}} className={'card_header-block'}>
                        {time}
                    </Typography>
                </div>
                <h1 className={'card_content-header'}>
                    {title ? renderText(title, 'title') : 'There is no title for this article'}
                </h1>
                <Typography sx={{
                    fontSize: "16px",
                    lineHeight: "100%"
                }} variant="body2" color="text.main">
                    {summary ? renderText(summary, 'summary') : 'There is no description for this blog!'}
                </Typography>
                <Link to={`/event/${id}`}
                      className={'card_content-button'}>
                    Read More
                    <EastIcon sx={{width: 12, height: 15,}}/>
                </Link>
            </CardContent>
        </Card>
    );
}