import styles from './ButtonSecondary.module.scss';

const ButtonSecondary = props => {
    return (
        <a className={styles.buttonSecondary}
           href={props.href}>
            {props.children}
        </a>
    )
}

export default ButtonSecondary;