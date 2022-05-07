//Reusable form fields for react
import {useState} from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './signup-form.styles.scss';
import Button from "../button/button.component";
import swal from 'sweetalert';


const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);

    const {displayName,email,password,confirmPassword}=formFields;
    const resetFormFields=()=> setFormFields(defaultFormFields);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            swal("Oops...","Passwords do not match","error");
            return;
        }
        try{
            const {user}= await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, { displayName });
            swal({icon:'success',
                title:'Success',text:'Your account has been created!',timer:3000})
            resetFormFields();
        }catch(err){
            err.code=== 'auth/email-already-in-use'?swal("Oops...","Cannot create user email in use","error"):
            console.log('user creation error', err);
        }
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormFields({...formFields,[name]:value});
    }
    return(
        <div className={'sign-up-container'}>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Display Name' type='text' required onChange={handleChange} name={`displayName`} value={displayName} />

                <FormInput label='Email' type='email' onChange={handleChange} name={`email`} value={email} required/>

                <FormInput label='Password' type='password'  onChange={handleChange} name={`password`} value={password} required/>

                <FormInput label='Confirm Password' type='password' onChange={handleChange} name={`confirmPassword`} value={confirmPassword} required/>
                <Button  type={'submit'}>Sign Up</Button>
            </form>
        </div>
    );
}
export default SignUpForm;