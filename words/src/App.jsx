import { useState } from 'react'
import WordBank from './components/WordBank'
import Header from './components/Header'
import Footer from './components/Footer'
import Answer from './components/Answer'
import { DndContext } from '@dnd-kit/core'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-slate-900 page-wrapper min-h-screen flex flex-col">
        <Header />
        <main className="mb-auto p-6">
          <DndContext>
            <WordBank />
            <Answer />
          </DndContext>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
