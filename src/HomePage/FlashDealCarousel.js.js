import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from '../Shop-Pages/data.json';
import style from '../Style/HomePage.module.css';
import { useNavigate } from 'react-router-dom';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

const FlashDealCarousel = () => {
    const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/shoppage')
  }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    return (
        <div>
            <h5 className={style.cardText}>Flash Deal</h5>
            <Slider {...settings}>
               
                
                    {products.map((product) => (
                        <div className={style.container}>                        
                            <div style={{ margin: "10px", cursor: "pointer" }}>
                            <div className={style.cardImageConatiner} id={style.imageHover}>
                                <img src={product.images} alt="" onClick={handleNavigate} height={180} className={style.cardImage} />
                            </div>

                            <div>
                                <span className="fa fa-star" style={{ color: "orange", fontSize:"12px" }}></span>
                                <span className="fa fa-star" style={{ color: "orange",fontSize:"12px" }}></span>
                                <span className="fa fa-star" style={{ color: "orange",fontSize:"12px" }}></span>
                                <span className="fa fa-star" style={{ fontSize:"12px" }} ></span>
                                <span className="fa fa-star" style={{ fontSize:"12px" }}></span>
                            </div>

                            <div><h6 style={{fontSize: "14px",lineHeight: "18px",fontWeight: "400",
                                             fontFamily: "Poppins,sansSerif",color: "#343a40"}}>{product.description}</h6> </div>
                            <div style={{ fontSize: 14, color: "#A9A9A9" }}>MRP <del>{product.mrp}</del> &nbsp;<span style={{ color: "green" }}>{product.discount}</span></div>
                            <div style={{ fontSize: 20 }}>&#8377;{product.price}</div>
                        </div>
                        </div>

                    ))}
             
                
            </Slider>
        </div>
    )
}
export default FlashDealCarousel
