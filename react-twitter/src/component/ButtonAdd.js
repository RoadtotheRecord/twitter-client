const ButtonAdd = ({ id, addId, setAddId }) => {
    const add = () => setAddId(id);
    const remove = () => setAddId(null);

    if (addId === id) {
        return (
            <input
                type="button"
                value="このツイートの追加をやめる"
                onClick={remove} />
        );
    } else {
        return (
            <input
                type="button"
                value="このツイートに追加"
                onClick={add} />
        );
    }
}

export default ButtonAdd;