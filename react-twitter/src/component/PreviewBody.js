import PreviewText from './PreviewText';
import PreviewMedia from './PreviewMedia';

const PreviewBody = ({ item }) => {
    const text = item.entities.media
                ? item.full_text.replace(
                    item.entities.media[0].url, '')
                : item.full_text;
    const file = item.entities.media
                ? item.entities.media[0].media_url_https
                : null;

    return (
        <>
            <PreviewText
                body={text}
                urls={item.entities.urls} />
            <PreviewMedia file={file} />
        </>
    );
}

export default PreviewBody;