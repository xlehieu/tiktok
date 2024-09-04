import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';
const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        // data sẽ còn cái gì thì truyền vào
        <Button className={classes} leftIcon={data.icon} onClick={onClick} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
