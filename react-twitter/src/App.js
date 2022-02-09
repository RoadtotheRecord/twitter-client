import React, {useState} from 'react'
import './App.css';
import TimeLineGet from './component/TimeLineGet';
import MediaSelect from './component/MediaSelect';
import PreviewMedia from './component/PreviewMedia';
import PreviewText from './component/PreviewText'
import StatusText from './component/StatusText';
import ButtonTweet from './component/ButtonTweet';
import ButtonReset from './component/ButtonReset';
import AddTweetText from './component/AddTweetText';


const App = () => {
    const URL = process.env.REACT_APP_REST_API_IP + 'twitter';
    const INITIAL_STATUS = "\n#RttR";
    const INITIAL_COUNT = 6;
    const MAX_STATUS = 280;

    const [status, setStatus] = useState(INITIAL_STATUS);
    const [textCount, setTextCount] = useState(INITIAL_COUNT);
    const [disabled, setDisabled] = useState(true);
    const [file, setFile] = useState(null);
    const [addId, setAddId] = useState(null);
    const [lastId, setLastId] = useState(null);

    const reset = () => {
        setDisabled(true);
        setStatus(INITIAL_STATUS);
        setTextCount(INITIAL_COUNT);
        setFile(null);
        setAddId(null);
    }

    return (
        <div className="container">
            <div className="column">
                <StatusText
                    status={status}
                    textCount={textCount}
                    setTextCount={setTextCount}
                    setStatus={setStatus}
                    setDisabled={setDisabled}
                    minCount={INITIAL_COUNT}
                    maxCount={MAX_STATUS} />
                <div>
                    <ButtonTweet
                        disabled={disabled}
                        status={status}
                        addId={addId}
                        file={file}
                        url={URL}
                        setLastId={setLastId}
                        reset={reset} />
                    <MediaSelect
                        setFile={setFile} />
                    <ButtonReset
                        onClick={reset} />
                </div>
                <hr className="border" />
                <AddTweetText 
                    url={URL}
                    addId={addId} />
                <PreviewText textPreview={status} />
                <PreviewMedia file={file} />
                <hr className="border" />
            </div>
            <div className="column">
                <TimeLineGet
                    url={URL}
                    addId={addId}
                    setAddId={setAddId}
                    lastId={lastId}
                    setLastId={setLastId}/>
            </div>
        </div>
    );
}

export default App;
