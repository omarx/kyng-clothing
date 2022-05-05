import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../../utils/firebase.utils";
import './authentication.styles.scss'
import SignUpForm from "../../signup-form/signup-form.component";
import SignInForm from "../../sign-in-form/sign-in.component";

const Authentication =()=>{

    const logGoogleuser=async()=>{
        const {user}= await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);
    }

    return(
        <div className={'authentication-container'}>
            <SignInForm/>
            <SignUpForm/>
        </div>

    )
}
export default Authentication;