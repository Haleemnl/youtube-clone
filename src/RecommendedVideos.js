import React from 'react'
import './css/recommendedvideos.css'
import VideoCard from './VideoCard'

const RecommendedVideos = () => {
    return (
        <div className='recommendedvideos'>
            <h1>Recommended</h1>

            <div className="recommendedVideos-videos">

                <VideoCard
                    title='Lionel Messi and Kylian Mbappe Showing Their Skills in 2023'
                    views='2.3m Views'
                    timestamps='7 months ago'
                    channelImage='/images/haleem-logo.webp'
                    channel='Football punks'
                    image='./images/youtube-thumbnail1.webp'
                    link='https://youtu.be/haYYtJk7obQ'
                />
                <VideoCard
                    title='React js crash Course in 2022'
                    views='456k Views'
                    timestamps='1 Year ago'
                    channelImage='./images/channels_profile 2.webp'
                    channel='react devs'
                    image='./images/youtube-thumbnail2.webp'
                    link='https://youtu.be/QFaFIcGhPoM?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3'
                />
                <VideoCard
                    title='cool electronic devices using home made '
                    views='109k Views'
                    timestamps='2 years ago'
                    channelImage='./images/channels_profile 3.webp'
                    channel='Lets Build it'
                    image='./images/youtube-thumbnail3.webp'
                    link='https://youtu.be/3NtUc30WsdU'
                />
                <VideoCard
                    title='Understanding Brenollis equation'
                    views='5m Views'
                    timestamps='5 Years ago'
                    channelImage='./images/channels_profile 4.webp'
                    channel='Physics guru'
                    image='./images/youtube-thumbnail4.webp'
                    link='https://youtu.be/DW4rItB20h4'
                />
                <VideoCard
                    title='Why Socrates Hated Democracy'
                    views='540k Views'
                    timestamps='10 Months ago'
                    channelImage='./images/channels_profile 5.webp'
                    channel='Law suites'
                    image='./images/youtube-thumbnail5.webp'
                    link='https://youtu.be/fLJBzhcSWTk'
                />
                <VideoCard
                    title='Latest 2023 Movie Trailers'
                    views='2.3m Views'
                    timestamps='2 Monthss ago'
                    channelImage='./images/channels_profile 6.webp'
                    channel=' Movie Rush'
                    image='./images/youtube-thumbnail6.webp'
                    link='https://youtu.be/A-dZqyPn1no'
                />
                <VideoCard
                    title='Transformer 2023 Movie'
                    views='10m Views'
                    timestamps='4 Monthss ago'
                    channelImage='./images/channels_profile 7.webp'
                    channel='Trailer movies'
                    image='./images/youtube-thumbnail7.webp'
                    link='https://youtu.be/itnqEauWQZM'
                />
                <VideoCard
                    title='How to understand programs'
                    views='3m Views'
                    timestamps='11 Months ago'
                    channelImage='./images/channels_profile 8.webp'
                    channel='Computer Specs'
                    image='./images/youtube-thumbnail8.webp'
                    link='https://youtu.be/bJzb-RuUcMU'
                />
                <VideoCard
                    title='Lionel Messi 2023 Best Moments'
                    views='15m Views'
                    timestamps='10 Months ago'
                    channelImage='./images/channels_profile 4.webp'
                    channel='Soccer Bros.'
                    image='./images/youtube-thumbnail9.webp'
                    link='https://youtu.be/Asew1lQNqmM'
                />


            </div>
        </div>
    )
}

export default RecommendedVideos