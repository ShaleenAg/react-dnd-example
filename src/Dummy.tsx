import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import type { CSSProperties, FC } from 'react';

import { ItemTypes } from './ItemTypes';
import { knightImage } from './knightImage';

const knightStyle: CSSProperties = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
};
const Dummy: FC = () => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.KNIGHT,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <>
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  );
};

export default Dummy