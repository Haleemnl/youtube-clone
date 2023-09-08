import React from 'react'
import './css/channelRow.css'
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelRow = ({ image, channel, verified, subs, noOfVideos, description }) => {

    return (
        <div className='channelRow'>

            <Avatar className='channelRow-logo' alt={channel} src={image} />

            <div className="channelRow-text">

                <h4>{channel} {verified && <CheckCircleIcon />}</h4>
                <p>{subs} subscribers . {noOfVideos} Videos</p>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default ChannelRow