import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import '../login/Form.css';
import googleLogo from '../assets/google.png';
import fbLogo from '../assets/fb.png';
import twitterLogo from '../assets/twitter.png';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-signup'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Email Id</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign Up
        </button>

        
      <div className='connect'>
          <div className='connect-border'></div>
          <div>Or Connect With</div>
          <div className='connect-border'></div>
        </div>

        <div className='connect-link'>
          <div className='connect-link-logo'>
            <a href="/"><img src={googleLogo} width={30} height={30}/></a>
          </div>
          <div className='connect-link-logo'>
            <a href="/"><img src={fbLogo} width={30} height={30}/></a>
          </div>
          <div className='connect-link-logo'>
            <a href="/"><img src={twitterLogo} width={30} height={30}/></a>
          </div>
        </div>

      </form>


    </div>
  );
};

export default FormSignup;