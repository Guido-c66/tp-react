import { Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'
import Landing from './componentes/Landing/Landing'
import Cardlist from './componentes/Cardlist/Cardlist'
import Opiniones from './componentes/Opiniones/Opiniones'

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/personajes' element={<Cardlist />} />
          <Route path='opiniones' element={<Opiniones />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
