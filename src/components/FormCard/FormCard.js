import styles from './FormCard.module.scss';
import eye from '../../images/eye.svg';
import InputField from '../InputField/InputField';


const FormCard = () => {
    return (
        <div className={styles.formCard}>
            <InputField label="E-mail" type="email" placeholder="Somthing ending with monterail.com" />
            <InputField label="Password" type="password" placeholder="Enter your password" />
            
        </div>
    )
}

export default FormCard;