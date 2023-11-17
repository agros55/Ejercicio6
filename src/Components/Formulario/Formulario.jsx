import { Formik } from 'formik';

const FormOne = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                    console.log(errors)
                }}
                validate={(values) => {
                    const errors = {}
                    if (values.name == '') {
                        errors.name = 'Required'
                    }
                    return errors
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name"
                            onChange={handleChange}
                            value={values.name} />
                        <button type="submit">Submit</button>

                    </form>
                )
                }

            </Formik>
        </div>
    )
}

export default FormOne