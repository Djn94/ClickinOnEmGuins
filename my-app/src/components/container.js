import React from 'react';
const style = {
    containerStyle: {
        background: 'purple',
        height: "55vh",
        width: "100%",
        textAlign: "center",
        margin: 0,
        marginTop: 0,
        paddingTop: 0,
    }
}
function Container() {
    return (<div style={style.containerStyle} className='containerDiv'>
        <h3>this is the container div</h3>
    </div >
    );
}
export default Container;