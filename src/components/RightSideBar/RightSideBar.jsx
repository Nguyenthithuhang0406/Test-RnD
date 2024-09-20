/* eslint-disable */
import React, { useEffect, useState } from 'react'

const RightSideBar = ({ selectedItemEditStyle, onUpdateStyle }) => {
  console.log('selectedItemEditStyle', selectedItemEditStyle);
  const [style, setStyle] = useState({
    width: selectedItemEditStyle?.width || '200px',
    height: selectedItemEditStyle?.height || '200px',
    x: selectedItemEditStyle?.x || 300,
    y: selectedItemEditStyle?.y || 300
  });

  useEffect(() => {
    if (selectedItemEditStyle) {
      setStyle({
        width: selectedItemEditStyle?.width || '200px',
        height: selectedItemEditStyle?.height || '200px',
        x: selectedItemEditStyle?.x || 300,
        y: selectedItemEditStyle?.y || 300
      });
    }
  }, [selectedItemEditStyle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStyle(prev => ({
      ...prev,
      [name]: value
    }));
    onUpdateStyle(name, value);
  };

  return (
    <div className='style-editor' style={{width: "200px", height: "100vh", borderLeft: "solid 1px black", position: "absolute", zIndex: "10", top: "0", right: "0", backgroundColor: "darkgray"}}>
      <h3>Edit style</h3>
      <label>
        width:
        <input type='text'
          name='width'
          value={style.width}
          onChange={handleChange}
        />
      </label>
      
      <label>
        height:
        <input type='text'
          name='height'
          value={style.height}
          onChange={handleChange}
        />
      </label>
      
      <br/>
      <label>
        x:
        <input type='number'
          name='x'
          value={style.x}
          onChange={handleChange}
        />
      </label>
      
      <label>
        y:
        <input type='number'
          name='y'
          value={style.y}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default RightSideBar