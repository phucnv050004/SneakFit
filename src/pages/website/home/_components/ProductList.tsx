
import { ShoppingCartOutlined } from '@ant-design/icons'
import { FaRegEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <>
      <h2 className='text-center text-[25px] sm:text-[45px] mb-8 mt-10 md:mt-20 text-black'>Sản phẩm mới ra mắt</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-8 mx-[100px] mb-4'>
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <Link to={`/detail`}>
            <div className='relative'>
              <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
              <FaRegEye
                className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
                title='Xem nhanh'
              />
              <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
                -29%
              </span>
            </div>
          </Link>

          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>

        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
        <div className='group overflow-hidden hover:shadow-lg rounded-lg pb-3 '>
          <div className='relative'>
          <div className='flex group-hover:-translate-x-full transition-transform ease-in-out duration-500'>
                <img src='https://product.hstatic.net/200000525917/product/ipad_adidas-forum-exhibit-mid-fo_c13e8d752dda4eb096915727bb1242ce_8b5844d0c5154a49a2a89544492d2b75_grande.jpg' alt='' className='object-cover' />
                <img src='https://product.hstatic.net/200000525917/product/s-l1600_bbd77165290f4f3b9534ae61d3aec45f_20f0515abf154132b4603398c5a5ebcb_grande.jpg' alt='' className='object-cover' />
              </div>
            <FaRegEye
              className='absolute left-[40%] top-[50%] bg-white text-[#6d6565] rounded-full size-7 md:size-8 px-1 py-[2px] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 hover:bg-[#444444] hover:text-white hover:border hover:border-white'
              title='Xem nhanh'
            />
            <span className='absolute top-1 left-1 bg-[#FF0000] px-[5px] py-[2px] text-white text-[12px] rounded'>
              -29%
            </span>
          </div>
          <div className='mx-2 text-center space-y-2 mt-3'>
            <h5>Giày Adidas Forum Exhibit Mid 'Cream Pink' H01922</h5>
            <div className='flex sm:flex-row flex-col items-center justify-center gap-2'>
              <span className='text-[#FF0000] font-semibold'>890,000₫</span>
              <span className='text-[#878c8f] font-light line-through text-[13px]'>1,250,000₫</span>
            </div>
            <button className='flex items-center justify-center gap-1 border border-white hover:border-[#FCA120] rounded-full pl-2 mx-auto'>
              <span className='text-[12px] uppercase font-semibold text-ellipsis '>Thêm vào giỏ</span>
              <div className='p-[6px] bg-[#FCA120] rounded-full'>
                <ShoppingCartOutlined />
              </div>
            </button>
          </div>
        </div>
        {/* End product */}
      </div>
    </>
  )
}

export default ProductList
