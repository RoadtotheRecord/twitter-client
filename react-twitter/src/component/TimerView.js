import React, { useEffect } from 'react';
import BorderLine from './BorderLine';

const TimerView = ({ nowDate, setNowDate, setDiffHour }) => {
    useEffect(() => {
        const timer = setInterval(() => {
            let setDate = new Date();
            setNowDate(setDate);
            setDiffHour(setDate.getHours());
        }, 1000);
        return () => clearInterval(timer);
    // eslint-disable-next-line
    }, []);

    return (
        <>
            {nowDate &&
                <>
                    <div>今の時刻 = {nowDate.toLocaleString()}</div>
                    <BorderLine />
                </>
            }
        </>
    );
}

export default TimerView;