import React, { useState, useEffect } from 'react';
import CountText from '../utils/CountText';
import { INITIAL_COUNT, MAX_STATUS } from '../utils/Config';

const InputCount = ({ status, setDisabled }) => {
    const [textCount, setTextCount] = useState(INITIAL_COUNT);

    const countStyle = { float: 'right' };
    
    useEffect(() => {
        const count = CountText(status);
        setTextCount(count);
        count > INITIAL_COUNT && count < MAX_STATUS
        ? setDisabled(false)
        : setDisabled(true);
    }, [status, setDisabled]);

    return (
        <span style={countStyle}>{textCount}/{MAX_STATUS}</span>
    );
}

export default InputCount;