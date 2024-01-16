import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";
import { RiTruckLine } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { TfiHeart } from "react-icons/tfi";
import uzb from "./uzbekistan (1).png"
import "./Navbar.css"
function Navbar() {

    return (
        <div className="yuz">

            <div className='container'>
                <div className="mazmun">

                    <div className="Navbar">
                        <div className="head">

                            <NavLink to={"/"}>
                                <div className="logo">
                                    <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg        " alt="" />
                                </div>
                            </NavLink>


                            <button className='katalog'><IoIosMenu className='font' /> Bo'limlar</button>
                            <div className='borakan'> sdfghj</div>


                        </div>
                        <div className="input">
                            <input type="text" className='in' />
                            <button className='search'><BiSearchAlt2 style={{ color: "#fff" }} /></button>
                        </div>
                        <div className='borakan'> sdfghj</div>

                        <div className="router">


                            <NavLink to={"tolov"}>
                                {/* <button className='link'> */}
                                    <MdOutlinePayment />
                                    {/* </button> */}
                                To'lov

                            </NavLink>
                            <NavLink to={"/cart"}>
                                {/* <button className='link'> */}
                                    <RiTruckLine />
                                    {/* </button> */}
                                Trek

                            </NavLink>





                            <NavLink to={"/cart"}>
                                {/* <button className='link'> */}
                                    <BsCart3 />
                                    {/* </button> */}
                                Cart
                            </NavLink>
                            <NavLink to={"/wishes"}>
                                {/* <button className='link'> */}
                                    <TfiHeart />
                                    {/* </button> */}
                                Wishes
                            </NavLink>
                            <NavLink to={"/wishes"}>
                                {/* <button className='link'> */}
                                    <img width={20} src={uzb} alt="" />
                                    {/* </button> */}
                                O'zbekcha
                            </NavLink>

                            <NavLink className='br' to={"/login"}>
                                {/* <button className='link'> */}
                                    <BiUser />
                                    {/* </button> */}
                                Kirish
                            </NavLink>

                        </div>


                    </div>
                </div>
            </div>
            <hr />
            <div className="container">



                {/* <div className="Navbar_bottom">
                    <p className='cursor'>Chegirmalar</p>
                    <p className='cursor'>Sport buyumlari1</p>
                    <p className='cursor'>Yangi kelganlar</p>
                    <p className='cursor'>Kitoblar</p>
                    <p className='cursor'>Telefonlar va gadjetlar</p>
                    <p className='cursor'>Noutbuklar</p>
                    <p className='cursor'>Maishiy texnika</p>
                </div> */}
            </div>
        </div>

    )
}

export default Navbar
