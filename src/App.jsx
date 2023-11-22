import { ChakraProvider as Chakra } from '@chakra-ui/react'
import { useState } from 'react'

import Rutas from './Rutas';
import Footer from './Views/Footer';
import Header from './Views/Header';
import theme from './Theme/Theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Chakra theme={theme}>
      <Header />
      <Rutas />
      <Footer />
    </Chakra>

  )
}

export default App
