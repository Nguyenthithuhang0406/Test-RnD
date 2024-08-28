/* eslint-disable */
import React, { useState } from 'react'
import SideBar from '../sideBar/SideBar';
import DraggableItem from '../DraggableItem/DraggableItem';

import './Home.scss';

const Home = () => {

  const [selectedItem, setSelectedItem] = useState([]);

  const handleSelectItem = (item) => {
    setSelectedItem((prevItems) => {
      let newY = 0;
      if(prevItems.length > 0) {
        const lastItem = prevItems[prevItems.length - 1];
        const lastItemHeight = parseInt(lastItem.height.replace('px', ''));
        //+50 de tao kc giua cac phan tu
        newY = lastItem.y + lastItemHeight + 50;
      }
      return [...prevItems, { ...item, x: 0, y: newY , width: 200, height: 200 }];
    });
  };

  const handleUpdateItem = (item) => {
    setSelectedItem(selectedItem.map(i => i.id === item.id ? { ...i, ...item } : i));
  };

  return (
    <div className='home-container'>
      <SideBar onSelectItem={handleSelectItem} />
      <div className='main-content'>
        {selectedItem && selectedItem?.map((item, index) => (
          <DraggableItem
            key={index}
            item={item}
            onUpdate={handleUpdateItem}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;