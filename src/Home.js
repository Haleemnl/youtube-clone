import React from 'react'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import './css/home.css'


const Home = () => {
    return (
        <div className='Home'>


            <div className="app-page">
                <Sidebar />
                <RecommendedVideos />
            </div>


        </div>
    )
}

export default Home