const SpreadSheetMcView = ({ dataA, dataB, dataC, dataCommentator, dataSchedule }) => {
    const returnMc = (id) => dataCommentator && dataCommentator.hits.map((item, index) => {
        if (id === item['id']) {
            const name = item['twitter'] ? `MCは${item['name']}さん(${item['twitter']})` : `MCは${item['name']}さん`;
            return <div key={index}>{name}</div>;
        }
        return null;
    });

    const returnCommentator = (id, data) => {
        let commentator = '';
        dataCommentator && dataCommentator.hits.forEach((item) => {
            item['link_id'].split(',').forEach((child_item) => {
                if (id === child_item) {
                    let runnerData = null;
                    data && data.hits.forEach((groupItem) => {
                        if (groupItem['id'] == id) {
                            runnerData = groupItem
                        }
                    });
                    const gameTitle = runnerData && runnerData['game_title'];
                    const name = item['twitter'] ? `${item['name']}さん(${item['twitter']})` : `${item['name']}さん`;
                    if (commentator) {
                        commentator += `と${name}`;
                    } else {
                        commentator += `${gameTitle}の解説として${name}`;
                    }
                }
            });
        });
        return commentator;
    }

    return (
        <>
            <br />
            <div>また、この時間の本部配信では</div>
            {returnMc(dataSchedule['mc'])}
            <div>{returnCommentator(dataSchedule['group_a'], dataA)}</div>
            <div>{returnCommentator(dataSchedule['group_b'], dataB)}</div>
            <div>{returnCommentator(dataSchedule['group_c'], dataC)}</div>
            <div>にお越し頂いています。</div>
        </>
    );
}

export default SpreadSheetMcView;