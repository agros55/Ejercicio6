import { extendTheme } from '@chakra-ui/react'

import Button from './Components/Button'
import Link from './Components/Link'
import Input from './Components/Input'
import { Colors as colors } from './Colors'

const theme = extendTheme({ colors, components: { Input, Link, Button } })

export default theme