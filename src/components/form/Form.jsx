import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { initialValues, onSubmit, validationSchema } from './formik'
import '../App.css';

const Form = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div>
            <form className='form d-flex flex-column justify-content-center align-items-center' onSubmit={formik.handleSubmit}>
                <FontAwesomeIcon icon={faUserPlus} color='blue' fontSize="2rem" />
                <label htmlFor='name'>نام</label>
                <input type='text' id='name' {...formik.getFieldProps('name')} />
                {formik.errors.name && formik.touched.name ? <small className='text-danger'>{formik.errors.name}</small> : null}
                <label htmlFor='email'>ایمیل</label>
                <input type='email' id='email' {...formik.getFieldProps('email')} />
                {formik.errors.email && formik.touched.email ? <small className='text-danger'>{formik.errors.email}</small> : null}
                <label htmlFor='pass'>رمز عبور</label>
                <input type='password' id='pass' {...formik.getFieldProps('pass')} />
                {formik.errors.pass && formik.touched.pass ? <small className='text-danger'>{formik.errors.pass}</small> : null}
                <button type='submit' className='btn btn-primary'>ثبت نام</button>
            </form>
        </div>
    );
}

export default Form;
