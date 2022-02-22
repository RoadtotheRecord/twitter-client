import axios from 'axios';
import { TWITTER_API, SPREADSHEET_API } from './Config'

export const GetTimeline = async () => {
    const url = `${TWITTER_API}?count=20`;
    const result = await axios.get(url);
    const replyIds = result.data.map(item => item.in_reply_to_status_id_str);
    const setResult = [];
    result.data.forEach(item => {
        if (replyIds.indexOf(item.id_str) === -1) {
            setResult.push(item);
        }
    });
    return setResult;
}

export const GetStatus = async (tweetId) => {
    const url = `${TWITTER_API}/show?tweet_id=${tweetId}`;
    const result = await axios.get(url);
    return result.data;
}

export const PostStatus = async (data) => {
    const url = `${TWITTER_API}/post`;
    const result = await axios.post(url, data);
    return result.data;
}

export const PostDestroy = async (data) => {
    const url = `${TWITTER_API}/destroy`;
    const result = await axios.post(url, data);
    return result.data;
}

export const GetSheet = async (sheetName) => {
    const url = `${SPREADSHEET_API}?sheet_name=${sheetName}`;
    const result = await axios.get(url);
    return result.data;
}

export const ReloadSheet = async () => {
    const url = `${SPREADSHEET_API}/reload`;
    await axios.get(url);
}