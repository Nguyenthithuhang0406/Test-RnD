/* eslint-disable */
import React from 'react'
import Field from '../sideBar/items/field';
import Button from '../sideBar/items/button';
import Form from '../sideBar/items/form';

const Preview = () => {
  const components = JSON.parse(localStorage.getItem('selectedItem')) || [];
  return (
    <div className='preview-container'>
      {components.map((item, index) => (
        <div
          key={index}
          className='preview-item'
          style={{
            width: item.width,
            height: item.height,
            position: 'absolute',
            top: item.y,
            left: item.x,
          }}
        >
          {
            item.name === 'Form' ? (
              <Form />
            ) : item.name === 'Field' ? (
              <Field />
            ) : item.name === 'Button' ? (
              <Button />
            ) : (
              item.name
            )
          }
        </div>
      ))}
    </div>
  )
}

export default Preview