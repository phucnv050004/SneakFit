import { Layout, Input, Button } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import ReactPlayer from 'react-player';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="bg-gray-900 text-white py-10 px-4 ">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Đăng ký nhận tin */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold">ĐĂNG KÍ NHẬN TIN</h2>
          <div className="mt-4 flex">
            <Input
              placeholder="Email"
              className="rounded-l-md"
              style={{ backgroundColor: '#222', color: '#fff' }}
            />
            <Button className="bg-black text-white rounded-r-md" type="primary">
              Đăng ký
            </Button>
          </div>
        </div>

        {/* Giới thiệu */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold">GIỚI THIỆU</h2>
          <p className="mt-4">
            WD Shoes Scofield chuyên cung cấp các loại giày authentic với giá cả và ưu đãi nhất thị
            trường.
          </p>
          <p className="mt-4">
            <strong>Địa chỉ:</strong> 59A Âu Cơ, Phường 14, Quận 11, TP. HCM
          </p>
          <p>
            <strong>Số điện thoại:</strong> 0385942049
          </p>
          <p>
            <strong>Email:</strong> vuhuuhanh01@gmail.com
          </p>
        </div>

        {/* Chính sách */}
        <div className="col-span-1 ">
          <h2 className="text-lg font-semibold">CHÍNH SÁCH</h2>
          <ul className="mt-4 space-y-2 -ml-8">
            <li>Hệ thống cửa hàng</li>
            <li>Giới thiệu</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản dịch vụ</li>
          </ul>
        </div>

        <div className="container mx-auto ">
      <h2 className="text-xl font-semibold mb-2">Video Giới Thiệu</h2>
      <ReactPlayer
        url="https://youtu.be/lBpS4FXC51s?si=3hCqDzuSALFRAuDT"
        width="100%"
        height="90%"
        controls={true}  // Hiển thị nút điều khiển video
      />
    </div>
    </div>
      {/* Social icons */}
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
        <div className="mt-4 sm:mt-0">
          <p className="text-center sm:text-left">
            © Copyright 2024 By SneakFit
          </p>
        </div>
        <div className="flex space-x-4 justify-center sm:justify-end mt-4 sm:mt-0">
          <a href="#" className="text-white text-2xl">
            <FacebookOutlined />
          </a>
          <a href="#" className="text-white text-2xl">
            <TwitterOutlined />
          </a>
          <a href="#" className="text-white text-2xl">
            <YoutubeOutlined />
          </a>
          <a href="#" className="text-white text-2xl">
            <InstagramOutlined />
          </a>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
