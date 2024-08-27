import './App.css';
import { useState } from 'react';
const orders = [100, 200, 400];
const user = {
    name: 'Le Xuan Hieu',
    age: 21,
    address: 'Xuan Canh, Dong Anh, Ha Noi',
};
function App() {
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur);
        return total;
    });
    const handleIncrease = () => {
        setCounter(counter + 1);
    };
    const [info, setInfo] = useState(user);
    const handleInfo = () => {
        setInfo({
            ...info,
            bio: 'Tao la Le Xuan Hieu',
        });
    };
    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Tăng số</button>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleInfo}>Đặt lại</button>
        </div>
    );
}

export default App;
