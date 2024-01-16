// import React from 'react'
// // import { NavLink } from 'react-router-dom'
// // import { PRODUCTS } from '../../Static'
// function Product({data}) {
//   return (
//     <div>
//       {

//       data?.map((el)=>    <div key={el.id} className="">
//         <img width={130} src={el.url} alt="" />
//         <p>{el.title}</p>
//       </div> )
//       }
//        {/* {

//     data?.map((el)=>   <div key={el.id} className="cart">
//      <NavLink to={`/product/${el.id}`}>

//      <img src={el.url} width={130} alt="" />
//      </NavLink>
// <p>{el.title}</p>

//     </div>
//      )
//     } */}
//     </div>
//   )
// }

// export default Product




import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Product.css"
import { HiStar } from "react-icons/hi2";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


function Products({ data }) {
  return (
    <div className="products__wrapper">
      {data?.map((el) => (
        <div key={el.id} className="products__card">
          <Link to={`product/${el.id}`} className="products__image">
            <img width={170} src={el.url} alt="" />
          </Link>
          <div className="products__body">
            <p className="products__title">{el.title}</p>
            <br />
            <div className="star">
              <HiStar style={{ color: "#FE7300" }} />
              <HiStar style={{ color: "#FE7300" }} />
              <HiStar style={{ color: "#FE7300" }} />
              <HiStar style={{ color: "#FE7300" }} />
              <HiStar style={{ color: "#FE7300" }} />
            </div>
            <p className="products__price">{el.price?.toLocaleString()} so'm</p>
            <div style={{ flex: 1 }} className="with">
              <span className="products__monthly">
                {(el.price * 1.5 / 12)?.toLocaleString()} so'm x 12 oy
              </span>
            </div>
            {/* <del>{(el.price * 1.2)?.toLocaleString()} so'm</del> */}
            {/* <p className="products__price">{el.price?.toLocaleString()} so'm</p> */}
            <div className="xarid">
              <button className="xozir">

                Xoziroq harid qilish
              </button>
            </div>
          </div>
          <div className="products__wishes">
            <FaRegHeart />
          </div>
          <div className="products__cart">
            <PiShoppingCartSimpleFill style={{ color: "#fff" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;

