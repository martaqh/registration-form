import styles from './ValidationMessage.module.scss';


const ValidationMessage = props => {
    return (
        <div className={styles.validationMessage}>
            <p>{props.children}</p>
        </div>
        
    )
}

export default ValidationMessage;