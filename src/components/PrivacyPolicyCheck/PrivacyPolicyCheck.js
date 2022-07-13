import styles from './PrivacyPolicyCheck.module.scss';

const PrivacyPolicyCheck = props => {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" name="privacy-policy-acceptance" value="unchecked" />
            <label>I accept <a href="#">Privacy Policy</a></label>
        </div>
        
    )
}

export default PrivacyPolicyCheck;