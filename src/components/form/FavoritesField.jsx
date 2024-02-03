import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Field } from 'formik';
import React from 'react';


const FavoritesField = (props) => {
    console.log(props);
    const { push, form, remove} = props;
    const { favorites } = form.values;
    return (
        <>
            <FontAwesomeIcon icon={faPlus} className="text-success " onClick={()=>push('')} />
            {favorites.map((f,index)=>{
                return(
                <div key={index}>
                <Field type="text" name={`favorites[${index}]`} />
                {favorites.length > 1 ? <FontAwesomeIcon icon={faTimes} onClick={()=>remove(index)} /> : null}
                </div>
                )
            })}
        </>
        
    );
}

export default FavoritesField;
