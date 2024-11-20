// import{useState, useEffect} from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Home = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(()=>{
//         axios('https://jsonplaceholder.typicode.com/users')
//         .then(({data}) => setUsers(data))
//     }, [])
//     return (
//         <div>
//             <h1>Home</h1>
//             {
//                 users.map(item =>{
//                     return <h1><Link to={`/user/${item.id}`}>{item.name}</Link></h1>
//                 })
//             }
//         </div>
//     );
// }

// export default Home;
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
   


const Home = () => {
    
    return (
        <div className='container'>
        <h1>Home</h1>
        <Link className='home-link' to={'/page1'}>Page 1</Link>
        <Link className='home-link' to={'/page2'}>Page 2</Link>
        </div>
    );
}

export default Home;