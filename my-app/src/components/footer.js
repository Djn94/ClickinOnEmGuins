import React from 'react';
const style = {
    footerStyle: {
        background: 'blue',
        height: 75,
        textAlign: "center",
    }
}
function Footer() {
    return (<div style={style.footerStyle} className='footerDiv'>
        <h4>Copyright 2019</h4>
    </div >
    );
}
export default Footer;