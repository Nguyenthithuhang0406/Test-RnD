/* eslint-disable */
import React, { useState } from 'react'
import SideBar from '../sideBar/SideBar';
import DraggableItem from '../DraggableItem/DraggableItem';

import './Home.scss';
import RightSideBar from '../RightSideBar/RightSideBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [selectedItem, setSelectedItem] = useState([]);

  const handleSelectItem = (item) => {
    setSelectedItem((prevItems) => {
      let newY = 0;
      if (prevItems.length > 0) {
        const lastItem = prevItems[prevItems.length - 1];
        const lastItemHeight = parseInt(lastItem.height.replace('px', ''));
        //+50 de tao kc giua cac phan tu
        newY = lastItem.y + lastItemHeight + 50;
      }
      let count = 0;
      prevItems.map(i => {
        if (i.name === item.name) {
          count++;
        }
      });
      return [...prevItems, { ...item, x: 0, y: newY, width: 200, height: 200, id: `${item.id} - ${count + 1}` }];
      // return [...prevItems, { ...item, x: 0, y: newY, width: 200, height: 200 }];
    });
  };

  const handleUpdateItem = (item) => {
    setSelectedItem(selectedItem.map(i => i.id === item.id ? { ...i, ...item } : i));
  };

  const handleUpdateStyle = (name, value) => {
    if (selectedItem) {
      const updateItem = { ...selectedItem, [name]: value };
      handleUpdateItem(updateItem);
    }
  };

  const navigate = useNavigate();

  const handlePreview = () => {
    navigate('/preview');
    localStorage.setItem('selectedItem', JSON.stringify(selectedItem));
    console.log("selectedItem", selectedItem);
  };
  return (
    <>
      <div className='top' style={{width: "100%", height: "50px", display: "flex", justifyContent: "flex-end", alignItems: "center", borderBottom: "solid 1px black"}}>
        <button
          style={{ width: "100px", height: "40px", borderRadius: "12px", border: "none", backgroundColor: "aqua" }}
          onClick={handlePreview}
        >preview</button>
      </div>
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
        <RightSideBar selectedItem={selectedItem} onUpdateStyle={handleUpdateStyle} />
      </div>
    </>
  )
}

export default Home;