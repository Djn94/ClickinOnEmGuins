import React from 'react';
const style = {
    HeaderStyle: {
        background: 'green',
        margin: 0,
        height: 125,
        textAlign: "center",
    }
}
function Header() {
    return (<div style={style.HeaderStyle} className='headerDiv'>
        <h2>this is the header div</h2>
    </div >
    );
}
export default Header;