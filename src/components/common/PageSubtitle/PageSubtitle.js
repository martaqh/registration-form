import styles from './PageSubtitle.module.scss'

const PageSubtitle = props => {
    return (
        <div className={styles.pageSubtitle}>{props.children}</div>
    )
}

export default PageSubtitle;