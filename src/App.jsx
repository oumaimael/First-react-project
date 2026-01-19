import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Description from './components/Description'
import StudentTable from './components/student'
import {Description2} from './components/Description'
import Hero from './components/hero'
import InfoCard from './components/InfoCard'
import StateCom from './components/stateCom'

function App() {

  return (
    <>
      <Header />
      <Hero/>
      <Description/>
      <StudentTable/>
      <Description2 title="hello" name="dofo"/>
      <div className="infoCard">
        <InfoCard title="hello" description="dofo"/>
        <InfoCard title="hi" description="rofos"/>
        <InfoCard title="bonjour" description="lolol"/>
        <InfoCard title="hola" description="lulul"/>
      </div>
      <div className='count'>
        <StateCom count={1}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
