import React from 'react';

const SideBarItem = ({ image, name, number }) => {
    return (
        <div className='sidebar-item'>
            <div>
                <img src={image} alt={name + ' icon'} />
                <p className='sidebar-text'>{name}</p>
                <p className='sidebar-number'>#{number}</p>
            </div>
        </div>
    );
};

export default SideBarItem;