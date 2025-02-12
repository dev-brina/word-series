import React from 'react'
import { useDraggable } from '@dnd-kit/core'

const Word = (props) => {

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.word,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} id={props.word} className="word-container container bg-blue-300 hover:bg-blue-200 transition-colors duration-300 cursor-pointer border border-blue-800 p-4 w-36 rounded-md flex items-center justify-center">
        {props.word}
    </div>
  )
}

export default Word