import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../../utils/firebase.utils";
import SignUpForm from "../../signup-form/signup-form.component";
import SignInForm from "../../sign-in-form/sign-in.component";

const Authentication =()=>{

    const logGoogleuser=async()=>{
        const {user}= await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <SignInForm/>
            <SignUpForm/>
        </div>

    )
}
export default Authentication;