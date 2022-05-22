import {AuthenticationContainer} from "./authentication.styles";

import SignUpForm from "../../components/signup-form/signup-form.component";
import SignInForm from "../../components/sign-in-form/sign-in.component";

const Authentication =()=>{
    return(
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>

    )
}
export default Authentication;