import React, { useEffect, useState } from 'react';
import { GetStatus } from '../utils/AxiosEx';
import TweetView from './TweetView';

const AddTweetText = ({ addId }) => {
    const [data, setData] = useState(null);

    const lineStyle = { width: '48px', textAlign: 'center' };

    useEffect(() => {
        const fetchData = async () => setData(await GetStatus(addId));
        addId ? fetchData() : setData(null);
    }, [addId]);

    return (
        <>
            {data &&
                <>
                    <AddTweetText addId={data.in_reply_to_status_id_str} />
                    <TweetView item={data} />
                    <div style={lineStyle}>|</div>
                </>
            }
        </>
    );
}

export default AddTweetText;