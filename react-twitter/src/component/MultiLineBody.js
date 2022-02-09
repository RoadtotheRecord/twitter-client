import React from 'react'

const MultiLineBody = (props) => {
    const texts = props.body.split('\n').map((item, index) => {
        return (
            <React.Fragment key={index}>
                <InsertUrl 
                    item={item}
                    urls={props.urls} />
                <br />
            </React.Fragment>
        );
    });
    return <span>{texts}</span>;
};

const InsertUrl = (props) => {
    let urlInclude = false;
    let urlIndex = -1;
    let startIndex = -1;
    let endIndex = -1;
    for (const index in props.urls) {
        if (props.item.indexOf(props.urls[index].url) !== -1) {
            urlInclude = true;
            urlIndex = index;
            startIndex = props.item.indexOf(props.urls[index].url);
            endIndex = props.item.lastIndexOf(props.urls[index].url) + props.urls[index].url.length;
        }
    }

    let texts = null;
    if (urlInclude) {
        texts = [...Array(3)].map((_, i) => {
            let text = "";
            switch (i) {
                case 0:
                    text = props.item.slice(0, startIndex);
                    break;
                case 1:
                    text = props.item.slice(startIndex, endIndex);
                    break;
                case 2:
                    text = props.item.slice(endIndex);
                    break;
                default:
                    break;
            }
            return insert(i, text, props.urls[urlIndex]);
        });
    } else {
        texts = props.item;
    }
    return <>{texts}</>
}

const insert = (index, text, urls) => {
    if (text === urls.url) {
        return (
            <a
                key={index}
                href={urls.expanded_url}>
                {urls.display_url}
            </a>
        );
    } else {
        return text
    }
}

export default MultiLineBody;