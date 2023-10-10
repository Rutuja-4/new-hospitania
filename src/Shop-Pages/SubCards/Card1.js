import React from 'react'
import style from './Card1.module.css'
function Card1() {
  return (
    <>
    <div className={style.mainPage}>
        <div className={style.firstColoumn}>
            <div className={style.imageContainer}>
                    <img src="https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fproduct-1.png&w=640&q=75" alt="" height={400}/>
            </div>
    
        </div>

        <div className={style.secondColoumn}>
            <p className={style.imageTitle}>Hemono tablets - Support the treatment of hemorrhoids</p>
                                <span className="fa fa-star" style={{color:"orange"}}></span>
                                <span className="fa fa-star" style={{color:"orange"}}></span>
                                <span className="fa fa-star" style={{color:"orange"}}></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
        <div style={{fontSize:20, color:'red', marginTop:10, marginBottom:10}}>&#8377;60</div>
        <div > <span className={style.productInfo}>SKU</span> : MB5415</div>
        <div> <span className={style.productInfo}>Category</span> : Sports Nutrition</div>
        <div> <span className={style.productInfo}>Availability</span>: In Stock</div>
        </div>
        
        <div className={style.thirdColoumn}>delivery options</div>
        </div>
    
 </>
  )
}

export default Card1
