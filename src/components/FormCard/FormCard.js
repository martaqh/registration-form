import styles from './FormCard.module.scss';
import eye from '../../images/eye.svg';
import InputField from '../InputField/InputField';
import ValidationMessage from '../ValidationMessage/ValidationMessage';


const FormCard = () => {
    return (
        <div className={styles.formCard}>
            <InputField label="E-mail" type="email" placeholder="Somthing ending with monterail.com" />
            <InputField label="Password" type="password" placeholder="Enter your password" />
            <ValidationMessage>At least 8 characters</ValidationMessage>
            <ValidationMessage>At least one letter</ValidationMessage>
            <ValidationMessage>At least one digit</ValidationMessage>
        </div>
    )
}

export default FormCard;