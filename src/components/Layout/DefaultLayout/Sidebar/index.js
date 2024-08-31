import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2>hello</h2>
            </div>
        </aside>
    );
}

export default Sidebar;
