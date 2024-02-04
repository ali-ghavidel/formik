import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage, Field } from 'formik';
import React from 'react';
import PersonalError from './PersonalError';


const FavoritesField = (props) => {
    // console.log(props);
    const { push, form, remove } = props;
    const { favorites } = form.values;
    return (
        <>
            <FontAwesomeIcon icon={faPlus} className="text-success d-inline" onClick={() => push('')} />
            {favorites.map((f, index) => {
                return (
                    <div key={index} className='w-100 position-relative' >
                        <Field type="text" name={`favorites[${index}]`} className="w-100" />
                        {favorites.length > 1 ? <FontAwesomeIcon icon={faTimes} onClick={() => remove(index)} className='text-white text-bg-danger rounded-circle' style={{ position: "absolute", left: "4px", top: "4px" }} /> : null}
                        <ErrorMessage name={`favorites[${index}]`} component={PersonalError} />
                    </div>
                )
            })}
        </>

    );
}

export default FavoritesField;
