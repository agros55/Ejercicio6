import { defineStyleConfig } from '@chakra-ui/react'

const Link = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textDecoration: 'none',
        //borderRadius: 'base',
        border: '2px solid',
        borderColor: 'brand.700',
        _hover: {
            textDecoration: 'none',
        }
    },
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 3,
        },
        md: {
            fontSize: 'md',
            px: 6,
            py: 4,
        },
    },
    variants: {
        outline: {
            color: 'purple.100',
            borderColor: 'brand.700',
            transform: 'skew(-15deg)',
            _hover: {
                bg: 'brand.700',
                color: 'white',
            }
        },
        solid: {
            bg: 'brand.700',
            color: 'white',
            transform: 'skew(-15deg)',
            _hover: {
                bg: 'purple.100',
                borderColor: 'brand.700',
                color: 'brand.800',
            }
        },
    },
    defaultProps: {
        size: {
            base: 'sm',
            md: 'md'
        },
        variant: {
            base: 'outline',
            md: 'solid'
        },
    },
})

export default Link