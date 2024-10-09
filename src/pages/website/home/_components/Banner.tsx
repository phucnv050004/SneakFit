import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import './css.css'
interface ArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
const CustomPrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} slick-prev`}
      style={{
        ...style,
        width: '40px', 
        height: '40px',
        lineHeight: '50px',
        color: 'white', 
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center', 
        zIndex: 1000, 
        cursor: 'pointer' 
      }}
      onClick={onClick}
    ></div>
  )
}

const CustomNextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} slick-next`}
      style={{
        ...style,
        width: '40px',
        height: '40px',
        lineHeight: '40px',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        cursor: 'pointer'
      }}
      onClick={onClick}
    ></div>
  )
}
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <Slider {...settings} autoplay >
      <div>
        <img src="https://file.hstatic.net/200000525917/file/slider-2_0521f8e897684645afb606cebb3d0716_master.jpg" className="w-full" alt="" />
      </div>
      <div>
       <img src="https://file.hstatic.net/200000525917/file/slider-1_9eff1f1dc2134a61a5cc3b4f619e4075_master.jpg" className="w-full " alt="" />
      </div>
     
    </Slider>
  );
}