const SpreadSheetMcView = ({ dataCommentator, dataSchedule }) => {
    const returnMc = (id) => dataCommentator && dataCommentator.hits.map((item, index) => {
        if (id === item['id']) {
            const name = item['twitter'] ? `${item['name']}さん(${item['twitter']})` : `${item['name']}さん`;
            return <div key={index}>{name}</div>;
        }
        return null;
    });

    return (
        <>
            <br />
            <div>MC</div>
            {returnMc(dataSchedule)}
        </>
    );
}

export default SpreadSheetMcView;