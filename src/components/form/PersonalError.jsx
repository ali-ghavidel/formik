import React from 'react';

const PersonalError = (props) => {
    return (
        <div className='text-danger text-center'>
            {props.children}
        </div>
    );
}

export default PersonalError;
