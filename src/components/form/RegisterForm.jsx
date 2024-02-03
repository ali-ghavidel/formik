import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ErrorMessage, FastField, Formik, Form, FieldArray } from 'formik';
import { initialValues, onSubmit, validationSchema} from './formik'
import '../App.css';
import FavoritesField from './FavoritesField';

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
                    <label htmlFor='bio'>بیوگرافی</label>
                    <FastField type='text' id='bio' name="bio" component="textarea" />

                    <div className='container row d-flex justify-content-center align-items-center'>
                        <div className='col-6 d-flex flex-column align-items-end'>
                            <label htmlFor='city'>شهر</label>
                            <FastField type='password' id='city' name="address.city" />
                            <ErrorMessage name='address.city' className='text-danger' />
                        </div>
                        <div className='col-6 d-flex flex-column align-items-end'>
                            <label htmlFor='postalcode'>کدپستی</label>
                            <FastField type='text' id='postalcode' name="address.postalcode" />
                            <ErrorMessage name='address.postalcode' className='text-danger' />
                        </div>
                    </div>
                    
                    <div className='container row d-flex justify-content-center align-items-center'>
                        <div className='col-6 d-flex flex-column align-items-end'>
                            <label htmlFor='mobile'>موبایل</label>
                            <FastField type='password' id='mobile' name="phone[0]" />
                            <ErrorMessage name='phone[0]' className='text-danger' />
                        </div>
                        <div className='col-6 d-flex flex-column align-items-end'>
                            <label htmlFor='phone'>تلفن</label>
                            <FastField type='text' id='phone' name="phone[1]" />
                            <ErrorMessage name='phone[1]' className='text-danger' />
                        </div>
                    </div>

                    <div className='container row d-flex justify-content-center align-items-center'>
                            <label htmlFor='favs'>علایق</label>
                            <FieldArray name='favorites'>
                                {(props)=>{
                                    // console.log("field arr: ");
                                    // console.log(props)
                                    return <FavoritesField {...props} />
                                }}
                            </FieldArray>
                    </div>
                    
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
