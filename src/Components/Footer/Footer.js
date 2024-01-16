import React from 'react'
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import "./Footer.css"
function Footer() {
    return (
        <div className="kattasida">


            <div className='Footer__fool'>
                <div className="container">
                    <div className="footr">
                        <div className="footer_top">
                            <div className="fuut">
                                <img width={50} src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />

                                <div className="jon">



                                    <span className='spna'>
                                        Endi bozorga borishga hojat yo'q
                                    </span>
                                    <p className='pi'>Bizda qulay narxlar va <br /> uyga yetkazib berish <br /> mavjud</p>
                                </div>
                            </div>
                            <div className="foot">
                                <img width={50} src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />

                                <div className="jon">


                                    <span className='spna'>
                                        Tez yetkazib berish
                                    </span>
                                    <p className='pi'>Bizning xizmatimiz sizni <br /> ajablantiradi</p>

                                </div>
                            </div>
                            <div className="foot">
                                <img width={50} src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />

                                <div className="jon">



                                    <span className='spna'>
                                        Siz uchun qulayliklar
                                    </span>
                                    <p className='pi'>Nosozlik yuzaga kelganda <br /> tez rasmiylashtirish va <br /> qaytarish kafolati</p>
                                </div>
                            </div>
                            <div className="foot">
                                <img width={50} src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />

                                <div className="jon">


                                    <span className='spna'>
                                        Bo'lib to'lash
                                    </span>
                                    <p className='pi'>6 yoki 12 oy davomida <br /> oldindan to'lov yo'q</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer__About">
                <div className="code    ">

                    <div className="footer__in">
                        <div className="footer_box">
                            <h2 className='h2'>Ma'lumotlar</h2>
                            <div className="p_ni_ichi">
                                <p className='shagirt'>Ko'p so'raladigan savollar</p>
                                <p className='shagirt'>Olib ketish punktlari</p>
                                <p className='shagirt'>Blog</p>
                                <p className='shagirt'>Bizning brendlarimiz</p>
                                <p className='shagirt'>Ommaviy oferta (Foydalanuvchi bitimi)</p>
                                <p className='shagirt'>Muddatli toʻlov asosida sotib olishning umumiy qoidalari</p>
                                <p className='shagirt'>Biz haqimizda</p>
                            </div>
                        </div>
                        <div className="footer_box">
                            <div className="footer_ha">
                                <h2 className='h2'>Biz bilan aloqa</h2>
                                <div className="p_ni_ichi">
                                    <p className='shagirt'><IoMdCall />
                                        +998935821774</p>
                                    <p className='shagirt'><HiOutlineMail />info@asaxiy.uz</p>
                                    <p className='shagirt'>< MdOutlineLocationOn id='map' /> Islom Karimov, 49, Toshkent</p>
                                </div>
                            </div>
                            <div className="footer_va">
                                <h2 className='h2'>Kitob do'konlarimiz</h2>
                                <p className='shagirt'><MdOutlineLocationOn id='map' /> Asaxiy Novza</p>
                                <p className='shagirt'><MdOutlineLocationOn id='map' /> Asaxiy Farhod bozori </p>
                                <p className='shagirt'><MdOutlineLocationOn id='map' />Asaxiy Panorama </p>
                                <p className='shagirt'><MdOutlineLocationOn id='map' />  Asaxiy Kitob Olami </p>
                            </div>
                        </div>
                        <div className="footer_box">
                            <div className="plan">
                                <h2 className='h2'>Erishgan yutuqlarimiz</h2>
                                <br />
                                <div className="paul">
                                    <p className='shagirt'>"Tahsin" mukofoti</p>
                                    <p className='shagirt'>"Shuhrat" medali</p>
                                    <p className='shagirt'>"Kelajak bunyodkori" medali</p>
                                </div>
                            </div>
                            <div className="Plan_to">
                                <h2 className='h2'>Biz ijtimoiy <br /> tarmoqlarda</h2>
                                <br />
                                <div className="plans">
                                    <BsFacebook />
                                    <FaTelegram />
                                    <FaInstagram />
                                    <FaYoutube />
                                    <FaWifi className='wifi' />
                                </div>
                            </div>
                        </div>
                        <div className="footer_box">
                            <h2 className='h2'>To'lov turlari</h2>
                            <div className="tolovlar">
                                <div className='div'>
                                    <div className="swich">  <img className='vitz' src="https://asaxiy.uz/custom-assets/images/uzum.svg" alt="" /></div>
                                    <div className="swich">  <img className='vitz' src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" /></div>
                                    <div className="swich">  <img className='vitz' src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="" /></div>


                                </div>
                                <div className='div'>
                                    <div className="swich"><img className='vitz' src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" /></div>
                                    <div className="swich"><img className='vitz' src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="" /></div>
                                    <div className="swich"><img width={30} className=' ' src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="" /></div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="have">

                    <h4 className='h2'>2015-2024 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer
