import twttr from 'twitter-text';

const CountText = (value) => {
    return twttr.parseTweet(value).weightedLength;
}

export default CountText;