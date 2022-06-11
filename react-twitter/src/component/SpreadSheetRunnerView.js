const SpreadSheetRunnerView = ({ dataA, dataB, dataC, dataSchedule }) => {
    const returnRunner = (id, data) => data && data.hits.map((item, index) => {
        if (item['id'] === id) {
            return (
                <div key={index}>
                    <div>{item['game_title']}の{item['runner_name']}さん({item['twitter']})</div>
                </div>
            );
        }
        return null;
    });

    const returnRunnerLink = (id, data) => data && data.hits.map((item, index) => {
        if (item['id'] === id) {
            return (
                <div key={index}>
                    <div>・{item['runner_name']}さん : {item['stream_link']}</div>
                </div>
            );
        }
        return null;
    });

    return (
        <>
            <br />
            <div>現在記録挑戦中なのは</div>
            {returnRunner(dataSchedule['group_a'], dataA)}
            {returnRunner(dataSchedule['group_b'], dataB)}
            {returnRunner(dataSchedule['group_c'], dataC)}
            <div>の3名です。</div>
            <div>応援よろしくお願いします！</div>
            <br />
            <div>先ほど紹介した走者とミラーの配信先は以下になります。</div>
            {returnRunnerLink(dataSchedule['group_a'], dataA)}
            {returnRunnerLink(dataSchedule['group_b'], dataB)}
            {returnRunnerLink(dataSchedule['group_c'], dataC)}
        </>
    );
}

export default SpreadSheetRunnerView;