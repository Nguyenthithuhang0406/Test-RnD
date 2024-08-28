/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import './DraggableItem.scss';

const DraggableItem = ({ item, onUpdate }) => {
  const [position, setPosition] = useState({
    x: item.x || 0,
    y: item.y || 0,
    width: item.width || 200,
    height: item.height || 200,
  });

  const handleDragStop = (e, d) => {
    const { x, y } = d;
    setPosition(prev => ({
      ...prev,
      x,
      y,
    }));
    onUpdate({ ...item, x, y });
  };

  const handleResizeStop = (e, direction, ref, delta, position) => {
    const { width, height } = ref.style;
    setPosition(prev => ({
      ...prev,
      width,
      height,
      ...position,
    }));
    onUpdate({ ...item, width, height, ...position });
  };


  useEffect(() => {
    console.log("position", position)
  }, [position]);

  return (
    <Rnd
      size={{ width: position.width, height: position.height }}
      position={{ x: position.x, y: position.y }}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      bounds="parent"
      minWidth={100}
      minHeight={100}
      maxWidth={500}
      maxHeight={500}
    >
      <div className='header'> Drag me!!</div>
      <div className="draggable-item" style={{ width: '100%', height: '100%' }}>
        <div className="content" style={{ width: '100%', height: '100%' }}>
          {item.name}
        </div>
      </div>
    </Rnd>
  );
};

export default DraggableItem;
