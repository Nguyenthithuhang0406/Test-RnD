/* eslint-disable */
import React, { useState } from 'react'
import SideBar from '../sideBar/SideBar';
import DraggableItem from '../DraggableItem/DraggableItem';

import './Home.scss';
import RightSideBar from '../RightSideBar/RightSideBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem } from '../../store/selectedItemSlice';

const Home = () => {
  const selectedItems = useSelector(state => state.selectedItem.selectedItems);
  const selectedItemEditStyle = useSelector(state => state.selectedItemEditStyle.selectedItemEditStyle);

  const dispatch = useDispatch();

  const handleSelectItem = (item) => {
    dispatch(addItem( item ));
  };

  const handleUpdateItem = (item) => {
    dispatch(updateItem(item ));
  };

  const handleUpdateStyle = (name, value) => {
    if (selectedItemEditStyle) {
      const updateItem = { ...selectedItemEditStyle, [name]: value };
      // console.log("updateItem:", updateItem);
      handleUpdateItem(updateItem);
    }
    // console.log("selectedItemEditStyle", selectedItemEditStyle);
  };

  const navigate = useNavigate();

  const handlePreview = () => {
    navigate('/preview');
  };
  return (
    <>
      <div className='top' style={{ width: "100%", height: "50px", display: "flex", justifyContent: "flex-end", alignItems: "center", borderBottom: "solid 1px black" }}>
        <button
          style={{ width: "100px", height: "40px", borderRadius: "12px", border: "none", backgroundColor: "aqua" }}
          onClick={handlePreview}
        >preview</button>
      </div>
      <div className='home-container'>
        <SideBar onSelectItem={handleSelectItem} />
        <div className='main-content'>
          {selectedItems && selectedItems?.map((item, index) => (
            <DraggableItem
              key={index}
              item={item}
              onUpdate={handleUpdateItem}
            />
          ))}
        </div>
        <RightSideBar selectedItemEditStyle={selectedItemEditStyle} onUpdateStyle={handleUpdateStyle} />
      </div>
    </>
  )
}

export default Home;