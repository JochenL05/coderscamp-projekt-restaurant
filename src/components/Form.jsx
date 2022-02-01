import React  from 'react';
import Register from './register/Register';
import { useState } from 'react';
import FormSuccess from './register/FormSuccess';


const Form = () => {  
    const[formIsSubmit, setFormIsSubmit] = useState(false);

    const SubmitForm = () => {
      setFormIsSubmit=(true);
    }
  return( 
  <div>
      {!formIsSubmit ? 
      (<Register SubmitForm={SubmitForm}/>) : (<FormSuccess/>)}
      
  </div>
    )
};

export default Form;


