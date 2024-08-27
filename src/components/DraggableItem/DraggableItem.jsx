/* eslint-disable */
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

import './DraggableItem.scss';
const DraggableItem = ({ item, onUpdate }) => {

  const ref = useRef(null);

  const [position, setPosition] = useState({
    x: item.x || 0,
    y: item.y || 0,
    width: item.width || 200,
    height: item.height || 200,
  });

  const handleStop = (e, data) => {
    console.log("data: ", data);
    const { x, y } = data;
    setPosition({ ...position, x, y });
    onUpdate({ ...item, x, y });
  }

  const handleResize = (e, { size }) => {
    console.log("size: ", size);
    const { width, height } = size;
    setPosition({ ...position, width, height });
    onUpdate({ ...item, width, height });
  };

  return (
    <Draggable position={{ x: position.x, y: position.y }} onStop={handleStop} nodeRef={ref} >
      <div className="draggable-item" style={{ width: position.width + 'px', height: position.width + 'px' }}>
        <ResizableBox
          width={position.width}
          height={position.height}
          onResize={handleResize}
          minConstraints={[100, 100]}
          maxConstraints={[500, 500]}
          handleSize={[10, 10]}
          resizeHandles={['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw']}
        >
          <div className="content" ref={ref} style={{ width: '100%', height: '100%' }}>{item.name}</div>
        </ResizableBox>

      </div>
    </Draggable>
  );
};

export default DraggableItem;
