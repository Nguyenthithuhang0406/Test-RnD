/* eslint-disable */
import React, { useEffect, useState } from 'react'
import SideBar from '../sideBar/SideBar';
import DraggableItem from '../DraggableItem/DraggableItem';

import './Home.scss';

const Home = () => {

  const [selectedItem, setSelectedItem] = useState([]);
  const [items, setItems] = useState([]);

  const handleSelectItem = (item) => {
    setSelectedItem((prevItems) => [...prevItems, { ...item, x: 0, y: 0, width: 200, height: 200 }]);
  };

  const handleUpdateItem = (item) => {
    // setItems((prevItems) => {
    //   prevItems?.map((i) => 
    //     i.id === item.id ? {...i, ...item} : i
    //   )
    // });

    setSelectedItem(selectedItem.map(i => i.id === item.id ? { ...i, ...item } : i));
  };

  useEffect(() => {
    console.log("selectedItem: ", selectedItem);
  }, [selectedItem]);

  return (
    <div className='home-container'>
      <SideBar onSelectItem={handleSelectItem} />
      <div className='main-content'>
        {
          items?.map((item) => (
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