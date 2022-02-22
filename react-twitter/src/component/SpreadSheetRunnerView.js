const SpreadSheetRunnerView = ({ data, dataCommentator, dataSchedule }) => {
    const returnRunner = (id) => data && data.hits.map((item, index) => {
        if (item['id'] === id) {
            const groupName = `Group${id.slice(0, 1)}`
            const commentator = returnCommentator(item['id']);
            return (
                <div key={index}>
                    <br />
                    <div>{groupName}</div>
                    <div>{item['game_title']}の{item['runner_name']}さん({item['twitter']})</div>
                    <div>・{item['runner_name']}さん : {item['stream_link']}</div>
                    {commentator && 
                        <>
                            <div>解説</div>
                            <div>{commentator}</div>
                        </>
                    }
                </div>
            );
        }
        return null;
    });

    const returnCommentator = (id) => {
        let commentator = '';
        dataCommentator && dataCommentator.hits.forEach((item) => {
            item['link_id'].split(',').forEach((child_item) => {
                if (id === child_item) {
                    const name = item['twitter'] ? `${item['name']}さん(${item['twitter']})` : `${item['name']}さん`
                    if (commentator) {
                        commentator += `と${name}`;
                    } else {
                        commentator += name;
                    }
                }
            });
        });
        return commentator;
    }

    return (
        <>
            {returnRunner(dataSchedule)}
        </>
    );
}

export default SpreadSheetRunnerView;