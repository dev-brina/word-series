import React from 'react'
import { useDroppable } from '@dnd-kit/core';

const AnswerSlot = (props) => {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
      });
      let bgclass = isOver ? 'bg-cyan-900' : 'bg-cyan-700'
  return (
    <div className={`answer-slot text-slate-200 h-16 ${bgclass} border-cyan-950 border-4 w-38 rounded-md flex items-center justify-center`} ref={setNodeRef}>
      {props.children}
    </div>
  )
}

export default AnswerSlot