import { useCart } from "@/contexts/cart";
import { useUser } from "@/contexts/user";
import Cart from "@/pages/website/home/_components/CartHome";
import {
  DownOutlined,
  MailOutlined,
  MehOutlined,
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Typography } from "@mui/material";

import {
  Button,
  Divider,
  Drawer,
  Dropdown,
  GetProps,
  Input,
  MenuProps,
  Space,
  theme,
} from "antd";

import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const { useToken } = theme;

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('user')
    toast.success('Đăng xuất thành công!')
    setUser(null)
  }
  const { cart } = useCart();

  const cartQuantity = useMemo(
    () =>
      cart
        ? cart.products.reduce((total, { quantity }) => total + quantity, 0)
        : 0,
    [cart]
  );
  const menu: MenuProps["items"] = [
    {
      key: "1",
      label: <span className="text-muted-foreground">Sản phẩm mới</span>,
    },
    {
      key: "2",
      label: <span className="text-muted-foreground">Sản phẩm nổi bật</span>,
    },
    {
      key: "3",
      label: (
        <span className="text-muted-foreground">Chương trình khuyến mãi</span>
      ),
    },
  ];


  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setVisible(true);
    // setOpen(true)
  };
  const show = () => {
    // setVisible(true)
    setOpen(true);
  };
  const onClose = () => {
    setVisible(false);
    setOpen(false);
  };

  const { user, setUser } = useUser();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser?.data?.res?.username || null);
    }
  }, []);
  // const menus: MenuProps['items'] = [
  //   {
  //     key: 'sub1',
  //     label: 'Sản phẩm mới',
  //     children: [
  //       { key: '1', label: 'Nội thất theo yêu cầu' },
  //       { key: '2', label: 'Sản phẩm đặc biệt 2023' },
  //       { key: '3', label: 'Trang trí bếp' }
  //     ]
  //   },
  //   {
  //     key: 'sub2',
  //     label: 'Sản phẩm nổi bật',
  //     children: [
  //       { key: '4', label: 'Trang trí phòng khách' },
  //       { key: '5', label: 'Trang trí phòng ngủ' },
  //       { key: '6', label: 'Sân vườn thoải mái' }
  //     ]
  //   },
  //   {
  //     key: 'sub3',
  //     label: 'Chương trình khuyến mãi',
  //     children: [
  //       { key: '7', label: 'Giảm giá mùa hè' },
  //       { key: '8', label: 'Sale lớn lên tới 49%' }
  //     ]
  //   },
  //   {
  //     key: '9',
  //     label: (
  //       <div className='bg-accent text-accent-foreground p-4 rounded-lg'>
  //         <h3 className='text-xl font-bold'>SPRING SALE</h3>
  //         <p className='text-lg'>HÀNG HIỆU NGẬP TRÀN GIÁ NGÀN YÊU THƯƠNG</p>
  //         <p className='text-2xl font-bold'>
  //           Chỉ từ <span className='text-red-500'>99.000đ</span>
  //         </p>
  //         <p className='text-sm'>1-31.03 | Áp dụng hàng ngàn sản phẩm</p>
  //       </div>
  //     )
  //   }
  // ]
  const users: MenuProps['items'] = user
    ? [
      {
        label: <a href='/profile'>{user.username}</a>, // Hiển thị tên người dùng nếu đăng nhập
        key: '0'
      },
      {
        label: <a href='#'>Đơn hàng</a>, // Liên kết đến trang đơn hàng
        key: '1'
      },
      { type: 'divider' }, // Đường kẻ phân cách
      {
        label: (
          <a href='/' onClick={handleLogout}>
            Đăng xuất
          </a>
        ),
        key: '3'
      }
    ]
    : window.innerWidth < 800
      ? []
      : [
        {
          label: <NavLink to='/register'>Đăng ký</NavLink>,
          key: '1'
        },
        {
          label: <NavLink to='/login'>Đăng nhập</NavLink>,
          key: '2'
        }
      ]
  const { token } = useToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  type SearchProps = GetProps<typeof Input.Search>;
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="sticky bg-white z-50 w-full top-0">
      {/* header */}
      <div
        className={`flex items-center justify-between bg-background shadow-md transition-all duration-500  `}
      >
        <nav className="flex items-center justify-between px-[4%] bg-background w-full   ">
          <div className=" md:w-[80%] md:h-[30%] sm:w-[50%] lg:w-[230px] w-[41%]  ">
            <img
              src="src/assets/logo.png"
              className="w-full md:w-[94%]  sm:w-1/2 lg:w-[80%] lg:h-[50%] md:h-[74px]  "
              alt="đợi tí..."
            />
          </div>
          <div className="hidden md:flex md:items-center space-x-8 mr-20 text-xl md:text-base md:mr-[5px] font-medium">
            <NavLink
              to={"/"}
              className="text-muted hover:text-muted-foreground no-underline text-xl  "
            >
              Trang chủ
            </NavLink>

            <NavLink
              to={"/products"}
              className="bg-white md:items-center md:flex md:justify-between text-muted text-xl  no-underline "
            >
              Sản phẩm
            </NavLink>
            <NavLink
              to={"/articles"}
              className="text-muted hover:text-muted-foreground no-underline text-xl "
            >
              Tin tức
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-muted hover:text-muted-foreground no-underline text-xl "
            >
              Liên hệ
            </NavLink>
            <NavLink
              to={"#"}
              className="text-muted hover:text-muted-foreground no-underline text-xl "
            >
              Thông báo
            </NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <Dropdown
              trigger={["click"]}
              dropdownRender={() => (
                <div style={contentStyle}>
                  <Divider style={{ margin: 0 }} />
                  <Space style={{ padding: 8 }}>
                    <Search
                      className=" w-full"
                      placeholder="tìm kiếm sản phẩm... "
                      onSearch={onSearch}
                      style={{ width: 200 }}
                    />
                  </Space>
                  <br />
                  <Space className=" px-16 py-2 rounded">
                    <Button className="bg-yellow-500">Tìm kiếm</Button>
                  </Space>
                </div>
              )}
            >
              <span onClick={(e) => e.preventDefault()}>
                <Space>
                  <Button shape="circle" icon={<SearchOutlined />} />
                </Space>
              </span>
            </Dropdown>

            <Dropdown menu={{ items: users }} trigger={['click']}>
              <span onClick={(e) => e.preventDefault()}>
                <Space>
                  {user ? (
                    <div className='flex'>
                      <Button shape='circle' className='mt-1.5'>
                        <UserOutlined />
                      </Button>

                    </div>
                  ) : // Nếu không có người dùng đăng nhập, hiển thị icon mặc định
                    window.innerWidth < 800 ? (
                      <Link to={`login`}>
                        <Button shape='circle' icon={<UserOutlined />} />
                      </Link>
                    ) : (
                      <Button shape='circle' icon={<UserOutlined />} />
                    )}
                </Space>
              </span>
            </Dropdown>
            <Typography>
              <Badge badgeContent={cartQuantity} color="error">
                <Cart />
              </Badge>
            </Typography>
            <Button
              className="md:hidden"
              shape="circle"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
          </div>
          <Drawer
            title="DANH MỤC"
            placement="right"
            onClose={onClose}
            open={visible}
            width={320}
          >
            <NavLink
              to={"/"}
              className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
            >
              Trang chủ
            </NavLink>
            <div className="p-2  ">
              <Dropdown menu={{ items: menu }} trigger={["click"]}>
                <span className="text-secondary hover:text-yellow-600">
                  Sản phẩm mới <DownOutlined className="text-xs" />
                </span>
              </Dropdown>
            </div>
            <NavLink
              to={""}
              className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
            >
              Giới thiệu
            </NavLink>
            <NavLink
              to={"/contact"}
              className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
            >
              Tin tức
            </NavLink>
            <NavLink
              to={"#"}
              className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
            >
              Hệ thống cửa hàng
            </NavLink>
            <NavLink
              to={"#"}
              className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
            >
              FAQs
            </NavLink>
            <NavLink
              to={"#"}
              className="block  text-black ml-2 hover:text-yellow-600 mb-6 mt-4 "
            >
              Landing page
            </NavLink>
            <hr />
            <span className="block  text-yellow-600 hover:text-muted-foreground mb-6 mt-4">
              BẠN CẦN HỖ TRỢ ?
            </span>
            <span className="block  text-black hover:text-yellow-600 mb-6 mt-2">
              <PhoneOutlined /> 1900 0091
            </span>
            <span className="block  text-black hover:text-yellow-600 mb-6 mt-2">
              <MailOutlined /> admin@gmail.com
            </span>
          </Drawer>
        </nav>
      </div>
    </div>
  );
};

export default Header;
