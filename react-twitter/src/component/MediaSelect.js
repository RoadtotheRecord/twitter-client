import React, {useRef} from 'react'

const MediaSelect = (props) => {
    const inputRef = useRef(null);

    const fileUpload = () => {
        inputRef.current.click();
    };

    return (
        <>
            <button onClick={fileUpload}>ファイル添付</button>
            <input
                hidden
                type="file"
                ref={inputRef}
                accept="image/*, video/*"
                onChange={event => props.setFile(event.target.files[0])} />
        </>
    )
}

export default MediaSelect;