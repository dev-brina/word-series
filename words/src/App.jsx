import WordBank from './components/WordBank'
import Header from './components/Header'
import Footer from './components/Footer'
import Game from './components/Game'


function App() {

  return (
    <>
      <div className="bg-slate-950 page-wrapper min-h-screen flex flex-col overflow-x-clip">
        <Header />
        <main className="flex-1 flex px-10 py-24">
          <Game />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
