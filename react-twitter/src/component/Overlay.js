import React, { useEffect, useState, useContext } from 'react';
import { GetStatus, PostDestroy } from '../utils/AxiosEx';
import { ResultContext } from '../App'
import TweetView from './TweetView';

const Overlay = ({ deleteId, setDeleteId, reset }) => {
    const [, setResult] = useContext(ResultContext);
    const [data, setData] = useState(null);

    const OVERLAY_STYLE = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const CONTENT_STYLE = {
        zIndex: 2,
        padding: '1em',
        background: '#fff'
    };
    const ButtonStyle = { marginLeft: '52px' };

    const destroyTweet = async () => {
        const res = await PostDestroy(deleteId);
        setResult(res);
        reset();
    }

    const noDestroyTweet = async () => {
        setDeleteId(null);
    }

    useEffect(() => {
        const fetchData = async () => setData(await GetStatus(deleteId));
        deleteId ? fetchData() : setData(null);
    }, [deleteId]);

    return (
        <>
            {data && <div style={OVERLAY_STYLE}>
                <div style={CONTENT_STYLE}>
                    <TweetView item={data} />
                    <div style={ButtonStyle}>
                        <input
                            type="button"
                            value="ツイートを削除しない"
                            onClick={noDestroyTweet} />
                        <input
                            type="button"
                            value="このツイートを削除"
                            onClick={destroyTweet} />
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Overlay;   