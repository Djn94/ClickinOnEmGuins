import React from 'react';
const style = {
    navStyle: {
        background: 'yellow',
        height: 60,
        marginTop: 0,
        paddingTop: 0,
        textAlign: "right",
    }
}
function Navbar() {
    return (
        <nav style={style.navStyle} >
            <p>this is the navbar div</p></nav>

    );
}
export default Navbar;