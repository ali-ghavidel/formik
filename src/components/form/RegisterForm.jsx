import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ErrorMessage, FastField, Formik, Form, FieldArray } from 'formik';
import { initialValues, onSubmit, validationSchema } from './formik'
import '../App.css';
import FavoritesField from './FavoritesField';
import PersonalError from './PersonalError';

const RegisterForm = () => {

    const validateBio = (value) => {
        let error;
        if (!value) {
            error = "این فیلد اجباری است!";
        } else if (!/^[\u0600-\u06FF\-s0-9a-zA-Z]+$/.test(value)) {
            error = "لطفا قالب نوشتاری را رعایت کنید"
        }
        return error;
    }


    return (

        <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
                <Formik initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    // validateOnChange={false}
                    validateOnMount
                >

                    {(formik) => {
                        console.log(formik);
                        return (
                            <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                                <Form>
                                    <h1 className='text-center'>
                                        <FontAwesomeIcon icon={faUserPlus} className='text-primary' />
                                    </h1>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">نام</label>
                                        <FastField type="text" className="form-control" id="name" name='name' />
                                        <ErrorMessage name='name' component={PersonalError} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">ایمیل</label>
                                        <FastField type="email" className="form-control" id="email" name='email' />
                                        <ErrorMessage name='email' component={PersonalError} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">رمز عبور</label>
                                        <FastField type="password" className="form-control" id="password" name='password' />
                                        <ErrorMessage name='password' component={PersonalError} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="bio" className="form-label">بیوگرافی</label>
                                        <FastField type="text" className="form-control" id="bio" name='bio' component="textarea" validate={validateBio} />
                                        <ErrorMessage name='bio' component={PersonalError} />
                                    </div>
                                    <div className='row'>
                                        <div className="mb-3 col-6">
                                            <label htmlFor="city" className="form-label">شهر</label>
                                            <FastField type="text" className="form-control" id="city" name='address.city' />
                                            <ErrorMessage name='address.city' component={PersonalError} />
                                        </div>
                                        <div className="mb-3 col-6">
                                            <label htmlFor="postalcode" className="form-label">کدپستی</label>
                                            <FastField type="text" className="form-control" id="postalcode" name='address.postalcode' />
                                            <ErrorMessage name='address.postalcode' component={PersonalError} />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="mb-3 col-6">
                                            <label htmlFor="mobile" className="form-label">موبایل</label>
                                            <FastField type="text" className="form-control" id="mobile" name='phone[0]' />
                                            <ErrorMessage name='phone[0]' component={PersonalError} />
                                        </div>
                                        <div className="mb-3 col-6">
                                            <label htmlFor="phone" className="form-label">تلفن ثابت</label>
                                            <FastField type="text" className="form-control" id="phone" name='phone[1]' />
                                            <ErrorMessage name='phone[1]' component={PersonalError} />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="favs" className="form-label">علایق</label>
                                        <FieldArray name='favorites' id="favs" >
                                            {(props) => {
                                                return <FavoritesField {...props} />
                                            }}
                                        </FieldArray>
                                    </div>

                                    {/* <div className='text-center w-100'>
                                        <button type="button" onClick={() => formik.validateForm()} className="btn btn-info">اعتبار سنجی فرم</button>
                                        <button type="button" onClick={() => formik.validateField('bio')} className="btn btn-info">اعتبار سنجی بیوگرافی</button>
                                    </div>
                                    <div className='text-center w-100'>
                                        <button type="button" onClick={() => formik.setTouched({
                                            name: true,
                                            email: true
                                        })} className="btn btn-success">مشاهده فرم</button>
                                        <button type="button" onClick={() => formik.setFieldTouched('bio')} className="btn btn-success">مشاهده بیوگرافی</button>
                                    </div> */}


                                    <div className='text-center w-100'>
                                        <button type="submit" className="btn btn-primary" disabled={!formik.isValid || formik.isSubmitting}>
                                            {formik.isSubmitting ? (
                                                <div className="spinner-grow text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            ) : "ثبت نام"}
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        )
                    }}

                </Formik>
            </div>
        </div>
    );


}

export default RegisterForm;
