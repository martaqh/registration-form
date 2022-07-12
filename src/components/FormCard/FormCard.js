import styles from './FormCard.module.scss';



const FormCard = props => {
    return (
        <form className={styles.formCard} onSumbit={props.onSumbit}>
            {props.children}
        </form>
    )
}

export default FormCard;