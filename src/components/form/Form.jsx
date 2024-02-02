import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import '../App.css';

const Form = () => {
    return (
        <div>
            <form className='form d-flex flex-column justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faUserPlus} color='blue' fontSize="2rem" />
                <label htmlFor='name'>نام</label>
                <input type='text' id='name' />
                <label htmlFor='email'>ایمیل</label>
                <input type='email' id='email' />
                <label htmlFor='pass'>رمز عبور</label>
                <input type='password' id='pass' />
                <button type='submit' className='btn btn-primary'>ثبت نام</button>
            </form>
        </div>
    );
}

export default Form;
