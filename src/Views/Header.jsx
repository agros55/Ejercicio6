import { Box, Center, Heading, Link } from "@chakra-ui/react";

const Header = () => {
    return (
        <Center bg="red" w="100vw" h="10vh">
            <Heading>logo</Heading>
            <Box>
                <Link href="/">Home</Link>
                <Link href="/aoe">About</Link>
            </Box>
        </Center>
    )
}

export default Header;