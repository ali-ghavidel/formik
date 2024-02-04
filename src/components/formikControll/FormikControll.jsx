import React from 'react';
import InputFormik from './InputFormik';
import TextAreaFormik from './TextAreaFormik';
import SelectFormik from './SelectFormik';
import RadioFormik from './RadioFormik';
import CheckBoxFormik from './CheckBoxFormik';

const FormikControll = (props) => {
    switch (props.controller) {
        case "input":
            return <InputFormik {...props} />
        case "textarea":
            return <TextAreaFormik {...props} />
        case "select":
            return <SelectFormik {...props} />
        case "radio":
            return <RadioFormik {...props} />
        case "checkbox":
            return <CheckBoxFormik {...props} />
        default:
            return;
    }
}

export default FormikControll;
