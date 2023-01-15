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


export default function RecipeReviewCard({ title, updatedAt, summary, imageUrl,id}
                                             : {updatedAt: string, summary: string, title: string, imageUrl: any, id:any  }) {
    const [time, setTime] = useState<string>();

    useEffect(() => {
        setTime(() => {
            return updatedAt.toString().slice(0, 10);
        })
    }, [time, updatedAt])

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
                    {title ? `${title.slice(0, 100)}...` : 'There is no title for this article'}
                </h1>
                <Typography sx={{
                    fontSize: "16px",
                    lineHeight: "100%"
                }} variant="body2" color="text.main">
                    {summary ? `${summary.slice(0, 100)}...` : 'There is no description for this blog!'}
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