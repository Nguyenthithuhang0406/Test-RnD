/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ResizableBox } from 'react-resizable';
import './DraggableItem.scss';

const ItemTypes = {
  BOX: 'box',
};

const DraggableItem = ({ item, onUpdate }) => {
  const [position, setPosition] = useState({
    x: item.x || 0,
    y: item.y || 0,
    width: item.width || 200,
    height: item.height || 200,
  });

  const [, ref] = useDrag({
    type: ItemTypes.BOX,
    item: { id: item.id, x: position.x, y: position.y },
    end: (draggedItem, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (offset) {
        const newX = Math.round(offset.x);
        const newY = Math.round(offset.y);
        setPosition((prev) => ({
          ...prev,
          x: newX,
          y: newY,
        }));
        onUpdate({ ...item, x: newX, y: newY });
      }
    },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    hover: (draggedItem, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const newX = Math.round(offset.x);
        const newY = Math.round(offset.y);
        setPosition((prev) => ({
          ...prev,
          x: newX,
          y: newY,
        }));
      }
    },
  });

  const handleResize = (e, { size, handle }) => {
    const { width, height } = size;
    let newPostsition = { ...position, width, height };

    switch (handle) {
      case 'n':
        newPostsition.y = position.y + position.height - height;
        newPostsition.height = height;
        break;
      case 'e':
        newPostsition.width = width;
        break;
      case 's':
        newPostsition.height = height;
        break;
      case 'w':
        newPostsition.x = position.x + position.width - width;
        newPostsition.width = width;
        break;
      case 'ne':
        newPostsition.y = position.y + position.height - height;
        newPostsition.height = height;
        newPostsition.width = width;
        break;
      case 'se':
        newPostsition.height = height;
        newPostsition.width = width;
        break;
      case 'sw':
        newPostsition.x = position.x + position.width - width;
        newPostsition.width = width;
        newPostsition.height = height;
        break;
      case 'nw':
        newPostsition.x = position.x + position.width - width;
        newPostsition.y = position.y + position.height - height;
        newPostsition.width = width;
        newPostsition.height = height;
        break;
      default:
        break;
    }

    setPosition(newPostsition);
    onUpdate({ ...item, x: newPostsition.x, y: newPostsition.y, width, height });
  };


  useEffect(() => {
    console.log('position', position);
  }, [position]);
  
  return (
    <div ref={drop}>
      <div
        ref={ref}
        className="draggable-item"
        style={{ width: position.width, height: position.height, transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <ResizableBox
          width={position.width}
          height={position.height}
          onResize={handleResize}
          minConstraints={[100, 100]}
          maxConstraints={[500, 500]}
          resizeHandles={['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw']}
        >
          <div className="content" style={{ width: '100%', height: '100%' }}>
            {item.name}
          </div>
        </ResizableBox>
      </div>
    </div>
  );
};

export default DraggableItem;
