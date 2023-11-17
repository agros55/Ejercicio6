import { Center, Heading, Text } from "@chakra-ui/react";

export default function ErrorPage() {
    return (
        <Center flexDir="column" h="80vh">
            <Heading>Oops!</Heading>
            <Text>Pagina no encontrada.</Text>
        </Center>
    );
}