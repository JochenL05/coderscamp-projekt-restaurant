import { useEffect, useState } from "react";
import FormSuccess from "./FormSuccess";
import validate from "./validate";

const useForm = ({submitForm}) => {
    const [values,setValues] = useState({
        username:'',
        email:'',
        password1:'',
        password2:'',

        
    });

    const [errors, setErrors] = useState({});

    const [dataIsCorrect,setDataIsCorrect]=useState(false)


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log('form submitted', values )
        setErrors(validate(values));
        setDataIsCorrect(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            FormSuccess(true)
        }
    },[errors])

        return{handleChange, values, handleSubmit, errors}
};


export default useForm ;
