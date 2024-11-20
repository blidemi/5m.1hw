// import React from 'react';
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

// const Header = () => {
//     return (
//     <header
//     style={{
//       display: 'flex',
//       justifyContent: 'space-around',
//       padding: '30px',
//       backgroundColor: 'pink'
//   }}> 
//       <Link to={'/'}><h1 className='logo'>Logo</h1></Link>
//       <Link to={'./page1'}>Page1</Link>
//       <Link to={'./page2'}>Page2</Link>
//       {/* <Link to={'./page3'}>Page3</Link> */}
//     </header>
//     );
// }

// export default Header;
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Header = () => {
    return (
        <header >
        <Link className='logo' to={'/'}>Logo</Link>
        <Link className='header' to={'/'}>Home</Link>
        <Link className='header' to={'/page1'}>Page 1</Link>
        <Link className='header' to={'/page2'}>Page 2</Link>
    
      </header>
    );
}

export default Header;