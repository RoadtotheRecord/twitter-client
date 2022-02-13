const ButtonDestroy = ({ item, setDeleteId }) => {
    const destroyTweet = async () => {
        setDeleteId(item.id_str);
    }

    return (
        <input
            type="button"
            value="このツイートを削除"
            onClick={destroyTweet} />
    );
}

export default ButtonDestroy;