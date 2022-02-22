import React, { useEffect, useState } from 'react';
import { GetSheet } from '../utils/AxiosEx';
import SpreadSheetDataView from './SpreadSheetDataView';
import TimerView from './TimerView';

const SpreadSheetView = () => {
    const [dataSchedule, setDataSchedule] = useState(null);
    const [nextSchedule, setNextSchedule] = useState(null);
    const [nowDate, setNowDate] = useState(null);
    const [diffHour, setDiffHour] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (nowDate) {
                const schedule = await GetSheet('Schedule');
                schedule.forEach((item) => {
                    const nowDay = `${nowDate.getMonth() + 1}/${nowDate.getDate()}`;
                    const nowHour = `${nowDate.getHours()}:00`;
                    const nextHour = `${nowDate.getHours() + 1}:00`;
                    if (item['day'] === nowDay && item['time'] === nowHour) {
                        setDataSchedule(item);
                    } else if (item['day'] === nowDay && item['time'] === nextHour) {
                        setNextSchedule(item);
                    }
                });
            }
        };
        fetchData();
    // eslint-disable-next-line
    }, [diffHour]);

    return (
        <>
            <TimerView nowDate={nowDate} setNowDate={setNowDate} setDiffHour={setDiffHour} />
            <SpreadSheetDataView dataSchedule={dataSchedule} nextSchedule={nextSchedule} nowDate={nowDate} />
        </>
    );
}

export default SpreadSheetView;