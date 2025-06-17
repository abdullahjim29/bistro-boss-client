import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// banner images
import bannerImg1 from "../../../../public/assets/home/01.jpg"
import bannerImg2 from "../../../../public/assets/home/02.jpg"
import bannerImg3 from "../../../../public/assets/home/03.png"
import bannerImg4 from "../../../../public/assets/home/04.jpg"
import bannerImg5 from "../../../../public/assets/home/05.png"
import bannerImg6 from "../../../../public/assets/home/06.png"

const Banner = () => {
  return (
    <div className="mb-20">
      <Carousel
      >
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3}/>
        </div>
        <div>
          <img src={bannerImg4} />
        </div>
        <div>
          <img src={bannerImg5} />
        </div>
        <div>
          <img src={bannerImg6}/>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
