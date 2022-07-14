import styles from './CheckboxAccept.module.scss';

const CheckboxAccept = props => {
    return (
        <div className={styles.checkboxAccept}>
            <input type="checkbox" name="privacy-policy-acceptance" onChange={props.onChange} />
            <label>I accept <a href="#">Privacy Policy</a></label>
        </div>    
    )
}

export default CheckboxAccept;