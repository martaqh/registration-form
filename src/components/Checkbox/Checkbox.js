import styles from './Checkbox.module.scss';

const Checkbox = props => {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox">I accept <span>Privacy Policy</span></input>
        </div>
        
    )
}

export default Checkbox;