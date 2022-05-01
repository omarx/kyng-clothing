import './form-input.styles.scss'
const FormInput=({label,...otherProps})=>{
    return(
        <div className={'group'}>
            {/*This function allows you to change with
            css is rendered in the class based if is empty or not*/}
            <input className={'form-input'} {...otherProps}/>
            {label &&(
                <label className={`${otherProps.value.length?'shrink':null} form-input-label`}>{label}</label>
            )}

        </div>
    )
}
export default FormInput;