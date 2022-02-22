import React, { useEffect, useState } from 'react';

const RemindOverlay = ({ showBool }) => {
    const [show, setShow] = useState(false);

    const OVERLAY_STYLE = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const CONTENT_STYLE = {
        zIndex: 2,
        padding: '1em',
        background: '#fff'
    };

    const closeWindow = () => {
        setShow(false);
    }

    useEffect(() => {
        setShow(showBool);
    }, [showBool]);

    return (
        <>
            {show && <div style={OVERLAY_STYLE}>
                <div style={CONTENT_STYLE}>
                    <div>
                        もうすぐ出演者が切り替わります。
                        <br />
                        ツイートの準備をお願いします。
                    </div>
                    <div>
                        <input
                            type="button"
                            value="OK"
                            onClick={closeWindow} />
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default RemindOverlay;   