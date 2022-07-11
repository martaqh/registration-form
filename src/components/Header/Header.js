import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} className={styles.header__logo} alt="Monterail logo" />
            <p className={styles.header__slogan}>Developed with <span><FontAwesomeIcon icon={faHeart} /></span> by Monterail</p>

        </div>
    )
}
export default Header;