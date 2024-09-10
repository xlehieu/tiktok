import { useState, useEffect } from 'react';

function useDeboune(value, delay) {
    const [useDebounedValue, setUseDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setUseDebouncedValue(value);
            console.log(value);
        }, delay);
        // dọn dẹp trước khi component bị unmounted
        // tại mỗi khi gõ tìm kiếm thì lại sử dụng useDebounce nên là component trước đó phải được xóa đi
        // không thì setTimeout vẫn được gọi thì không khác gì là
        // khi tìm Manh thì setTimeout sẽ vẫn được gọi M, a, n ,h
        // Debounce này được hiểu như sau:
        // khi bạn tìm kiếm Manh thì như này
        // lần 1 M thì value thay đổi, useEffect được chạy và thằng setTimeout chạy đếm ngược 500ms
        // Tiếp theo nếu gõ thêm chữ a trước 500ms thì value thay đổi và thằng useDebounce trước đó sẽ bị unmounted
        // và lại lọt vào useEffect thì lại tạo ra thằng setTimeout và cứ tiếp tục như thế đến khi
        // người dùng dùng lại chẳng hạn thì thằng value thay đổi, useEffect lại chạy
        // và tạo ra thằng setTimeout và khi đó chuỗi truyền vào là chuỗi cuối cùng sẽ có giá trị là "Manh"
        // 500ms sau được chạy nhưng lần này giá trị debounced ở phía component Search không thay đổi
        // nên thằng useDebounce này không bị unmounted nữa nên thằng clean up không chạy nên
        // không xóa thằng setTimeout

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return useDebounedValue;
}

export default useDeboune;
