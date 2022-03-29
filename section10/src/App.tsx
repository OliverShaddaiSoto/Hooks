import { ErrorMessage, Field, Form, Formik, useFormik, } from 'formik'
import CheckBox from './components/CheckBox';
import Select from './components/Select';
import TextInput from './components/TextInput';

function App() {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            chancho: '',
        },
        validate: (values) => {
            const errors = { name: '', lastname: '' }
            if (!values.name) {
                errors.name = 'Requerido';
            } else if (values.name.length < 5) {
                errors.name = 'El nombre es muy corto';
            }

            if (!values.lastname) {
                errors.lastname = 'Requerido';
            } else if (values.name.length < 5) {
                errors.lastname = 'El apellido es muy corto';
            }


            return errors;
        },
        onSubmit: values => console.log(values)
    })
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    lastname: '',
                    email: '',
                    chancho: '',
                }}
                validate={formik.validateForm}
                onSubmit={values => console.log()}>

                <Form>
                    <TextInput name="name" label="Nombre"/>
                    <ErrorMessage name="name" />
                    <br />

                    <TextInput name="lastname" label="Apellido"/>
                    <ErrorMessage name="lastname" />
                    <br />

                    <TextInput name="email" label="Correo"/>
                    
                    <br />

                    <CheckBox name="accept">Aceptar Terminos y condiciones</CheckBox>

                    <Select name= "Tipo de chancho" label="chacho">
                        <option value="">-- Seleccione Chancho --</option>
                        <option value="ChanchitoFeliuz"> Chanchito Feliz </option>
                        <option value="ChanchitoTriste"> Chanchito Triste </option>
                    </Select>

                    <button type='submit'>enviar</button>
                </Form>
            </Formik>
        </div>
    );
}

export default App
