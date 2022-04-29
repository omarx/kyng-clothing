import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../../utils/firebase.utils";

const SignIn=()=>{
    const logGoogleuser=async()=>{
        const {user}= await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign In </h1>
            <button onClick={logGoogleuser}>Sign in with Google popup</button>
        </div>

    )
}
export default SignIn;