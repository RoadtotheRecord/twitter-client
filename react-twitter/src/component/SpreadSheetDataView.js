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
                    <div>{dataSchedule['time']}からのキャスト</div>
                    <SpreadSheetRunnerView
                        dataA={dataA}
                        dataB={dataB}
                        dataC={dataC}
                        dataSchedule={dataSchedule} />
                    <SpreadSheetMcView
                        dataA={dataA}
                        dataB={dataB}
                        dataC={dataC}
                        dataCommentator={dataCommentator}
                        dataSchedule={dataSchedule} />
                    <BorderLine />
                </>
            }
            {nextSchedule && 
                <>
                    <div>{nextSchedule['time']}からのキャスト(次の時間帯)</div>
                    <SpreadSheetRunnerView
                        dataA={dataA}
                        dataB={dataB}
                        dataC={dataC}
                        dataSchedule={nextSchedule} />
                    <SpreadSheetMcView
                        dataA={dataA}
                        dataB={dataB}
                        dataC={dataC}
                        dataCommentator={dataCommentator}
                        dataSchedule={nextSchedule} />
                    <BorderLine />
                </>
            }
            <RemindOverlay showBool={judgeAll()} />
        </>
    );
}

export default SpreadSheetDataView;