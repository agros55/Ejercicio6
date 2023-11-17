import { Box, Center, Heading, Link } from "@chakra-ui/react";

const Header = () => {
    return (
        <Center bg="red" w="100vw" h="10vh" justifyContent="space-around">
            <Heading>logo</Heading>
            <Box display="flex" alignItems="center" gap="2rem" h="100%">
                <Link href="/">Home</Link>
                <Link href="/aoe">About</Link>
            </Box>
        </Center>
    )
}

export default Header;