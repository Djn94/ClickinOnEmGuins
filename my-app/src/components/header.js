import React from 'react';
const style = {
    HeaderStyle: {
        background: 'green',
        marginTop: 0,
        height: "25vh",
        textAlign: "center",
        width: "100%",
    }
}
function Header() {
    return (<div style={style.HeaderStyle} className='headerDiv'>
        <h2>this is the header div</h2>
    </div >
    );
}
export default Header;