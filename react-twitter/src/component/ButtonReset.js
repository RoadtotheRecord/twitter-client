const ButtonReset = (props) => {
    return (
        <input 
            type="button"
            value="全てをリセット"
            onClick={props.onClick} />
    );
}

export default ButtonReset;