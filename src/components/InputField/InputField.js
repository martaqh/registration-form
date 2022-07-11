import styles from './InputField.module.scss'

const InputField = props => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
       
    )
}
export default InputField;