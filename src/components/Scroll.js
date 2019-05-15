import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '500px', border: '1px solid black'}}>
            {props.children}
        </div>
    );
}

export default Scroll;