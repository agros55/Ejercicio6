import { Box } from '@chakra-ui/layout';
import { Center, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validaciones = Yup.object().shape({
    nombre: Yup.string()
        .min(5, 'Muy corto')
        .max(50, 'Muy largo')
        .required('El nombre es requerido.'),
    apellido: Yup.string()
        .min(5, 'Muy corto')
        .max(50, 'Muy largo')
        .required('El apellido es requerido.'),
    password: Yup.string()
        .min(6, 'Muy corto')
        .max(50, 'Muy largo')
        .required('El password es requerido.'),
    direccion: Yup.string()
        .min(5, 'Muy corto')
        .max(50, 'Muy largo')
        .required('La dirección es requerida.'),
    email: Yup.string().email('Email inválido.').required('El email es requerido.'),
});


const FormOne = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: '',
                    password: '',
                    confirmarPassword: '',
                }}
                validationSchema={validaciones}
                /* validate={values => {
                    const errors = {};
                    if (!values.nombre) {
                        errors.nombre = 'El nombre es requerido.';
                    }
                    if (!values.email) {
                        errors.email = 'El email es requerido.';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Email invalido';
                    }
                    if (!values.password) {
                        errors.password = 'El password es requerido';
                    }
                    if (!values.direccion) {
                        errors.direccion = 'La dirección es requerida.';
                    }

                    return errors;
                }} */
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                            <form onSubmit={handleSubmit}>
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
                                <Text textAlign="right">{errors.apellido && touched.apellido && errors.apellido}</Text>

                                {/* Campo para password */}
                                <Box display="flex" justifyContent="space-between">
                                    <FormLabel>Password</FormLabel>
                                    <Input w="80%"
                                        id='password'
                                        name='password'
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <Button pos="absolute" right={0} zIndex={10}>Ver password</Button>
                                </Box>
                                <Text textAlign="right">{errors.password && touched.password && errors.password}</Text>

                                {/* Campo para confirmar password */}
                                <Box display="flex" justifyContent="space-between">
                                    <FormLabel>Confirmar password</FormLabel>
                                    <Input w="80%"
                                        id='direccion'
                                        name='direccion'
                                        type='text'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.direccion}
                                    />
                                </Box>
                                <Text textAlign="right">{errors.direccion && touched.direccion && errors.direccion}</Text>
                                <br />

                                <Button type='submit' disabled={isSubmitting}>Enviar</Button>

                            </form>
                        </FormControl>
                    </Box>
                )}
            </Formik>
        </div>
    )
}

export default FormOne