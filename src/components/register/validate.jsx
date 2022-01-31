export default function validate(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password1) {
      errors.password1 = 'Password is required';
    } else if (values.password1.length < 8) {
      errors.password1 = 'Password needs to be 8 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password1) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }

//     let  errors = {};
    
//     if(!values.username.trim){
//         errors.username= "username is required field"
//     } else if (values.username.length <4){
//         errors.username= "username is to short";
//     }
    
//     if (!values.email){
//         errors.email= "email is required field"
//     } 
//     else if 
//     (/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+.){1,5}[a-z]{2,6}$/i.test(values.  email)){
//         errors.email= "wrong email adress";
//     }
    
    // if(!values.password1){
    //     errors.password1= "password is required field";
    // }
    // // else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/.test(values.password)) {
    // //     errors.password1= "Your password must be at least 8 characters, and contain one uppercase letter, one lowercase letter, one number, and one special character"
    // // }
//     else if(values.password1.length <8){
//         errors.password1= "Your password must be at least 8 characters"
//         // and contain one uppercase letter, one lowercase letter, one number, and one special character";
//     }

//     if(!values.password2){
//         errors.password2= "repeat password"
//     } 
//     else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/.test(values.password)){
//         errors.password2= "Your password must be at least 8 characters, and contain one uppercase letter, one lowercase letter, one number, and one special character"
//     }
//     else if (values.password2.length <5){
//         errors.password2= "password are not the same";
//     }

//     // if(!values.password1 !== values.password2){
//     //     errors.password1password2= "passwords are not the same";
//     // }
//     return errors ;
// }