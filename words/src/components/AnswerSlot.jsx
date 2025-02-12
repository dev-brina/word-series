import React from 'react'
import { useDroppable } from '@dnd-kit/core';

const AnswerSlot = (props) => {
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
      });
      const style = {
        background: isOver ? 'green' : undefined,
      };
  return (
    <div className="answerSlot text-slate-200 w-36 h-20 bg-slate-50" ref={setNodeRef} style={style}>
    
    </div>
    
  )
}

export default AnswerSlot