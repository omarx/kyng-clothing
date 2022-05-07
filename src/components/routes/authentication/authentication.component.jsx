import './authentication.styles.scss'
import SignUpForm from "../../signup-form/signup-form.component";
import SignInForm from "../../sign-in-form/sign-in.component";

const Authentication =()=>{
    return(
        <div className={'authentication-container'}>
            <SignInForm/>
            <SignUpForm/>
        </div>

    )
}
export default Authentication;