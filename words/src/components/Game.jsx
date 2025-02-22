import { React, useState } from 'react'
import WordBank from './WordBank'
import Answer from './Answer'
import { DndContext } from '@dnd-kit/core'
import AnswerSlot from './AnswerSlot'
import Word from './Word'

const WORDLIST = [
    {
        id: 0,
        word: "bird",
        parent: null
    },
    {
        id: 1,
        word: "wing",
        parent: null
    },
    {
        id: 2,
        word: "man",
        parent: null
    },
    {
        id: 3,
        word: "power",
        parent: null
    },
    {
        id: 4,
        word: "ball",
        parent: null
    }
]

const ANSWERLIST = [
    {
        id: 0,
        word: "bird",
        child: null
    },
    {
        id: 1,
        word: "wing",
        child: null
    },
    {
        id: 2,
        word: "man",
        child: null
    },
    {
        id: 3,
        word: "power",
        child: null
    },
    {
        id: 4,
        word: "ball",
        child: null
    }
]


const Game = () => {

    /* List of all words */
    /* Has to be state so that the parent property of each word can be modified */
    const [wordList, setWordList] = useState(WORDLIST)

    /* Words that appear in word bank */
    /* Should be all words where parent === null */
    const [wordBank, setWordBank] = useState(WORDLIST)

    const [answerList, setAnswerList] = useState(WORDLIST)

  return (
    <div className="flex flex-row md:flex-col w-full justify-between">
        <DndContext onDragEnd={handleDragEnd}>
            <WordBank>
                {wordBank.map((wordObj) => {
                    return <Word key={wordObj.id} id={wordObj.id} word={wordObj.word}/>
                })}
            </WordBank> 

            <div className="flex max-md:flex-col gap-2 justify-between">
                {answerList.map((answerObj) => {
                    return (
                    <AnswerSlot key={answerObj.id} id={answerObj.id} word={answerObj.word}>
                        { 
                        
                        answerObj.child
                            ? <Word key={wordList[answerObj.child].id} id={wordList[answerObj.child].id} word={wordList[answerObj.child].word} />
                            : '' 
                        }
                    </AnswerSlot>
                    )
                })}
                    
            </div>
        </DndContext>
    </div>
  )


  function handleDragEnd({active, over}) {
    /* Modify wordList so that parent of the active word is updated */
    console.log(`just dragged ${active.id} over ${over.id}`)
    setWordList(prevWordList => {
        const newWord = {
            id: active.id,
            word: prevWordList[active.id].word,
            parent: over ? over.id : null
        }
        console.log(`and now the new parent is ${newWord.parent}`)
        const updatedWordList = prevWordList.map((word) => 
            word.id === active.id ? newWord : word
        )
        console.log(`and now the object is updated to show that the parent is ${updatedWordList[active.id].parent}`)

        return updatedWordList
    })

    setAnswerList(prevAnswerList => {
        const newAnswer = {
            id: over.id,
            word: prevAnswerList[over.id].word,
            child: active ? active.id : null
        }
        console.log(`and now the new child is ${newAnswer.child}`)
        const updatedAnswerList = prevAnswerList.map((ans) => 
            ans.id === over.id ? newAnswer : ans
        )
        console.log(`and now the object is updated to show that the parent is ${updatedAnswerList[over.id].child}`)

        return updatedAnswerList
    })

    /* Modify wordBank so that dragged word is no longer in it */
    setWordBank(prevWordBank => {
        return wordList.filter((word) => !word.parent)
    })
}
}

export default Game