import MultiLineBody from './MultiLineBody';
import TimeLineMedia from './TimeLineMedia';

const ReplaceLineBody = (props) => {
    let text = props.item.full_text;

    if (props.item.entities.media) {
        text = text.replace(
            props.item.entities.media[0].url, "");
        return (
            <>
                <MultiLineBody
                    body={text}
                    urls={props.item.entities.urls} />
                <TimeLineMedia file={props.item.entities.media[0].media_url_https} />
            </>
        )
    }

    return (
        <MultiLineBody 
            body={text}
            urls={props.item.entities.urls} />
    )
}

export default ReplaceLineBody;