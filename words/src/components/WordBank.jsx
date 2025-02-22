import React from 'react'
import Word from './Word'

const WordBank = (props) => {
  return (
    <div className="word-bank flex max-md:flex-col gap-8 justify-between items-center min-h-16">
        {props.children}
    </div>
  )
}

export default WordBank