import { Box, Center, Heading, Link } from "@chakra-ui/react";
import routes from "../Constants/routes";

const Header = () => {
    return (
        <Center bg="brand.800" w="100vw" h="10vh" justifyContent="space-around">
            <Heading color='white'>LOGO</Heading>
            <Box display="flex" alignItems="center" gap="1rem" h="100%">
                <Link href={routes.HOME}>Home</Link>
                <Link href={routes.REPOSITORIO} target="_blank">Repositorio</Link>
            </Box>
        </Center>
    )
}

export default Header;