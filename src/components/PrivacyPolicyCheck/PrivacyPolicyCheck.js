import styles from './PrivacyPolicyCheck.module.scss';

const PrivacyPolicyCheck = () => {
    return (
        <div className={styles.privacyPolicyCheck }>
            <input type="checkbox" name="privacy-policy-acceptance" value="unchecked" />
            <label>I accept <a href="#">Privacy Policy</a></label>
        </div>
        
    )
}

export default PrivacyPolicyCheck;