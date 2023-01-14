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


export default function RecipeReviewCard({title, updatedAt, summary, imageUrl}
                                             : { updatedAt: string, summary: string, title: string, imageUrl: any }) {
    const [time, setTime] = useState<string>();

    useEffect(() => {
        setTime(() => {
            return updatedAt.toString().slice(0, 10);
        })
    }, [time, updatedAt])

    return (
        <Card sx={{maxWidth: 400, maxHeight: 530, textAlign:'left'}}>
            <CardMedia
                sx={{objectFit: 'cover'}}
                component="img"
                height="217"
                width="400"
                image={imageUrl}
                alt="Event Image"
            />
            <CardContent
                sx={{padding: '20px'}}>
                <div
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <CalendarTodayIcon
                        sx={{height: "20px", color: '#363636', opacity: '0.6'}}/>
                    <Typography
                        sx={{fontSize: "14px", paddingBlock: '20px'}} className={'card_header-block'}>
                        {time}
                    </Typography>
                </div>
                <h1 className={'card_content-header'}>
                    {title}
                </h1>
                <Typography sx={{
                    fontSize: "16px",
                    lineHeight: "150%"
                }} variant="body2" color="text.main">
                    {summary ? `${summary.slice(0, 200)}...`  : 'There is no description for this blog!'}
                </Typography>
                <Link to={'/event'}
                      className={'card_content-button'}>
                    Read More
                    <EastIcon sx={{width: 12, height: 15,}}/>
                </Link>
            </CardContent>
        </Card>
    );
}