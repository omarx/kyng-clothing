//Reusable form fields for react
//need to make message time out if not click in 5 secs
import {useState} from "react";
import {signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import {ButtonContainer,SignInContainer} from './sign-in-form.styles'
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";

import swal from 'sweetalert';

const defaultFormFields={
    email:'',
    password:'',    
}


const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);

    const {email,password}=formFields;

    const resetFormFields=()=> setFormFields(defaultFormFields);


    const signInWithGoogle=async()=>{
        await signInWithGooglePopup()
            swal({icon:'success',
                text:'You are now logged in!',timer:3000})
    }

    const handleSubmit=async(e)=> {
        e.preventDefault();
        try {
             await signInAuthUserWithEmailAndPassword(email,password)
                .then( swal({icon:'success',
                text:'You are now logged in!',timer:3000}))
            resetFormFields();
        } catch (err) {
            resetFormFields();
            switch(err.code) {
                case 'auth/user-not-found':
                    resetFormFields()
                    swal("Oops...", "User does not exist", "error");
                    break
                case 'auth/wrong-password':
                    resetFormFields()
                    swal("Oops...", "Incorrect Username or Password", "error");
                    break
                default:
                    console.log(err);
            }
        }
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormFields({...formFields,[name]:value});
    }
    return(
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' onChange={handleChange} name={`email`} value={email} required/>
                <FormInput label='Password' type='password'  onChange={handleChange} name={`password`} value={password} required/>
                <ButtonContainer>
                    <Button type={'submit'}>Sign In</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={()=>{
                    resetFormFields()
                    signInWithGoogle()}}>Sign in with Google</Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;
