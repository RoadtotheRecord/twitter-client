import React, { useEffect, useState, useContext } from 'react';
import { GetTimeline } from '../utils/AxiosEx';
import AddTweetText from './AddTweetText';
import TweetView from './TweetView';
import ButtonAdd from './ButtonAdd';
import ButtonDestroy from './ButtonDestroy';
import BorderLine from './BorderLine';
import { ResultContext } from '../App'

const TimeLineView = ({ addId, setAddId, setDeleteId }) => {
    const [result, ] = useContext(ResultContext);
    const [data, setData] = useState(null);

    const ButtonStyle = { marginLeft: '52px' };

    useEffect(() => {
        const fetchData = async () => {
            setData({ hits: await GetTimeline() });
        };
        fetchData();
    }, [result]);

    const returnData = data && data.hits.map((item, index) => (
        <div
            key={index}>
            <BorderLine />
            <AddTweetText addId={item.in_reply_to_status_id_str} />
            <TweetView item={item} />
            <div style={ButtonStyle}>
                <ButtonAdd
                    id={item.id_str}
                    addId={addId}
                    setAddId={setAddId} />
                <ButtonDestroy
                    item={item}
                    setDeleteId={setDeleteId} />
            </div>
        </div>
    ));

    return (
        <>{returnData}</>
    );
}

export default TimeLineView;