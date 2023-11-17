import { ChakraProvider as Chakra } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'

import Rutas from './Rutas';
import Footer from './Views/Footer';
import Header from './Views/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Chakra>
      <Header />
      <Rutas />
      <Footer />
    </Chakra>

  )
}

export default App
