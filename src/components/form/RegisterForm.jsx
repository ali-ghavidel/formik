import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ErrorMessage, FastField, Formik, Form } from 'formik';
import { initialValues, onSubmit, validationSchema } from './formik'
import '../App.css';

const RegisterForm = () => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='form d-flex flex-column align-items-center justify-content-center'>
                    <FontAwesomeIcon icon={faUserPlus} color='blue' fontSize="2rem" />
                    <label htmlFor='name'>نام</label>
                    <FastField type='text' id='name' name="name" />
                    <ErrorMessage name='name'>
                        {(msg)=>{
                            return( <div className='text-danger'>{msg}</div> );
                        }}
                    </ErrorMessage>
                    <label htmlFor='email'>ایمیل</label>
                    <FastField type='email' id='email' name="email" placeholder="jane@acme.com" />
                    <ErrorMessage name='email' className='text-danger' />
                    <label htmlFor='pass'>رمز عبور</label>
                    <FastField type='password' id='pass' name="pass" />
                    <ErrorMessage name='pass' className='text-danger' />
                    <button type='submit' className='btn btn-primary'>ثبت نام</button>
                </Form>
        </Formik>
    );
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })
    // return (
    //     <div>
    //         <form className='form d-flex flex-column justify-content-center align-items-center' onSubmit={formik.handleSubmit}>
    //             <FontAwesomeIcon icon={faUserPlus} color='blue' fontSize="2rem" />
    //             <label htmlFor='name'>نام</label>
    //             <input type='text' id='name' {...formik.getFieldProps('name')} />
    //             {formik.errors.name && formik.touched.name ? <small className='text-danger'>{formik.errors.name}</small> : null}
    //             <label htmlFor='email'>ایمیل</label>
    //             <input type='email' id='email' {...formik.getFieldProps('email')} />
    //             {formik.errors.email && formik.touched.email ? <small className='text-danger'>{formik.errors.email}</small> : null}
    //             <label htmlFor='pass'>رمز عبور</label>
    //             <input type='password' id='pass' {...formik.getFieldProps('pass')} />
    //             {formik.errors.pass && formik.touched.pass ? <small className='text-danger'>{formik.errors.pass}</small> : null}
    //             <button type='submit' className='btn btn-primary'>ثبت نام</button>
    //         </form>
    //     </div>
    // );
    
}

export default RegisterForm;
