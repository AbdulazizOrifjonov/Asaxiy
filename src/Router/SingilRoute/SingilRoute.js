import React from 'react'
import { useParams } from 'react-router-dom'
import { LuMessageSquare } from "react-icons/lu";
import { HiStar } from "react-icons/hi2";
import { IoMdShare } from "react-icons/io";
import { GiBeachBag } from "react-icons/gi";
import "./SingilRoute.css"
function SingilRoute({ data }) {
    const params = useParams()
    const index = data?.find(element => element.id === params.id)
    console.log(index);
    return (
        <div className='container'>

            <div className="singil">
                <div className="singi_left">


                    <div className='singil_route'>
                        <div className="rights">
                            <div className="each">
                                <img width={74} className='foyizsiz' src={index.url} alt="" />

                            </div>
                            <div className="each">
                                <img width={74} className='foyizsiz' src={index.url} alt="" />

                            </div>
                            <div className="each">
                                <img width={74} className='foyizsiz' src={index.url} alt="" />

                            </div>
                            <div className="each">
                                <img width={74} className='foyizsiz' src={index.url} alt="" />

                            </div>
                        </div>
                        <div className="mains">

                            {/* <GoChevronLeft className='ot' /> */}
                            <img className='foyiz' src={index.url} alt="" />
                            {/* <GoChevronRight className='ot' /> */}

                        </div>
                        <div className="rightes">
                            <div className="each">
                                <img width={74} className='foyizsiz' src={index.url} alt="" />

                            </div>
                            <div className="each">
                                <img width={74} className='foyizsiz' src={index.url} alt="" />

                            </div>
                            <div className="each">
                                <img width={74} className='foyizsiz' src={index.url} alt="" />

                            </div>
                            <div className="each">
                                <img width={74} className='foyizsiz' src={index.url} alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="title">

                        <h2 className='hash'>{index.title}</h2>
                        <div className="bitta">
                            <p className='siz'>
                                <div className="again">
                                    <HiStar style={{ color: "#FE7300" }} />
                                    <HiStar style={{ color: "#FE7300" }} />
                                    <HiStar style={{ color: "#FE7300" }} />
                                    <HiStar style={{ color: "#FE7300" }} />
                                    <HiStar style={{ color: "#FE7300" }} />
                                </div>
                                <p className='hovers'> <LuMessageSquare /> 0 ta sharh</p>
                            </p>

                            <div className="ichida">

                                <p className='hover'><IoMdShare /> Ulashish</p>

                            </div>
                        </div>
                        <div className="year">
                            <div className="bittada">

                                <h2 style={{ color: "#D9663B" }}>{index.price} so'm</h2>
                                <span className="products__monthl">
                                    {(index.price * 1.5 / 12)?.toLocaleString()} so'm x 12 oy
                                </span>
                            </div>
                            <div className="starts">

                                <p id='funt'>Brend:
                                    <p style={{ color: "#008DFF" }}>

                                        Honor
                                    </p>
                                    Model: _______
                                    X8b
                                    587+-

                                </p>
                                <p className='simple'>Holati:
                                    <p style={{ color: "#00BFAF" }}>● Sotuvda bor</p>
                                </p>
                            </div>

                        </div>
                        <div className="butn">
                            <button className='savat'> < GiBeachBag />Savatga Qo'shish</button>
                            <button className='border'>Hoziroq harid qilish</button>
                        </div>
                    </div>

                </div>
                <div className="singil_right">
                    <h2>Bo'lib to'lash</h2>
                    <div className="mayli">

                        <div className="ro">
                            <p className='qizil'>6      736 500     so'm</p>
                            <p className='kul'>Oy
                                Oylik to'lov</p>
                        </div>
                        <div className="uyal">
                            <p className='qizil'>12
                                424 900
                                so'm</p>
                            <p className='kul'>
                                Oy
                                Oylik to'lov
                            </p>
                        </div>

                    </div>

                    <div className="hayron">
                        <p>Jami rassrochka miqdor :</p>
                        <p>{index.price}</p>
                    </div>
                    <button className='srazu'>Bo'lib to'lashga olidh</button>


                </div>

            </div>

        </div>
    )
}

export default SingilRoute
