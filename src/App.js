import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Router/Home/Home';
import Login from './Router/Login/Login';
import Wishes from './Router/Wishes/Wishes';
import Cart from './Router/Cart/Cart';
import SupHeadder from './Components/Sup-header/SupHeadder';
// import Navbar from './Components/Navbar/Navbar';
import { PRODUCTS } from './Static';
import Tolov from './Router/Tolov/Tolov';
// import Footer from './Components/Footer/Footer';
import SingilRoute from './Router/SingilRoute/SingilRoute';

function App() {
  return (
    <div className="App">
      {/* <Navbar data={PRODUCTS} /> */}
      <SupHeadder />
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS} />} />
        <Route path='login' element={<Login />} />
        <Route path='wishes' element={<Wishes />} />
        <Route path='cart' element={<Cart />} />
        <Route path='tolov' element={<Tolov />} />
        <Route path='product/:id' element={<SingilRoute data={PRODUCTS} />} />




      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;







// import { useEffect, useState } from "react";

// function App() {
//   const [files, setFiles] = useState();
//   const [previews, setPreviews] = useState();

//   // rendering previews
//   useEffect(() => {
//     if (!files) return;
//     let tmp = [];
//     for (let i = 0; i < files.length; i++) {
//       tmp.push(URL.createObjectURL(files[i]));
//     }
//     const objectUrls = tmp;
//     setPreviews(objectUrls);

//     // free memory
//     return () => {
//       for (let i = 0; i < objectUrls.length; i++) {
//         URL.revokeObjectURL(objectUrls[i]);
//       }
//     };
//   }, [files]);

//   return (
//     <main className="container">
//       <br />
//       <h3>Form with image preview</h3>
//       <input
//         type="file"
//         accept="image/jpg, image/jpeg, image/png"
//         multiple
//         onChange={(e) => {
//           if (e.target.files && e.target.files.length > 0) {
//             setFiles(e.target.files);
//           }
//         }}
//       />
//       {previews &&
//         previews.map((pic, index) => {
//           return <img key={index} src={pic} alt={`preview-${index}`} />;
//         })}
//     </main>
//   );
// }

// export default App;
