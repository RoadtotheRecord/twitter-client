import PreviewBody from './PreviewBody';

const TweetView = ({ item }) => {
    const iconWidth = '48px';
    const contentsStyle = { display: 'flex' };
    const iconStyle = { width: iconWidth };
    const imageStyle = { borderRadius: '50%' };
    const mainStyle = {
        marginLeft: '4px',
        marginRight: '4px',
        width: `calc(100% - ${iconWidth})`,
        fontSize: '16px'
    };
    const idStyle = {
        fontSize: '12px',
        color: 'rgb(120, 120, 120)'
    };

    return (
        <div style={contentsStyle}>
            <div style={iconStyle}>
                <img 
                    style={imageStyle}
                    alt="profile"
                    src={item.user.profile_image_url_https} />
            </div>
            <div style={mainStyle}>
                <div>
                    {item.user.name}
                    <span style={idStyle}>
                        @{item.user.screen_name}
                    </span>
                </div>
                <PreviewBody item={item} />
            </div>
        </div>
    );
}

export default TweetView;