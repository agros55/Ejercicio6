import { Box, Button, Image, Center, Heading, Text } from "@chakra-ui/react";
import FormOne from "../Components/Formulario/Formulario";

const Home = () => {
    return (
        <Center>
            <Box display="flex" flexDir="column" justifyContent="center">
                <Heading>Home</Heading>
                <Text>Pagina de inicio</Text>
                <Button>Mi boton</Button>
                <Image />
            </Box>
            <FormOne />
        </Center>
    )
}

export default Home;