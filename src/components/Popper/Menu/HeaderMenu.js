import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx('header-menu')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <h4 className={cx('header-title')}>{title}</h4>
            </button>
        </header>
    );
}

export default HeaderMenu;
