import React from 'react';
const style = {
    footerStyle: {
        background: 'blue',
        fontSize: 20,
        color: "black",
        borderTop: "3px solid black",
        textAlign: 'center',
        padding: 20,
        position: "fixed",
        left: "0",
        bottom: "0",
        height: 60,
        width: "100%",
    },
    ghostdiv: {
        display: "block",
        padding: "20px",
        height: 60,
        width: "100%",
    }
}
function Footer() {
    return (
        <div>
            <div style={style.ghostdiv} />
            <div style={style.footerStyle}>
                <span id="copyrightText">Copyright 2019</span>
            </div>
        </div>
    );
}
export default Footer;