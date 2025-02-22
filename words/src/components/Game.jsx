import { React, useState } from 'react'
import WordBank from './WordBank'
import Answer from './Answer'
import { DndContext } from '@dnd-kit/core'
import AnswerSlot from './AnswerSlot'
import Word from './Word'

const WORDS = [
    {id: '0', word: "Bird"},
    {id: '1', word: "Wing"},
    {id: '2', word: "Man"},
    {id: '3', word: "Power"},
    {id: '4', word: "Ball"}
]


const Game = () => {
    const [parent, setParent] = useState(null)

    const [dictionary, setDictionary] = useState({
        0: null,
        1: null,
        2: null,
        3: null,
        4: null
    })

    const draggable = (
        <>
            <Word id={WORDS[0].word} word={WORDS[0].word } />
        </>
    )

  return (
    <div className="flex flex-col w-full justify-between">
        <DndContext onDragEnd={handleDragEnd}>
            <WordBank>
                { !parent ? draggable : null}
            </WordBank> 

            { console.log('parent is: ' + parent) }
            <div className="flex flex-wrap gap-2 justify-between">
                {WORDS.map((word) => (
                    <AnswerSlot key={word.id} id={word.id} word={word.word}>
                        {parent === word.id ? draggable : ''}
                    </AnswerSlot>
                ))}
                    
            </div>
        </DndContext>
    </div>
  )


  function handleDragEnd({over}) {
    setParent(over ? over.id : null);
    console.log(parent)
  }
}

export default Game