import axios from 'axios';
import { TWITTER_API } from './Config'

export const GetTimeline = async () => {
    const result = await axios.get(TWITTER_API + '?count=20');
    const reply_ids = result.data.map(item => item.in_reply_to_status_id_str);
    const setResult = [];
    result.data.forEach(item => {
        if (reply_ids.indexOf(item.id_str) === -1) {
            setResult.push(item);
        }
    });
    return setResult;
}

export const GetStatus = async (tweetId) => {
    const result = await axios.get(TWITTER_API + '/show?tweet_id=' + tweetId);
    return result.data;
}

export const PostStatus = async (data) => {
    const result = await axios.post(TWITTER_API + '/post', data);
    return result.data;
}

export const PostDestroy = async (tweetId) => {
    const result = await axios.post(TWITTER_API + '/destroy', { 'id': tweetId });
    return result.data;
}