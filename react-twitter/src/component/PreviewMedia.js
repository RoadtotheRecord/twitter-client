import React, { useEffect, useState, useRef } from 'react';
import { FileReaderEx } from '../utils/FileReaderEx';
import { LoadVideo, LoadImage } from '../utils/LoadMedia';

const PreviewMedia = ({ file }) => {
    const element = useRef(null);
    const [result, setResult] = useState();

    useEffect(() => {
        const setMedia = async () => {
            if (file) {
                const resultUrl = file.name
                                ? await new FileReaderEx().readAsDataURL(file)
                                : file;
                const elementWidth = element.current.clientWidth;
                const isVideo = resultUrl.startsWith('data:video');
                const media = isVideo ? await LoadVideo(resultUrl) : await LoadImage(resultUrl);
                const mediaWidth = isVideo ? media.videoWidth : media.naturalWidth;
                const setWidth = elementWidth < mediaWidth ? elementWidth : mediaWidth;
                if (isVideo) {
                    setResult(
                        <video 
                            src={resultUrl}
                            width={setWidth}
                            controls />
                    );
                } else {
                    setResult(
                        <img
                            alt="preview"
                            width={setWidth}
                            src={resultUrl} />
                    );
                }
            } else {
                setResult(null);
            }
        }
        setMedia();
    }, [file]);

    return (
        <div ref={element}>{result}</div>
    );
}

export default PreviewMedia;