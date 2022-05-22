import {FormInputLabel,Input,Group} from "./form-input.styles";
const FormInput=({label,...otherProps})=>{
    return(
        <Group>
            {/*This function allows you to change with
            css is rendered in the class based if is empty or not*/}
            <Input {...otherProps}/>
            {label &&(
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            )}

        </Group>
    )
}
export default FormInput;