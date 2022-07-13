import styles from './FormCard.module.scss';



const FormCard = props => {
    
    return (
        <div className={styles.formCard}>
            {props.children}
        </div>
    )
}

export default FormCard;