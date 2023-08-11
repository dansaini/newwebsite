import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img decoding="async" src="images/image1.jpg" alt="Image 1" data-lazy-src="images/image1.jpg" />
        </div>
        <div>
          <img decoding="async" src="images/image2.jpg" alt="Image 2" data-lazy-src="images/image2.jpg" />
        </div>
        <div>
          <img decoding="async" src="images/image3.jpg" alt="Image 3" data-lazy-src="images/image2.jpg" />
        </div>
      </Slider>
    );
  };

  export default ImageSlider;