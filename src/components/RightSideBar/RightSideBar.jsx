/* eslint-disable */
import React from 'react'

const RightSideBar = ({ selectedItem, onUpdateStyle }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    onUpdateStyle(name, value)
  };

  return (
    <div className='style-editor' style={{width: "200px", height: "100vh", borderLeft: "solid 1px black"}}>
      <h3>Edit style</h3>
      <label>
        width:
        <input type='number'
          name='width'
          value={selectedItem.width}
          onChange={handleChange}
        />
      </label>
      
      <label>
        height:
        <input type='number'
          name='height'
          value={selectedItem.height}
          onChange={handleChange}
        />
      </label>
      
      <br/>
      <label>
        x:
        <input type='number'
          name='x'
          value={selectedItem.x}
          onChange={handleChange}
        />
      </label>
      
      <label>
        y:
        <input type='number'
          name='y'
          value={selectedItem.y}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default RightSideBar