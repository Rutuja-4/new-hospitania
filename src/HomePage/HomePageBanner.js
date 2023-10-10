import React from "react";
import Slider from "react-slick";
import Card from './Card';


const HomePageBanner = () => {
  const cardData = [
    { title: 'Beauty serum', image: 'https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcategory%2Fcategory-6.png&w=640&q=75' },
    { title: 'Covid Mask', image: 'https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcategory%2Fcategory-5.png&w=640&q=75' },
    { title: 'Sport Nutrition', image: 'https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcategory%2Fcategory-4.png&w=640&q=75' },
   
    { title: 'Whey Protein', image: 'https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcategory%2Fcategory-3.png&w=640&q=75' },
    { title: 'Darjeeling Teas', image: 'https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcategory%2Fcategory-2.png&w=640&q=75' },
    { title: 'Tetanus Injection', image: 'https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcategory%2Fcategory-1.png&w=640&q=75' },
   
    { title: 'Hand Sanitizer', image: 'https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcategory%2Fcategory-8.png&w=640&q=75' },
    { title: 'Natural Cream', image: 'https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcategory%2Fcategory-7.png&w=640&q=75' },
   
    // Add more card data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
  };
  return (
    <div>
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <div key={index}>
          <Card title={card.title} image={card.image} link={<h5>View All</h5>} />
        </div>
      ))}
    </Slider>
  </div>
  );
}
export default HomePageBanner;