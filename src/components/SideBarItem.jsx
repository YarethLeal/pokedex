import React from 'react';

const SideBarItem = ({image,name,number}) => {
    return (
        <div className='sidebar-item'>
            <img src={image} alt={name+' icon'} />
            <p>{name}</p>
            <p>{number}</p>
        </div>
    );
};

export default SideBarItem;