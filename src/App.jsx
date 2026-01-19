import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Description from './components/Description'
import StudentTable from './components/student'
import {Description2} from './components/Description'
import Hero from './components/hero'
import InfoCard from './components/InfoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero/>
      <Description/>
      <StudentTable/>
      <Description2 title="hello" name="dofo"/>
  
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <InfoCard title="hello" description="dofo"/>
      <InfoCard title="hi" description="rofos"/>
      <Footer/>
    </>
  )
}

export default App
