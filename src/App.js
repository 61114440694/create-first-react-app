import {useState} from 'react';
import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {
    setInterval(UpdateTime, 1000);
    let now = new Date().toLocaleTimeString('th-TH');
    const [time, setTime] = useState(now);
    const [num, setNum] = useState(0);
    const [showtext, setShowText] = useState()


    function UpdateTime() {
        let NewTime = new Date().toLocaleTimeString('th-TH');
        setTime(NewTime)

    }

    function CheckNumToShow(x) {
        let Prime = true
        if (x === 1) {
            setShowText(`${x} ไม่เป็นจำนวนเฉพาะเพราะมีตัวหารลงตัว 1 ตัว`)
        } else if (x > 1) {
            for (let i = 2; i < x; i++) {
                if (x % i === 0) {
                    Prime = false
                    break;
                }
            }
            if (Prime) {
                setShowText(`${x} เป็นจำนวนเฉพาะ`)
            }else{
                setShowText(`${x} ไม่เป็นจำนวนเฉพาะ`)
            }
        } else {
            setShowText(`${x}ไม่เป็นจำนวนเฉพาะ`)
        }
    }


    return (
        <div>
            <MyHeader/>
            <div>
                <div className='My-content'>
                    ขณะนี้เวลา
                    <div>{time}</div>
                    <h2>{num}</h2>
                    <button onClick={
                        () => {
                            const x = num + 1
                            setNum(x)
                            CheckNumToShow(x)
                        }
                    }>เพิ่ม</button>
                    <button onClick={
                        () => {
                            const y = num - 1
                            setNum(y)
                            CheckNumToShow(y)
                        }
                    }>ลด</button>
                    <p>{showtext}</p>
                </div>

            </div>


            <MyFooter/>
        </div>

    );
}

export default App;
