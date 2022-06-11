import React, { useEffect } from 'react';

const ButtonUrl = ({ twitchUrl, setTwitchUrl, reset }) => {

    const setTrue = () => {
        setTwitchUrl(true);
    }

    const setFalse = () => {
        setTwitchUrl(false);
    }

    useEffect(() => {
        reset();
    }, [twitchUrl]);

    if (twitchUrl) {
        return (
            <input 
                type="button"
                value="DiscordURLに変更してリセット"
                onClick={setFalse} />
        );
    } else {
        return (
            <input 
                type="button"
                value="TwitchURLに変更してリセット"
                onClick={setTrue} />
        );
    }
}

export default ButtonUrl;