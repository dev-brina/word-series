import { React, useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

const Word = (props) => {
  const [parent, setParent] = useState(null)

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform)
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="word-container touch-manipulation z-3 container bg-slate-400 hover:bg-slate-300 transition-colors duration-300 cursor-pointer border border-blue-800 p-4 w-36 rounded-md flex items-center justify-center text-black">
        {props.word}
    </div>
  )
}

export default Word