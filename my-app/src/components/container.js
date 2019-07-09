import React from 'react';
const style = {
    containerStyle: {
        background: 'purple',
        height: 250,
        textAlign: "center",
    }
}
function Container() {
    return (<div style={style.containerStyle} className='containerDiv'>
        <h3>this is the container div</h3>
    </div >
    );
}
export default Container;