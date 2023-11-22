import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys)

const normal = definePartsStyle({
    field: {
        border: '1px solid',
        borderColor: 'brand.700',
        _focus: {
            borderColor: 'brand.900',
        }

    },
    addon: {
        border: '1px solid',
        borderColor: 'brand.800',
        bg: 'brand.700',
        color: 'white',
    },
})

const error = definePartsStyle({
    field: {
        border: '1px solid',
        borderColor: 'red',
    },
    addon: {
        border: '1px solid',
        borderColor: 'red',
    },
})

const Input = defineMultiStyleConfig({
    variants: { normal, error },
    defaultProps: {
        variant: 'normal'
    }
})

export default Input