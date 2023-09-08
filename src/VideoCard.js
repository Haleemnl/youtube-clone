import React from 'react'
import Avatar from '@mui/material/Avatar';
import './css/videoCard.css'
import { Link } from 'react-router-dom';
import { PlayCircle } from '@mui/icons-material';


const VideoCard = ({ image, title, channel, views, timestamps, channelImage, link }) => {
    return (
        <div className='videoCard'>


            <img className='videoCard-thumbnail' src={image} alt="" />

            <Link to={link}>
                <div className="play">
                    <PlayCircle className='playbtn' />
                    <p className='playtext'>Play</p>
                </div>
            </Link>
            <div className="videoCard-info">
                <Avatar
                    className='videoCard-Avatar'
                    alt={channel}
                    src={channelImage}
                />

                <div className="videoCard-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamps}</p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard