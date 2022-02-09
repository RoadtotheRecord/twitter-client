import React, {useEffect, useState, useRef} from 'react';

const PreviewMedia = (props) => {
    const element = useRef(null);
    const [result, setResult] = useState();
    useEffect(() => {
        const setMedia = async () => {
            if (props.file) {
                const resultUrl = await new FileReaderEx().readAsDataURL(props.file);
                if (resultUrl.startsWith("data:image")) {
                    const image = new Image();
                    image.onload = () => {
                        let elementWidth = image.naturalWidth;
                        if (element.current.clientWidth < image.naturalWidth) {
                            elementWidth = element.current.clientWidth;
                        }
                        setResult(
                            <img
                                alt="preview"
                                width={elementWidth}
                                src={resultUrl} />
                        );
                    }
                    image.src = resultUrl;
                } else if (resultUrl.startsWith("data:video")) {
                    const video = document.createElement('video');
                    video.onloadedmetadata = () => {
                        let elementWidth = video.videoWidth;
                        if (element.current.clientWidth < video.videoWidth) {
                            elementWidth = element.current.clientWidth;
                        }
                        setResult(
                            <video 
                                src={resultUrl}
                                width={elementWidth}
                                controls />
                        );
                    }
                    video.src = resultUrl;
                }
            } else {
                setResult(null);
            }
        }
        setMedia();
    }, [props.file]);
    return (
        <div ref={element}>{result}</div>
    )
}

class FileReaderEx extends FileReader {
    readAs(blob, ctx){
        return new Promise((res, rej)=>{
            super.addEventListener("load", ({target}) => res(target.result));
            super.addEventListener("error", ({target}) => rej(target.error));
            super[ctx](blob);
        });
    }

    readAsDataURL(blob){
        return this.readAs(blob, "readAsDataURL");
    }
}

export default PreviewMedia;