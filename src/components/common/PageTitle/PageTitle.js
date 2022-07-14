import styles from './PageTitle.module.scss';

const PageTitle = props => {
    return (
        <div type={props.type} className={styles.pageTitle}>{props.children}</div>
    )
}

export default PageTitle