import React, { useRef } from 'react'

const MediaSelect = ({ setFile }) => {
    const inputRef = useRef(null);

    const fileUpload = () => {
        inputRef.current.click();
    }

    const set = (event) => {
        setFile(event.target.files[0]);
    }

    return (
        <>
            <button onClick={fileUpload}>ファイル添付</button>
            <input
                hidden
                type="file"
                ref={inputRef}
                accept="image/*, video/*"
                onChange={set} />
        </>
    );
}

export default MediaSelect;