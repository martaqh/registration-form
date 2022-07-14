import styles from './InputField.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const InputField = props => {
    const [isFocused, setIsFocused] = useState(false);
    const [eyeClicked, setEyeClicked] = useState(false)

    const handleClick = e => {
        setIsFocused(true);
        e.currentTarget.classList.remove('notValid');
    }

    console.log(isFocused)
    
    const toggleVisibility = e => {
        e.preventDefault();
        const inputSibling = document.getElementById('password');
        const type = inputSibling.getAttribute('type');
        type === "password" ? 
        inputSibling.setAttribute('type', "text") : inputSibling.setAttribute('type', "password");
        eyeClicked ? setEyeClicked(false) : setEyeClicked(true)
    }

    return (
        <div className={styles.inputField}>
            <label>{props.label}</label>
            <input className={props.className}
                   type={props.type}
                   placeholder={props.className === "notValid" ?
                   `Please enter your ${props.label.toLowerCase()}` : props.placeholder}
                   value={props.value}
                   id={props.type}
                   onClick={handleClick}
                   onChange={props.onChange}  
            />
            <button className={styles.visibilityToggle} category={props.type} onClick={toggleVisibility} >
                {!eyeClicked ?
                 <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />
                }
            </button>
        </div>
       
    )
}
export default InputField;