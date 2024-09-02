import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9b36db8582910ffa56d496ea8992694c~c5_300x300.webp?lk3s=a5d48078&nonce=30338&refresh_token=7a60983f21f06f3447362a7ba8e36604&x-expires=1725379200&x-signature=wSN0wn1upKo8abImaP9Y9pA9stw%3D&shp=a5d48078&shcp=c1333099"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Pamyeuoi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>Pamela Hai Duong</span>
            </div>
        </div>
    );
}

export default AcountItem;
