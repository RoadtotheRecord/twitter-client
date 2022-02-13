import React, { useContext } from 'react';
import { PostStatus } from '../utils/AxiosEx';
import { FileReaderEx } from '../utils/FileReaderEx';
import { ResultContext } from '../App'

const ButtonTweet = ({ status, addId, file, disabled, reset }) => {
    const [, setResult] = useContext(ResultContext);

    const tweet = async () => {
        const data = {};
        data['status'] = status;
        data['id'] = addId && addId;
        data['media'] = file && await new FileReaderEx().readAsDataURL(file);

        const res = await PostStatus(data);
        setResult(res);
        reset();
    }

    return (
        <input 
            type="button"
            value="ツイート送信"
            disabled={disabled}
            onClick={tweet} />
    );
}

export default ButtonTweet;