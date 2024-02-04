import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import PersonalError from '../form/PersonalError';

const RadioFormik = ({ name, label, options }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField className="form-control" id={name} name={name} >
                {(props) => {
                    console.log("radio props: ");
                    console.log(props);
                    return options.map((v, key) => {
                        return (
                            <Fragment key={key}>
                                <input type='radio' id={v.value} {...props.field} value={v.text} />
                                <label htmlFor={v.value}>{v.text}</label>
                            </Fragment>
                        )
                    })
                }}
            </FastField>
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default RadioFormik;
