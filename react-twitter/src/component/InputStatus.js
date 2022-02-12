const InputStatus = ({ status, setStatus }) => {
    const textareaStyle = { width: '99%' };

    const set = (event) => {
        setStatus(event.target.value);
    }

    return (
        <>
            <textarea
                style={textareaStyle}
                value={status}
                rows="8"
                onChange={set} />
        </>
    );
}

export default InputStatus;