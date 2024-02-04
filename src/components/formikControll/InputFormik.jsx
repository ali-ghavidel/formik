import React from 'react';
import PersonalError from '../form/PersonalError';
import { ErrorMessage, FastField } from 'formik';

const InputFormik = ({type, name, label}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField type={type} className="form-control" id={name} name={name} />
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default InputFormik;
