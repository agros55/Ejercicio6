import { Box } from '@chakra-ui/layout';
import { Center, Button, FormControl, FormLabel, Input, Text, Image, Heading } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';



const Form2 = () => {
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
                    console.log(values)
                    setIsSubmitting(true);
                    console.log(isSubmitting)
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
                                        <Input
                                            borderColor={(errors.nombre && touched.nombre) && "red"}
                                            _focus={{ borderColor: "#eff2f7" }}
                                            id='nombre'
                                            name='nombre'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nombre}
                                        />
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.nombre && touched.nombre && errors.nombre}</Text>
                                    </FormControl>

                                    {/* Campo para apellido */}
                                    <FormControl display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel >Apellido</FormLabel>
                                        <Input
                                            borderColor={(errors.apellido && touched.apellido) && "red"}
                                            _focus={{ borderColor: "#eff2f7" }}
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
                                        <Input
                                            borderColor={(errors.email && touched.email) && "red"}
                                            _focus={{ borderColor: "#eff2f7" }}
                                            id='email'
                                            name='email'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.email && touched.email && errors.email}</Text>
                                    </Box>

                                    {/* Campo para telefono */}
                                    <Box display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel display="block">Teléfono</FormLabel>
                                        <Input
                                            borderColor={(errors.telefono && touched.telefono) && "red"}
                                            _focus={{ borderColor: "#eff2f7" }}
                                            id='telefono'
                                            name='telefono'
                                            type='number'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.telefono}
                                        />
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.telefono && touched.telefono && errors.telefono}</Text>
                                    </Box>
                                </Box>

                                <Box display="grid" gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={{ base: 0, md: 5 }}>
                                    {/* Campo para password */}
                                    <Box display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel>Password</FormLabel>

                                        <Input
                                            borderColor={(errors.password && touched.password) && "red"}
                                            _focus={{ borderColor: "#eff2f7" }}
                                            id='password'
                                            name='password'
                                            type={mostrarPassword ? 'text' : 'password'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        <Button onClick={alternarPassword} pos="absolute" bottom={5} right={0} zIndex={10}><Image src={mostrarPassword ? "./invisible.png" : "./ojo.png"} height="90%" /></Button>
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.password && touched.password && errors.password}</Text>
                                    </Box>

                                    {/* Campo para confirmar password */}
                                    <Box display="flex" flexDir="column" pos="relative" pb={5}>
                                        <FormLabel>Confirmar password</FormLabel>
                                        <Input
                                            borderColor={(errors.confirmarPassword && touched.confirmarPassword) && "red"}
                                            _focus={{ borderColor: "#eff2f7" }}
                                            id='confirmarPassword'
                                            name='confirmarPassword'
                                            type={mostrarPassword2 ? 'text' : 'password'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmarPassword}
                                        />
                                        <Text fontSize={12} color="red" pos="absolute" bottom="0" right={0}>{errors.confirmarPassword && touched.confirmarPassword && errors.confirmarPassword}</Text>
                                        <Button onClick={alternarPassword2} pos="absolute" bottom={5} right={0} zIndex={10}><Image src={mostrarPassword2 ? "./invisible.png" : "./ojo.png"} height="90%" /></Button>
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

export default Form2