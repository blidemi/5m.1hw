// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import Home from './Home';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
// import Header from './Header';


// function App() {
//   return (
//     <BrowserRouter>
//     <Header/>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/page1' element={<Page1/>}/>
//       <Route path='/page2' element={<Page2/>}/>
//       <Route path='/user/:id' element={<Page3/>}/>
//     </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Header from './Header';
import './style.css';


function App() {
  return (
    <BrowserRouter> 
       <Header/>
       <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;