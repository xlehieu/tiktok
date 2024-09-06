import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMessage,
    faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UserIcon } from '~/components/Icon';
import ImageDefault from '~/components/Image';
import Search from './Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const currentUser = true;

function Header() {
    // eslint-disable-next-line no-sparse-arrays
    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@pamiuoi',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/getcoins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ,
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo Tiktok" />
                </div>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text to={'/upload'}>
                                Upload
                            </Button>
                            {/* <Button outline className={cx('custom')}>
                            Register
                        </Button> */}
                            <Button outline>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <ImageDefault
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9b36db8582910ffa56d496ea8992694c~c5_100x100.jpeg?lk3s=30310797&nonce=73009&refresh_token=fb1dd138539584325ace1ab4160692db&x-expires=1725512400&x-signature=Trclgd5yNgLeksiwR1s0%2FMvli1A%3D&shp=30310797&shcp=-"
                                alt=""
                                className={cx('user-avatar')}
                                fallback="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/343454215_1551963102211548_5526078545643112773_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=105&ccb=1-7&_nc_sid=6738e8&_nc_ohc=UwT9kqWMJb8Q7kNvgHdyLPc&_nc_ht=scontent.fhan14-1.fna&oh=00_AYCNvugrXxjWCqN0WLAFkLaxCV5dLQ7UopNwDHXLNT2H9g&oe=66DF26B3"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
