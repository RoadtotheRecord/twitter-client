import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReplaceLineBody from './ReplaceLineBody';
import AddTweetText from './AddTweetText';

const TimeLineGet = (props) => {
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(props.url + "?count=20");
            setData({ hits: result.data});
        };
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.lastId]);

    const addTweet = (tweetId) => {
        props.setAddId(tweetId)
    } 

    const destroyTweet = (tweetId) => {
        axios.post(props.url + "/destroy", { "id": tweetId })
        .then((res) => {
            props.setLastId(res.data.id);
        })
        .catch(console.error);
    }

    return (
        <>
            {data.hits.map((item, index) =>(
                <div key={index}>
                    <hr className="border" />
                    <AddTweetText url={props.url} addId={item.in_reply_to_status_id_str} />
                    <div className="contents">
                        <div className="imageDiv">
                            <img 
                                className="image"
                                alt="profile"
                                src={item.user.profile_image_url_https} />
                        </div>
                        <div className="textDiv">
                            <span className="userName">
                                    {item.user.name}
                            </span>
                            <span className="userId">
                                    @{item.user.screen_name}
                            </span>
                            <div className="tweetText">
                                    <ReplaceLineBody item={item} />
                            </div>
                            <button
                                type="button"
                                disabled={props.addId === item.id_str}
                                onClick={() => addTweet(item.id_str)}>
                                    このツイートに追加
                            </button>
                            <button
                                type="button"
                                onClick={() => destroyTweet(item.id_str)}>
                                    このツイートを削除
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TimeLineGet;