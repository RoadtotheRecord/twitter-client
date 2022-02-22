import React, { useEffect, useState } from 'react';
import { GetSheet, ReloadSheet } from '../utils/AxiosEx';
import BorderLine from './BorderLine';
import RemindOverlay from './RemindOverlay';
import SpreadSheetMcView from './SpreadSheetMcView';
import SpreadSheetRunnerView from './SpreadSheetRunnerView';

const SpreadSheetDataView = ({ dataSchedule, nextSchedule, nowDate }) => {
    const [dataA, setDataA] = useState(null);
    const [dataB, setDataB] = useState(null);
    const [dataC, setDataC] = useState(null);
    const [dataCommentator, setDataCommentator] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await ReloadSheet();
            setDataCommentator({ hits: await GetSheet('Commentator') });
            setDataA({ hits: await GetSheet('GroupA') });
            setDataB({ hits: await GetSheet('GroupB') });
            setDataC({ hits: await GetSheet('GroupC') });
        };
        fetchData();
    // eslint-disable-next-line
    }, []);

    const judge = (judgeName) => {
        if (dataSchedule && nextSchedule) {
            return dataSchedule[judgeName] !== nextSchedule[judgeName]
        } else if (!dataSchedule) {
            return true;
        }
        return false;
    }

    const judgeAll = () => {
        if (dataSchedule && nextSchedule) {
            const mc = dataSchedule['mc'] !== nextSchedule['mc'];
            const groupA = dataSchedule['group_a'] !== nextSchedule['group_a'];
            const groupB = dataSchedule['group_b'] !== nextSchedule['group_b'];
            const groupC = dataSchedule['group_c'] !== nextSchedule['group_c'];
            const show = mc || groupA || groupB || groupC;
            const time = nowDate.getMinutes() >= 45;
            const result = show && time;
            return result;
        } else if (!dataSchedule) {
            if (!nextSchedule) return false;
            return true;
        }
        return false;
    }

    return (
        <>
            {dataSchedule && 
                <>
                    <div>{dataSchedule['time']}現在のキャスト</div>
                    <SpreadSheetMcView dataCommentator={dataCommentator} dataSchedule={dataSchedule['mc']} />
                    <SpreadSheetRunnerView data={dataA} dataCommentator={dataCommentator} dataSchedule={dataSchedule['group_a']} />
                    <SpreadSheetRunnerView data={dataB} dataCommentator={dataCommentator} dataSchedule={dataSchedule['group_b']} />
                    <SpreadSheetRunnerView data={dataC} dataCommentator={dataCommentator} dataSchedule={dataSchedule['group_c']} />
                    <BorderLine />
                </>
            }
            {nextSchedule && 
                <>
                    <div>{nextSchedule['time']}から出場のキャスト</div>
                    {judge('mc') && <SpreadSheetMcView dataCommentator={dataCommentator} dataSchedule={nextSchedule['mc']} />}
                    {judge('group_a') && <SpreadSheetRunnerView data={dataA} dataCommentator={dataCommentator} dataSchedule={nextSchedule['group_a']} />}
                    {judge('group_b') && <SpreadSheetRunnerView data={dataB} dataCommentator={dataCommentator} dataSchedule={nextSchedule['group_b']} />}
                    {judge('group_c') && <SpreadSheetRunnerView data={dataC} dataCommentator={dataCommentator} dataSchedule={nextSchedule['group_c']} />}
                    <BorderLine />
                </>
            }
            <RemindOverlay showBool={judgeAll()} />
        </>
    );
}

export default SpreadSheetDataView;