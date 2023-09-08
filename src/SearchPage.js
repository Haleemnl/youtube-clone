import React from 'react'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

import './css/searchpage.css'
import TuneIcon from '@mui/icons-material/Tune';

const SearchPage = () => {
    return (
        <div className='searchpage'>

            <div className="searchpage-filter">

                <TuneIcon />
                <h2>FILTER</h2>
            </div>

            <hr />

            <ChannelRow

                image='/images/haleem-logo.jpeg'
                channel='Haleem Channel'
                verified
                subs='1.5m'
                noOfVideos={382}
                description='Be the best version of your self and do whats best for you!'

            />

            <hr />

            <VideoRow

                views='803k'
                subs='1.2m'
                description='There are 9 lessons in this Front End Development crash course.... '
                timestamp='10 months ago'
                channel='Nerjs lesson'
                title='React JS ultimate Tutorial - Basic to Advance'
                image='/images/youtube-thumbnail2.jpeg'

            />
            <VideoRow

                views='686k'
                subs='2m'
                description='Here to build from basic to Advanced....'
                timestamp='4 months ago'
                channel='haleem channel'
                title='ultimate react build course'
                image='/images/channel-row1.jpeg'

            />
            <VideoRow

                views='1.8m'
                subs='2m'
                description='Learn React with Redux Toolkit Full Tutorial for Beginners....'
                timestamp='9 months ago'
                channel='code freed'
                title='Open Source front-end'
                image='/images/channel-row2.jpeg'

            />
            <VideoRow

                views='102k'
                subs='800k'
                description='The existence of React Native makes React one of the most valuable skills to have...     '
                timestamp='1 month ago'
                channel='JavaScript Master'
                title='Build and Deploy a React Native App React Native Course Tutorial for Beginners...'
                image='/images/channel-row3.jpeg'

            />
            <VideoRow

                views='225K views'
                subs='1.2m'
                description='#ReactJSBasics #ReactJSForBeginners #WhatIsReactJS #ReactJSTutorial #ReactJS ...'
                timestamp='3 years ago'
                channel='Simplified js'
                title='What Is ReactJS? | ReactJS Basics | Learn ReactJS | ReactJS Tutorial For Beginners | Simplilearn
                '
                image='/images/channel-row4.jpeg'

            />
            <VideoRow

                views='94K '
                subs='2m'
                description='A list of the core concepts every React developer should know about...'
                timestamp='1 year ago'
                channel='Denniy codes'
                title='React JS Explained In 10 Minutes'
                image='/images/channel-row5.jpeg'

            />
        </div>
    )
}

export default SearchPage