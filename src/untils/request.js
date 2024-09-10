import axios from 'axios';
// tạo ra thằng request và có baseURL để không cần phải viết đoạn url
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
// tạo ra phương thức get và từ thằng search truyền vào đối số
// và thằng response nó sẽ thực hiện
export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};
export default request;
