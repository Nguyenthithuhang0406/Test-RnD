/* eslint-disable */
import React, { useState } from 'react'
import SideBar from '../sideBar/SideBar';
import DraggableItem from '../DraggableItem/DraggableItem';

import './Home.scss';

const Home = () => {

  const [selectedItem, setSelectedItem] = useState([]);
  const [items, setItems] = useState([]);

  const handleSelectItem = (item) => {
    setSelectedItem([...selectedItem, item]);
  };

  const handleUpdateItem = (item) => {
    setItems((prevItems) => {
      prevItems?.map((i) => 
        i.id === item.id ? {...i, ...item} : i
      )
    });
  };

  return (
    <div className='home-container'>
      <SideBar onSelectItem={handleSelectItem} />
      <div className='main-content'>
        {
          items.map((item) => (
            <DraggableItem
              key={item.id}
              item={item}
              onUpdate={handleUpdateItem}
            />
          ))
        }

        {selectedItem && selectedItem?.map((item) => (
          <DraggableItem
            key={item.id}
            item={item}
            onUpdate={handleUpdateItem}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;