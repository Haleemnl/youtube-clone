import React from 'react'
import './css/sidebarRow.css'

const SidebarRow = ({ selected, Icon, title }) => {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>

            <Icon className='sidebarRow-icon ' />
            <p className='sidebarRow-title'>{title}</p>

        </div>
    )
}

export default SidebarRow

