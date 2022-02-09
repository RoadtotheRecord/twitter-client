import React, {useEffect, useState, useRef} from 'react';

const TimeLineMedia = (props) => {
    const element = useRef(null);
    const [result, setResult] = useState();
    useEffect(() => {
        const setMedia = async () => {
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
                        src={props.file} />
                );
            }
            image.src = props.file;
        }
        setMedia();
    }, [props.file]);
    return (
        <div ref={element}>{result}</div>
    )
}

export default TimeLineMedia;