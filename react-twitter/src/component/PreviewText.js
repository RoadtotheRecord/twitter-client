import React from 'react';
import InsertUrl from './InsertUrl';

const PreviewText = ({ body, urls }) => {
    const texts = body.split('\n').map((item, index) => {
        return (
            <React.Fragment key={index}>
                <InsertUrl 
                    data={item}
                    urls={urls} />
                <br />
            </React.Fragment>
        );
    });

    return <div>{texts}</div>;
};

export default PreviewText;