import styles from './PageTitle.module.scss';

const PageTitle = props => {
    return (
        <div className={styles.pageTitle}>{props.children}</div>
    )
}

export default PageTitle