import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import MobileHeader from './components/MobileHeader' 
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import NotFound from "./components/NotFound" // Not Found Page
import './App.css'

const App = () => (
  <>
    <div className='hidden md:block'>
      <Header/>
    </div>
    <div className='block md:hidden'>
      <MobileHeader/>
    </div>
  <main className="min-h-screen">
    <Routes>
      {/* Main Page */}
      <Route path="/" element={
        <>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </>
      }/>

      {/* certification Page */}
      <Route path="/certifications" element={<Certifications/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </main>

    <Footer/>22222221
    <ScrollToTop />
  </>
)

export default App