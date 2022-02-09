import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReplaceLineBody from './ReplaceLineBody';

const AddTweetText = (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(props.url + "/show?tweet_id=" + props.addId);
            setData(result.data);
        };
        if (props.addId) {
            fetchData();
        } else {
            setData(null);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.addId]);

    return (
        <div>
            {data && <>
                <AddTweetText url={props.url} addId={data.in_reply_to_status_id_str} />
                <ReplaceLineBody item={data} />
                <span>｜</span>
            </>}
        </div>
    )
}

export default AddTweetText;