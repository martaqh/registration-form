import styles from './InputField.module.scss';
import { useState } from 'react';

const InputField = props => {
    const [isFocused, setIsFocused] = useState(false);
    const handleClick = e => {
        setIsFocused(true);
        e.currentTarget.classList.remove('notValid');
    }

    console.log(isFocused)

    console.log(props.className)
    return (
        <div className={styles.inputField}>
            <label>{props.label}</label>
            <input className={props.className}
                   type={props.type}
                   placeholder={props.className === "notValid" ? `Please enter your ${props.type}` : props.placeholder}
                   value={props.value}
                   onClick={handleClick}
                   onChange={props.onChange}  
            />
        </div>
       
    )
}
export default InputField;