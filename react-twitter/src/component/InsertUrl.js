const InsertUrl = ({ data, urls }) => {
    const textCreate = () => {
        return [...Array(3)].map((_, index) => {
            const sliceText = {
                0: data.slice(0, startIndex),
                1: data.slice(startIndex, endIndex),
                2: data.slice(endIndex)
            }
            const text = sliceText[index];
            if (text === urls[urlIndex].url) {
                return (
                    <a
                        key={index}
                        href={urls[urlIndex].expanded_url}>
                        {urls[urlIndex].display_url}
                    </a>
                );
            } else {
                return text
            };
        });
    }

    let urlInclude = false;
    let urlIndex = -1;
    let startIndex = -1;
    let endIndex = -1;
    urls && urls.forEach((item, index) => {
        if (data.indexOf(item.url) !== -1) {
            urlInclude = true;
            urlIndex = index;
            startIndex = data.indexOf(item.url);
            endIndex = data.lastIndexOf(item.url) + item.url.length;
        }
    });

    return <>{urlInclude ? textCreate() : data}</>;
}

export default InsertUrl;