import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = props => {
    return (
        <a type={props.type}
           className={styles.buttonPrimary}
           href={props.href}
           onClick={props.onClick}
        >
           {props.children}
        </a>
        
        
    )
}

export default ButtonPrimary;