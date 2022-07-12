import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = props => {
    return (
        <a type={props.type}
           className={styles.buttonPrimary}
           href={props.href}>
        
           {props.children}
        </a>
        
        
    )
}

export default ButtonPrimary;