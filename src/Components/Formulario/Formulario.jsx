import { Box } from '@chakra-ui/layout';
import { Center, Button, FormControl, FormLabel, Input, Text, Image, Heading, InputGroup, InputRightElement, InputAddon, InputRightAddon, InputLeftAddon } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { EmailIcon, LockIcon, PhoneIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Formulario = () => {
    const validaciones = Yup.object().shape({
        nombre: Yup.string()
            .min(5, 'Debe contener al menos 5 caracteres.')
            .max(50, 'Muy largo')
            .required('El nombre es requerido.'),
        apellido: Yup.string()
            .min(5, 'Debe contener al menos 5 caracteres.')
            .max(50, 'Muy largo')
            .required('El apellido es requerido.'),
        email: Yup.string()
            .email('Email invalido')
            .matches(/^[a-zA-z][a-zA-Z0-9-\.]{1,64}@[a-zA-Z0-9-]{1,64}((\.[a-zA-Z]{2,3})|(\.[a-zA-Z]{2,3}\.[a-zA-Z]{2,3}))$/, 'Email invalido')
            .required('El email es requerido.'),
        telefono: Yup.string()
            .matches(/^[0-9]{10}$/, 'El numero debe contener 10 digitos.')
            .required('El telefono es requerido.'),
        password: Yup.string()
            .min(6, 'Debe contener al menos 6 caracteres.')
            .max(50, 'Muy largo')
            .required('El password es requerido.'),
        confirmarPassword: Yup.string()
            .test('password-should-match', 'Las contraseñas no coinciden.', function (value) {
                return this.parent.password === value
            }),
    });

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [mostrarPassword, setMostrarPassword] = useState(false)
    const [mostrarPassword2, setMostrarPassword2] = useState(false)

    const [errorNombre, setErrorNombre] = useState(false)

    function alternarPassword() {
        setMostrarPassword(!mostrarPassword)
    }

    function alternarPassword2() {
        setMostrarPassword2(!mostrarPassword2)
    }

    return (
        <div>
            <Formik
                onSubmit={(values) => {
                    alert('Los datos han sido enviados con éxito.')
                }}
                validationSchema={validaciones}
                initialValues={{
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: '',
                    password: '',
                    confirmarPassword: '',
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Box w={{ base: "90vw", md: "50vw" }} mt={{ base: 5, md: 10 }} >
                        <Heading>Registro</Heading>
                        <FormControl pb={{ base: "15vh", md: "15vh" }}>
                            <form disabled={"disabled"} onSubmit={handleSubmit}>
                                {/* Campo para nombre */}

                                <Box mt={5} display="grid" gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={{ base: 0, md: 5 }}>
                                    <FormControl display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel >Nombre</FormLabel>
                                        <InputGroup borderRightRadius='full'>
                                            <Input
                                                variant={(errors.nombre && touched.nombre) ? 'error' : 'normal'}
                                                id='nombre'
                                                name='nombre'
                                                type='text'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.nombre}
                                            />
                                        </InputGroup>
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.nombre && touched.nombre && errors.nombre}</Text>
                                    </FormControl>

                                    {/* Campo para apellido */}
                                    <FormControl display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel >Apellido </FormLabel>
                                        <Input
                                            variant={(errors.apellido && touched.apellido) ? 'error' : 'normal'}
                                            id='apellido'
                                            name='apellido'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.apellido}
                                        />
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.apellido && touched.apellido && errors.apellido}</Text>
                                    </FormControl>
                                </Box>

                                <Box display="grid" gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={{ base: 0, md: 5 }}>
                                    {/* Campo para email */}
                                    <Box display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel>Email</FormLabel>
                                        <InputGroup>
                                            <InputLeftAddon><EmailIcon /></InputLeftAddon>
                                            <Input
                                                variant={(errors.email && touched.email) ? 'error' : 'normal'}
                                                id='email'
                                                name='email'
                                                type='text'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                        </InputGroup>
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.email && touched.email && errors.email}</Text>
                                    </Box>

                                    {/* Campo para telefono */}
                                    <Box display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel display="block">Teléfono</FormLabel>
                                        <InputGroup>
                                            <InputLeftAddon><PhoneIcon /></InputLeftAddon>
                                            <Input
                                                variant={(errors.telefono && touched.telefono) ? 'error' : 'normal'}
                                                id='telefono'
                                                name='telefono'
                                                type='number'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.telefono}
                                            />
                                        </InputGroup>
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.telefono && touched.telefono && errors.telefono}</Text>
                                    </Box>
                                </Box>

                                <Box display="grid" gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={{ base: 0, md: 5 }}>
                                    {/* Campo para password */}
                                    <Box display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup>
                                            <InputLeftAddon><LockIcon /></InputLeftAddon>
                                            <Input
                                                variant={(errors.password && touched.password) ? 'error' : 'normal'}
                                                id='password'
                                                name='password'
                                                type={mostrarPassword ? 'text' : 'password'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            <InputRightAddon
                                                w='fit-content'
                                                p={0}
                                            >
                                                <Button variant={'inputMD'} size={'input'} h='100%' onClick={alternarPassword}>
                                                    {mostrarPassword ? <ViewOffIcon /> : <ViewIcon />}
                                                </Button>
                                            </InputRightAddon>
                                        </InputGroup>

                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.password && touched.password && errors.password}</Text>
                                    </Box>

                                    {/* Campo para confirmar password */}
                                    <Box display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel>Confirmar password</FormLabel>
                                        <InputGroup>
                                            <InputLeftAddon><LockIcon /></InputLeftAddon>
                                            <Input
                                                variant={(errors.confirmarPassword && touched.confirmarPassword) ? 'error' : 'normal'}
                                                id='confirmarPassword'
                                                name='confirmarPassword'
                                                type={mostrarPassword2 ? 'text' : 'password'}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.confirmarPassword}
                                            />
                                            <InputRightAddon
                                                w='fit-content'
                                                p={0}
                                            >
                                                <Button variant={'inputMD'} size={'input'} h='100%' onClick={alternarPassword2}>
                                                    {mostrarPassword2 ? <ViewOffIcon /> : <ViewIcon />}
                                                </Button>
                                            </InputRightAddon>
                                        </InputGroup>
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.confirmarPassword && touched.confirmarPassword && errors.confirmarPassword}</Text>
                                    </Box>

                                </Box>
                                <br />

                                <Button type='submit'>Enviar</Button>

                            </form>
                        </FormControl>
                    </Box>
                )}
            </Formik>
        </div>
    )
}

export default Formulario