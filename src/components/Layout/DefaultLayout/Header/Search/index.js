import React, { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from '../Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    // hàm xử lý không cho phép người dùng gõ space đầu tiên
    const handleOnChange = (text) => {
        setSearchValue(text.trim());
    };
    //fetch trả về một promise trả về dữ liệu và ta lấy dữ liệu đó chuyển về dạng json
    // và cái thằng ở trên lại trả về một promise
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(function (res) {
                return res.json();
                // hàm json() biến đổi object Respone của fetch trả về
                // thành dạng JSON, đại khái là sau một quá trình phức tạp gì đó từ obj res
                // thành được JSON và từ JSON lại trả về một Promise chứa object dữ liệu
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('title-search')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AcountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Tìm kiếm"
                    value={searchValue}
                    spellCheck={false}
                    onChange={(e) => handleOnChange(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {/* toán tử !! dùng để biến đổi một biến thành bool ví dụ searchValue ='' thì là false */}
                {!loading && !!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                {/* loading */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
