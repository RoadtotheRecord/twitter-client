import React, { createContext, useState } from 'react'
import useMedia from 'use-media';
import TimeLineView from './component/TimeLineView';
import MediaSelect from './component/MediaSelect';
import PreviewMedia from './component/PreviewMedia';
import PreviewText from './component/PreviewText'
import InputStatus from './component/InputStatus';
import ButtonTweet from './component/ButtonTweet';
import ButtonReset from './component/ButtonReset';
import AddTweetText from './component/AddTweetText';
import InputCount from './component/InputCount';
import BorderLine from './component/BorderLine';
import Overlay from './component/Overlay';
import SpreadSheetView from './component/SpreadSheetView';
import { INITIAL_STATUS } from './utils/Config';

export const ResultContext = createContext([null, () => {}])

const App = () => {
    const [status, setStatus] = useState(INITIAL_STATUS);
    const [disabled, setDisabled] = useState(true);
    const [file, setFile] = useState(null);
    const [addId, setAddId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [result, setResult] = useState(null);

    const CONTAINER_STYLE = {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'rgb(233, 233, 233)'
    };
    const COLUMN_STYLE = {
        width: useMedia({ minWidth: '767px' })
                ? 'calc(50% - 40px)'
                : 'calc(100% - 40px)',
        padding: '20px'
    };

    const reset = () => {
        setStatus(INITIAL_STATUS);
        setFile(null);
        setAddId(null);
        setDeleteId(null);
    }

    return (
        <div style={CONTAINER_STYLE}>
            <ResultContext.Provider value={[result, setResult]}>
                <div style={COLUMN_STYLE}>
                    <div>
                        <InputStatus
                            status={status}
                            setStatus={setStatus} />
                        <InputCount 
                            status={status}
                            setDisabled={setDisabled} />
                    </div>
                    <div>
                        <ButtonTweet
                            disabled={disabled}
                            status={status}
                            addId={addId}
                            file={file}
                            reset={reset} />
                        <MediaSelect
                            file={file}
                            setFile={setFile} />
                        <ButtonReset
                            onClick={reset} />
                    </div>
                    <BorderLine />
                    <AddTweetText addId={addId} />
                    <PreviewText body={status} />
                    <PreviewMedia file={file} />
                    <BorderLine />
                    <SpreadSheetView />
                </div>
                <div style={COLUMN_STYLE}>
                    <TimeLineView
                        addId={addId}
                        setAddId={setAddId}
                        setDeleteId={setDeleteId} />
                </div>
                <Overlay 
                    deleteId={deleteId}
                    setDeleteId={setDeleteId}
                    reset={reset} />
            </ResultContext.Provider>
        </div>
    );
}

export default App;
