import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
        width: '40px', // Kích thước của nút
        height: '40px',
        lineHeight: '50px', // Canh giữa nội dung theo chiều dọc
        color: 'white', // Màu văn bản
        borderRadius: '50%', // Làm nút thành hình tròn
        display: 'flex', // Sử dụng flexbox để căn giữa nội dung
        alignItems: 'center', // Căn giữa theo chiều dọc
        justifyContent: 'center', // Căn giữa theo chiều ngang
        zIndex: 1000, // Đảm bảo nút nằm trên các phần tử khác
        cursor: 'pointer' // Con trỏ chuột để dễ sử dụng
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
const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }

  return (
    <div className='mx-auto max-w-[1900px] -mt-10 mb-10'>
      <div className='mx-auto px-4 lg:px-[75px]'>
        <div className='sectionHeading text-center mb-8'>
          <h3 className='text-[25px] sm:text-[45px] font-normal text-black'>Bài viết</h3>
        </div>
        <div className='sectionContent'>
          <Slider {...settings}>
            {/* Item 1 */}
            <div className='item-category p-3'>
              {' '}
              <div className='media-category effect-image'>
                <a href='#' aria-label=' Hướng dẫn cách phân biệt Air Jordan 1 '>
                  <img
                    className='w-full'
                    src='https://file.hstatic.net/200000525917/article/untitled_design__22__fb23feecd3a_6de29e794b704d25ab33dfa9de4bd05c_large.jpg'
                    alt=' Hướng dẫn cách phân biệt Air Jordan 1 '
                  />
                </a>
              </div>
              <div className='title-category text-center mt-4'>
                <h4 className='text-xl font-medium'>
                  <a href='#' className='text-black no-underline font-normal' aria-label=' Hướng dẫn cách phân biệt Air Jordan 1 '>
                     Hướng dẫn cách phân biệt Air Jordan 1 
                  </a>
                </h4>
              </div>
            </div>
            {/* Item 2 */}
            <div className='item-category p-3'>
              {' '}
              <div className='media-category effect-image'>
                <a href='#' aria-label=' Hướng dẫn cách phân biệt Air Jordan 1 '>
                  <img
                    className='w-full'
                    src='https://file.hstatic.net/200000525917/article/authentic_shoes__11__8eb51911327_b78fecb4a233469e9337bc7c18873013_large.jpg'
                    alt=' Hướng dẫn cách phân biệt Air Jordan 1 '
                  />
                </a>
              </div>
              <div className='title-category text-center mt-4'>
                <h4 className='text-xl font-medium'>
                  <a href='#' className='text-black no-underline font-normal' aria-label='Không gian phòng khách'>
                  Hướng dẫn cách phân biệt Air Jordan 1
                  </a>
                </h4>
              </div>
            </div>
            {/* Item 3 */}
            <div className='item-category p-3'>
              {' '}
              <div className='media-category effect-image'>
                <a href='#' aria-label='Hướng dẫn cách phân biệt Air Jordan 1'>
                  <img
                    className='w-full'
                    src='https://file.hstatic.net/200000525917/article/authentic_shoes__11__8eb51911327_b78fecb4a233469e9337bc7c18873013_large.jpg'
                    alt='Hướng dẫn cách phân biệt Air Jordan 1'
                  />
                </a>
              </div>
              <div className='title-category text-center mt-4'>
                <h4 className='text-xl font-medium'>
                  <a href='#' className='text-black no-underline font-normal' aria-label='Hướng dẫn cách phân biệt Air Jordan 1'>
                    Hướng dẫn cách phân biệt Air Jordan 1
                  </a>
                </h4>
              </div>
            </div>
            {/* Item 4 */}
            <div className='item-category p-3'>
              {' '}
              <div className='media-category effect-image'>
                <a href='#' aria-label='Hướng dẫn cách phân biệt Air Jordan 1'>
                  <img
                    className='w-full'
                    src='https://file.hstatic.net/200000525917/article/authentic_shoes__11__8eb51911327_b78fecb4a233469e9337bc7c18873013_large.jpg'
                    alt='Hướng dẫn cách phân biệt Air Jordan 1'
                  />
                </a>
              </div>
              <div className='title-category text-center mt-4'>
                <h4 className='text-xl font-medium'>
                  <a href='#' className='text-black no-underline font-normal' aria-label='Hướng dẫn cách phân biệt Air Jordan 1'>
                    Hướng dẫn cách phân biệt Air Jordan 1
                  </a>
                </h4>
              </div>
            </div>
            {/* Item 5 */}
            <div className='item-category p-3'>
              {' '}
              <div className='media-category effect-image'>
                <a href='#' aria-label='Hướng dẫn cách phân biệt Air Jordan 1'>
                  <img
                    className='w-full'
                    src='https://file.hstatic.net/200000525917/article/authentic_shoes__11__8eb51911327_b78fecb4a233469e9337bc7c18873013_large.jpg'
                    alt='Hướng dẫn cách phân biệt Air Jordan 1'
                  />
                </a>
              </div>
              <div className='title-category text-center mt-4'>
                <h4 className='text-xl font-medium'>
                  <a href='#' className='text-black no-underline font-normal' aria-label='Hướng dẫn cách phân biệt Air Jordan 1'>
                    Hướng dẫn cách phân biệt Air Jordan 1
                  </a>
                </h4>
              </div>
            </div>
            {/* Item 6 */}
            <div className='item-category p-3'>
              {' '}
              <div className='media-category effect-image'>
                <a href='#' aria-label='Hướng dẫn cách phân biệt Air Jordan 1'>
                  <img className='w-full' src='https://file.hstatic.net/200000525917/article/authentic_shoes__11__8eb51911327_b78fecb4a233469e9337bc7c18873013_large.jpg' alt='Hướng dẫn cách phân biệt Air Jordan 1' />
                </a>
              </div>
              <div className='title-category text-center mt-4'>
                <h4 className='text-xl font-medium'>
                  <a href='#' className='text-black no-underline font-normal' aria-label='Hướng dẫn cách phân biệt Air Jordan 1'>
                    Hướng dẫn cách phân biệt Air Jordan 1
                  </a>
                </h4>
              </div>
            </div>
            {/* Các item khác */}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Category
