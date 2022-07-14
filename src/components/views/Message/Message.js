import styles from './Message.module.scss';

const Message = props => {
    return (
        <div className={styles.message__success}>
                <p >We have sent you an email to <span>{props.userEmail}</span>.</p>
                <p>Make sure to click the link from the message to activate your account. </p>
            </div>
    )
}

export default Message;