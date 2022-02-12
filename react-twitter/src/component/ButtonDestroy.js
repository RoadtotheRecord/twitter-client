import React, { useContext } from 'react';
import { PostDestroy } from '../utils/AxiosEx';
import { ResultContext } from '../App'

const ButtonDestroy = ({ item }) => {
    const [, setResult] = useContext(ResultContext);

    const destroyTweet = async () => {
        const res = await PostDestroy(item.id_str);
        setResult(res);
    }

    return (
        <input
            type="button"
            value="このツイートを削除"
            onClick={destroyTweet} />
    );
}

export default ButtonDestroy;