import React  from 'react';
import Register from './register/Register';
import { useState } from 'react';
import FormSuccess from './register/FormSuccess';


const Form = () => {  
    const[formIsSubmit, setFormIsSubmit] = useState(false);

    const submitForm = () => {
      const setFormIsSubmit=(true);
    }
  return( 
    <>
  <div>
      {!formIsSubmit ? 
      (<Register submitForm={submitForm}/>) : (<FormSuccess/>)}
      
  </div>
  </>
    )
};

export default Form;


