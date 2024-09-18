/* eslint-disable*/
import React from 'react';

import './SideBar.scss';

const SideBar = ({ onSelectItem }) => {
  const items = [
    { id: '1', name: 'Card-Item'},
    { id: '2', name: 'Button-Item'},
    { id: '3', name: 'Image-Item'},
    { id: '4', name: 'Form'},
    { id: '5', name: 'Field'},
    { id: '6', name: 'Button'},
  ];

  return (
    <div className='sideBar-container'>
      <div className='sideBar-top'>
        <p><b>Item list</b></p>
      </div>
      <div className='sideBar-ListItem'>
        {items.map((item) => (
          <div
            key={item.id}
            className='sideBar-item'
            onClick={() => onSelectItem(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar;