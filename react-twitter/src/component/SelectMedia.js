import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import PreviewMedia from './PreviewMedia';

const SelectMedia = ({ file, setFile }) => {
    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop, accept: 'image/*, video/*' })
    
    const remove = () => {
        setFile(null);
    }

    if (file) {
        return (
            <>
                <button onClick={remove}>添付解除</button><br />
                <PreviewMedia file={file} />
            </>
        )
    }

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>ここにファイルをドロップしてください</p> :
                <p>ファイルをドラッグ＆ドロップするか、ここをクリックしてファイルを選択します。</p>
            }
        </div>
    )
}

export default SelectMedia;