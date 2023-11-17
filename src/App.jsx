import { ChakraProvider as Chakra } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'

import Rutas from './Rutas';
import Footer from './Views/Footer';
import Header from './Views/Header';
import FormOne from './Components/Formulario/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Chakra>
      <Header />
      <FormOne />
      <Rutas />
      <Footer />
    </Chakra>

  )
}

export default App
