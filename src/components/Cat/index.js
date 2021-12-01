import React from 'react';

const Cat = ({mouse}) => {
    return (
        <div>
            <p style={{position: 'absolute', left: mouse.x, top: mouse.y,}}>cat</p>
        </div>
    );
}

export default Cat;
