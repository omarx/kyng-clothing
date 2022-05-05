//Reusable form fields for react
import {useState,useContext} from "react";
import {signInWithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";
import {UsersContext} from "../../contexts/users.context";
import swal from 'sweetalert';

const defaultFormFields={
    email:'',
    password:'',    
}


const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);

    const {email,password}=formFields;

    const resetFormFields=()=> setFormFields(defaultFormFields);

    const {setCurrentUser}= useContext(UsersContext);
    const signInWithGoogle=async()=>{
        const {user}= await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        swal({icon:'success',
        text:'You are now logged in!'})
    }

    const handleSubmit=async(e)=> {
        e.preventDefault();
        try {
            const {user}= await signInAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
            swal({icon:'success',
                text:'You are now logged in!'})
            resetFormFields();
        } catch (err) {
            switch(err.code) {
                case 'auth/user-not-found':
                    swal("Oops...", "User does not exist", "error");
                    resetFormFields()
                    break
                case 'auth/wrong-password':
                    swal("Oops...", "Incorrect Username or Password", "error");
                    resetFormFields()
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
        <div className={'sign-in-container'}>
            <h2>Already have an account?</h2>
            <span>Sign in email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' onChange={handleChange} name={`email`} value={email} required/>
                <FormInput label='Password' type='password'  onChange={handleChange} name={`password`} value={password} required/>
                <div className={'buttons-container'}>
                    <Button  type={'submit'}>Sign In</Button>
                <Button buttonType='google' onClick={signInWithGoogle}>Sign in with Google</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
