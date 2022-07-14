import styles from './ValidationMessage.module.scss';
import clsx from 'clsx';

const ValidationMessage = props => {
    return (
        <div className={styles.validationMessage}>
            <p className={clsx(props.className ? (props.className === "valid" ? styles.valid : styles.notValid) : null)}>{props.children}</p>
        </div>    
    )
}

export default ValidationMessage;