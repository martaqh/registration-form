import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import styles from './ButtonsSection.module.scss';

const ButtonsSection = props => {
    return (
        <div className={styles.buttonsSection}>
            <ButtonSecondary>Log in instead</ButtonSecondary>
            <ButtonPrimary href={props.href}>Next step</ButtonPrimary>
        </div>
    )
}

export default ButtonsSection;