import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { Tooltip } from 'reactstrap';

const SidebarItems = ({ items, id }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    const subMenu = items.submenu;
    const HoverBorderColor = {
        borderColor: tooltipOpen == true ? '#EA1979' : ''
    };

    return (
        <>
            <div id={`DisabledAutoHideExample-${id}`} className="d-flex justify-content-center px-1 py-4" style={HoverBorderColor}>
                <Link to={items.link}>
                    <img src={items.image} alt="Home Icon" />
                </Link>
                { subMenu ?
                    <Tooltip placement="right" isOpen={tooltipOpen} autohide={false} target={`DisabledAutoHideExample-${id}`} toggle={toggle}>
                        <ul className="SubMenu">
                            {subMenu.map( menu => {
                                return <li><a href="#">{menu}</a></li>
                            }) }
                        </ul>
                    </Tooltip>
                : '' }
            </div>
        </>

        //<div className="d-flex justify-content-center px-1 py-4" style={HoverBorderColor}>
        //    <Link to='/'>
        //        <img src="" alt="Home Icon" />
        //    </Link>
        //    
        //    <Tooltip placement="right" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
        //        <ul className="SubMenu">
        //            <li>Prodcuts</li>
        //            <li>Linesheets</li>
        //            <li>Categories</li>
        //        </ul>
        //    </Tooltip>
        //</div>

    )
}

export default SidebarItems