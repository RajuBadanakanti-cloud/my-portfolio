import Header from './components/Header'
import MobileHeader from './components/MobileHeader' 
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'
import Context from './components/Context'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => (
  <>
<div className='hidden md:block'>
  <Header/>
</div>
<div className='block md:hidden'>
  <MobileHeader/>
</div>
  <Home/> 
  <About/>
  <Projects/>
  <Context/>
  <Footer/>
  <ScrollToTop />
  </>
)

export default App
