import './App.css'
import Navbar from './components/Navbar'
import { Banner } from './components/Banner'
import Services from './components/Services'
import Whowe from './components/Whowe'
import Showcase from './components/Showcase'
import Process from './components/Process'
import ClientRiview from './components/ClientRiview'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Banner/>
      <Services />
      <Whowe />
      <Showcase />
      <Process />
      <ClientRiview />
      <Blog />
      <Footer />
    </>
  )
}

export default App
