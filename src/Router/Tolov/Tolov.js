import React from 'react'
import "./Tolov.css"
function Tolov() {
    return (
        <div className='container'>
            <div className="boxses">

                <div className="tolov">
                    <h2 style={{ color: "#13306A", fontSize: "39px", fontWeight:"200" }}>To'lov</h2>
                    <p style={{color : "#a6a6a6" ,fontSize: "18px"}}>Buyurtma yoki shaxsiy ID raqamingizni bexato <br /> kiriting</p>
                    <input className='inputs'   type="text" placeholder='Namuna: A777 yokiy B999 yokiy M333' />
                    <div className="tastiqlash">

                    <button className='es'>Tastiqlash</button>
                    </div>
                    {/* <br /> */}
                    <div className="bittada">

                    <p className='size'>B - buyurtma uchun</p>
                   
                    <p className='size'>A - akkount uchun</p>
              
                    <p className='size'>M - rassrochkani so'ndirish uchun</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tolov
