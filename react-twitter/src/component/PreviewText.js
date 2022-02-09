import MultiLineBody from './MultiLineBody';

const PreviewText = (props) => {
    return (
        <div>
            <MultiLineBody body={props.textPreview} />
        </div>
    )
}

export default PreviewText;