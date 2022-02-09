import axios from 'axios';

const ButtonTweet = (props) => {
    const tweet = () => {
        const data = {};
        data["status"] = props.status;

        if (props.addId) {
            data["id"] = props.addId;
        }

        if (props.file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const mediaUrl = event.target.result;
                data["media"] = mediaUrl;
                postTweet(data);
            }
            reader.readAsDataURL(props.file);
        } else {
            postTweet(data);
        }
    }
    
    const postTweet = (data) => {
        axios.post(props.url + "/post", data)
        .then((res) => {
            props.setLastId(res.data.id_str);
            props.reset();
        })
        .catch(console.error);
    }

    return (
        <button 
            type="button"
            disabled={props.disabled}
            onClick={tweet}>
            ツイート送信
        </button>
    )
}

export default ButtonTweet;