import React from 'react';

import HomeIcon from '../assets/home.svg'
import Conversation from '../assets/conversation.svg'
import Cargo from '../assets/cargo.svg'
import SidebarItems from './SidebarItems/SidebarItems'

const Sidebar = () => {

    const sidebarData = [
        {
            image: HomeIcon,
            link: ''
        },
        {
            image: Conversation,
            link: '/category',
            submenu: [ 'Products', 'Linesheets','Categories' ]
        },
        {
            image: Cargo,
            link: '/category-products'
        }
    ]

    const SidebarStyle = {
        maxWidth: '130px',
        height: 'calc(100vh - 79px)',
        backgroundColor: '#f8f9fa'
    }

    return (
        <div id="Menu" className="d-flex flex-column py-4 border-right border-left" style={SidebarStyle}>
            {sidebarData.map( ( data, i ) => {
                return <SidebarItems key={i} items={data} id={i} />
            })}
            
        </div>
    );
}

export default Sidebar;