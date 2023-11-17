import { Box } from '@chakra-ui/layout';
import { Center, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';



const FormOne = () => {
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
            .matches(/[0-9]/, '-Un numero.')
            .matches(/[a-z]/, '-Una minuscula.')
            .matches(/[A-Z]/, '-Una Mayuscula.')
            .required('El password es requerido.'),
        confirmarPassword: Yup.string()
            .test('password-should-match', 'Las contraseñas no coinciden.', function (value) {
                return this.parent.password === value
            }),
    });

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [mostrarPassword, setMostrarPassword] = useState(false)

    function alternarPassword() {
        setMostrarPassword(!mostrarPassword)
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
                    <Box w="50vw" p="50px">
                        <FormControl >
                            <form disabled={"disabled"} onSubmit={handleSubmit}>
                                {/* Campo para nombre */}
                                <Box display="flex" justifyContent="space-between">
                                    <FormLabel >Nombre</FormLabel>
                                    <Input w="80%"
                                        id='nombre'
                                        name='nombre'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nombre}
                                    />
                                </Box>
                                <Text textAlign="right">{errors.nombre && touched.nombre && errors.nombre}</Text>

                                {/* Campo para apellido */}
                                <Box display="flex" justifyContent="space-between">
                                    <FormLabel >Apellido</FormLabel>
                                    <Input w="80%"
                                        id='apellido'
                                        name='apellido'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.apellido}
                                    />
                                </Box>
                                <Text textAlign="right">{errors.apellido && touched.apellido && errors.apellido}</Text>

                                {/* Campo para email */}
                                <Box display="flex" justifyContent="space-between">
                                    <FormLabel>Email</FormLabel>
                                    <Input w="80%"
                                        id='email'
                                        name='email'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </Box>
                                <Text textAlign="right">{errors.email && touched.email && errors.email}</Text>

                                {/* Campo para telefono */}
                                <Box display="flex" justifyContent="space-between">
                                    <FormLabel>Teléfono</FormLabel>
                                    <Input w="80%"
                                        id='telefono'
                                        name='telefono'
                                        type='number'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.telefono}
                                    />
                                </Box>
                                <Text textAlign="right">{errors.telefono && touched.telefono && errors.telefono}</Text>

                                {/* Campo para password */}
                                <Box display="flex" justifyContent="space-between">
                                    <FormLabel>Password</FormLabel>
                                    <Input w="80%"
                                        id='password'
                                        name='password'
                                        type={mostrarPassword ? 'text' : 'password'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <Button onClick={alternarPassword} pos="absolute" right={0} zIndex={10}>Ver password</Button>
                                </Box>
                                <Text textAlign="right">{errors.password && touched.password && errors.password}</Text>

                                {/* Campo para confirmar password */}
                                <Box display="flex" justifyContent="space-between">
                                    <FormLabel>Confirmar password</FormLabel>
                                    <Input w="80%"
                                        id='confirmarPassword'
                                        name='confirmarPassword'
                                        type='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmarPassword}
                                    />
                                </Box>
                                <Text textAlign="right">{errors.confirmarPassword && touched.confirmarPassword && errors.confirmarPassword}</Text>
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

export default FormOne