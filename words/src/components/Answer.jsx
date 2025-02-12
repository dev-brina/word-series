import React from 'react'
import AnswerSlot from './AnswerSlot'
import { DndContext } from '@dnd-kit/core'

const Answer = () => {
  return (
    <div className="answer-container flex w-full justify-between">
        <AnswerSlot id="answer-0"/>
    </div>
  )
}

export default Answer