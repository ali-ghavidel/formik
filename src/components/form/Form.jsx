import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';

import '../App.css';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values)=> {
            let errors = {};
            if(!values.name){
                errors.name = "لطفا نام را وارد کنید"
            }
            if(!values.email){
                errors.email = "لطفا ایمیل را وارد کنید"
            }else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)){
                errors.email = "لطفا از ایمیل صحیح استفاده کنید"
            }
            if(!values.pass){
                errors.pass = "لطفا رمز عبور را وارد کنید"
            }else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.pass)){
                errors.pass = "رمز عبور باید حداقل یک عدد و یک کاراکتر خاص داشته باشد"
            }
            return errors;
        }
    })
    console.log(formik);
    return (
        <div>
            <form className='form d-flex flex-column justify-content-center align-items-center' onSubmit={formik.handleSubmit}>
                <FontAwesomeIcon icon={faUserPlus} color='blue' fontSize="2rem" />
                <label htmlFor='name'>نام</label>
                <input type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.name && formik.touched.name ? <small className='text-danger'>{formik.errors.name}</small> : null}
                <label htmlFor='email'>ایمیل</label>
                <input type='email' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email ? <small className='text-danger'>{formik.errors.email}</small> : null}
                <label htmlFor='pass'>رمز عبور</label>
                <input type='password' id='pass' name='pass' value={formik.values.pass} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.pass && formik.touched.pass ? <small className='text-danger'>{formik.errors.pass}</small> : null}
                <button type='submit' className='btn btn-primary'>ثبت نام</button>
            </form>
        </div>
    );
}

export default Form;
