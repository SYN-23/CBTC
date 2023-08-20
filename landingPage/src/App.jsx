import './App.css'
import Footer from './Components/Footer'
import MidPage from './Components/MidPage'
import Navbar from './Components/Navbar'
import TopImage from './Components/TopImage'

function App() {
  

  return (
    <div className='font-mono'>
   
     <TopImage></TopImage> 
     <Navbar></Navbar>
    
     <MidPage></MidPage>
     
     
     <Footer></Footer>
    </div>
  )
}

export default App
