const CountText = (value) => {
    if (value) {
        // eslint-disable-next-line no-control-regex
        const matchWord = /^[^\x01-\x7E\xA1-\xDF]+$/;
        const array = value.split('').map(elm => elm.match(matchWord) ? 2 : 1);
        return array.reduce((sum, current) => sum + current);
    }
    return 0
}

export default CountText;