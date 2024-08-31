import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo Tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" spellCheck={false} />
                    <button>
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    </button>
                    {/* loading */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
