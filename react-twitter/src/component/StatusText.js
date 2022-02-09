const StatusText = (props) => {
    const countText = (value) => {
        let count = 0;
        value.split("").forEach(element => {
            // eslint-disable-next-line no-control-regex
            if (element.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
                count += 2;
            } else {
                count++;
            }
        });
        return count;
    }

    const textChange = (value) => {
        let count = countText(value);
        props.setTextCount(count);
        props.setStatus(value);
        if (count > props.minCount && count < props.maxCount) {
            props.setDisabled(false);
        } else {
            props.setDisabled(true);
        }
    }

    return (
        <div>
            <textarea
                className="status"
                value={props.status}
                rows="8"
                onChange={event => textChange(event.target.value)} />
            <br />
            <span className="count">{props.textCount}/{props.maxCount}</span>
            <br />
        </div>
    )
}

export default StatusText;