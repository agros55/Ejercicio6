import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'base', // <-- border radius is same for all variants and sizes
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
        input: {
            fontSize: '4xl',
            px: 1,
            borderLeftRadius: '0',
        }

    },
    variants: {
        outline: {
            color: 'purple.100',
            borderColor: 'brand.700',
            _hover: {
                bg: 'brand.700',
                color: 'white',
            }
        },
        solid: {
            bg: 'brand.800',
            color: 'white',
            _hover: {
                bg: 'brand.700',
                borderColor: 'brand.700',
                transform: 'scale(1.1)',
            }
        },
        inputBase: {
            color: 'purple.100',
            borderColor: 'brand.700',
            _hover: {
                bg: 'brand.700',
                color: 'white',
            }
        },
        inputMD: {
            bg: 'brand.700',
            color: 'white',
            _hover: {
                bg: 'purple.100',
                borderColor: 'brand.700',
                color: 'brand.800',
            }
        }
    },
    defaultProps: {
        size: 'md',
        variant: 'solid',
    },
})

export default Button