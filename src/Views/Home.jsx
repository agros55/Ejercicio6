import { Box, Button, Image, Center, Heading, Text } from "@chakra-ui/react";

const Home = () => {
    return (
        <Center>
            <Box display="flex" flexDir="column" justifyContent="center">
                <Heading>Home</Heading>
                <Text>Pagina de inicio</Text>
                <Button>Mi boton</Button>
                <Image />
            </Box>
        </Center>
    )
}

export default Home;