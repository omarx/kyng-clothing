import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../../utils/firebase.utils";
import SignUpForm from "../../signup-form/signup-form.component";
import Button from "../../button/button.component";

const SignIn=()=>{

    const logGoogleuser=async()=>{
        const {user}= await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In </h1>
            <Button buttonType={'inverted'} onClick={logGoogleuser}>Sign in with Google popup</Button>
            <SignUpForm/>
        </div>

    )
}
export default SignIn;