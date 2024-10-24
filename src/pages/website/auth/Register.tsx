import { Input, Button } from 'antd';

const Register = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4 ">
      <div className="flex flex-col items-center lg:flex-row w-full max-w-6xl">
        {/* Left side */}
        <div className="mb-10 lg:mb-0 lg:mr-16 hidden lg:block text-center lg:text-left">
          <h1 className="text-blue-600 text-4xl md:text-5xl lg:text-6xl font-bold">SneakFit</h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 text-gray-700">
            SneakFit giúp bạn kết nối và chia sẻ <br className="hidden md:block" /> 
            với mọi người trong cuộc sống của bạn.
          </p>
        </div>
        {/* Right side (Register form) */}
        <div className="bg-white shadow-lg p-6 md:p-8 lg:p-12 rounded-lg w-full max-w-lg">
          {/* Display on mobile */}
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 lg:hidden">Đăng ký</h1>
          <Input
            className="mb-4 md:mb-6"
            placeholder="Tên"
            size="large"
          />
          <Input
            className="mb-4 md:mb-6"
            placeholder="Email hoặc số điện thoại"
            size="large"
          />
          <Input.Password
            className="mb-4 md:mb-6"
            placeholder="Mật khẩu"
            size="large"
          />
          <Button type="primary" className="w-full mb-4 h-10 md:h-12 text-lg" size="large">
            Đăng ký
          </Button>
          <a href="#" className="block text-center text-blue-500 mb-4 md:mb-6 text-sm md:text-lg">
           Bạn đã có tài khoản?
          </a>
          <Button type="default" className="w-full h-10 md:h-12 text-lg bg-green-500 text-white" size="large">
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
