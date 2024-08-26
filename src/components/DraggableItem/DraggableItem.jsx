/* eslint-disable */
import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

import './DraggableItem.scss';
const DraggableItem = ({ item, onUpdate }) => {
  const [position, setPosition] = React.useState({
    x: item.x || 0,
    y: item.y || 0,
    width: item.width || 200,
    height: item.height || 200,
  });

  const handleStop = (e, data) => {
    const { x, y } = data;
    setPosition({ ...position, x, y });
    onUpdate({ ...item, x, y });
  }

  const handleResize = (e, { size }) => {
    const { width, height } = size;
    setPosition({ ...position, width, height });
    onUpdate({ ...item, width, height });
  };

  return (
    <Draggable position={{ x: position.x, y: position.y }} onStop={handleStop}>
      <ResizableBox
        width={position.width}
        height={position.height}
        onResize={handleResize}
        minConstraints={[100, 100]}
        maxConstraints={[500, 500]}
      >
        <div className="draggable-item">
          <div className="header">Drag me!</div>
          <div className="content">{item.name}</div>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default DraggableItem;
