import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ErrorMessage, FastField, Formik, Form, FieldArray } from 'formik';
import { initialValues, onSubmit, validationSchema } from './formik'
import '../App.css';
import FavoritesField from './FavoritesField';
import PersonalError from './PersonalError';
import FormikControll from '../formikControll/FormikControll';

const educations = [
    {
        value: 1,
        text: "ابتدایی"
    },
    {
        value: 2,
        text: "سیکل"
    },
    {
        value: 3,
        text: "دیپلم"
    },
    {
        value: 4,
        text: "لیسانس"
    }
];
const gender = [
    {
        value: 1,
        text: "مرد"
    },
    {
        value: 2,
        text: "زن"
    }
];


const RegisterForm = () => {
    const [savedData, setSavedData] = useState(null);
    const [myValues, setMyValues] = useState(null);
   
    useEffect(()=>{
        const localSavedData = JSON.parse(localStorage.getItem('registerData'));
        setSavedData(localSavedData);
    },[])
    const handleSaveData = (values)=> {
        localStorage.setItem('registerData', JSON.stringify(values));
    }

    const handleGetSavedData = () => {
        setMyValues(savedData)
    }
    return (

        <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
                <Formik initialValues={myValues || initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    // validateOnChange={false}
                    validateOnMount
                    enableReinitialize
                >

                    {(formik) => {
                        console.log(formik);
                        return (
                            <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                                <Form>
                                    <h1 className='text-center'>
                                        <FontAwesomeIcon icon={faUserPlus} className='text-primary' />
                                    </h1>
                                    <FormikControll controller="input" type="text" label="نام" name="name" />
                                    <FormikControll controller="input" type="email" label="ایمیل" name="email" />
                                    <FormikControll controller="input" type="password" label="رمز عبور" name="password" />
                                    <FormikControll controller="textarea" type="text" label="بیوگرافی" name="bio" />
                                    
                                    <FormikControll
                                    controller="select"
                                    label="تحصیلات"
                                    name="education"
                                    options={educations}
                                    />
                                    
                                    <FormikControll
                                    controller="radio"
                                    label="جنسیت"
                                    name="gender"
                                    options={gender}
                                    />
                                    
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

                                    <div className='text-center w-100'>
                                        {formik.isValid ? (
                                            <button type="button" className="btn btn-success" onClick={()=>handleSaveData(formik.values)} >
                                                ذخیره اطلاعات در این سیستم
                                            </button>
                                        ) : null}
                                        {savedData ? (
                                            <button type="button" className="btn btn-success" onClick={handleGetSavedData} >
                                            بازیابی اطلاعات از این سیستم
                                        </button>
                                        ) : null}
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
