import styles from './PrivacyPolicyCheck.module.scss';

const PrivacyPolicyCheck = props => {
    return (
        <div className={styles.privacyPolicyCheck }>
            <input type="checkbox" name="privacy-policy-acceptance" onChange={props.onChange} />
            <label>I accept <a href="#">Privacy Policy</a></label>
        </div>
        
    )
}

export default PrivacyPolicyCheck;