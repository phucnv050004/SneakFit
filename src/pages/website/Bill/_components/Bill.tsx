import { useCart } from "@/contexts/cart";
import { useUser } from "@/contexts/user";
import { useProductCart } from "@/hooks/useProductCart";
import { Field, Form } from "react-final-form";
import axios from "axios";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { InputText } from "@/components/elements/InputText";

type CheckoutFormParams = {
  name: string;
  phone: string;
  address: string;
  note: string;
  payment: string;
  status: string;
  invoiceId: string;
};

const BillPage = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { user } = useUser();
  const { getCartUser } = useProductCart();

  const [shippingFee, setShippingFee] = useState(0);

  const totalPrice = useMemo(
    () =>
      (cart
        ? cart.products.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
          )
        : 0) + shippingFee,
    [cart, shippingFee]
  );

  const onSubmit = async (values: CheckoutFormParams) => {
    if (!user || !cart || !cart?.products.length) return;
    try {
      console.log(cart);
      
      axios
        .post('/orders', {
          ...values,
          products: cart.products,
          user: user._id,
          totalPrice,
        })
        .then((response) => {
          console.log(response);
          navigate(`/check_out_order?orderId=${response.data?.data?._id}`)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    } catch (error) {
      console.error(error);
    }
  };

  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingFee(event.target.value === "shippingFee" ? 30000 : 0);
  };

  return (
    <Container className="mb-10">
      <Form
        onSubmit={onSubmit}
        initialValues={{
          payment: "COD",
        }}
        render={({ handleSubmit, values }) => (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-12 gap-4"
          >
            <div className="col-span-1 md:col-span-7 bg-white p-4 shadow-md rounded">
              <Typography variant="h6" className="font-semibold mb-4">
                Địa Chỉ Giao Hàng
              </Typography>
              <div className="space-y-4">
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label="Họ và tên"
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <Field
                  name="phone"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label="Số điện thoại"
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <Field
                  name="address"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label="Địa chỉ"
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <div className="text-gray-700 text-sm">
                  <p className="font-bold text-lg mb-1">
                    CHÍNH SÁCH THANH TOÁN
                  </p>
                  <p>
                    SneakFit áp dụng các hình thức thanh toán linh hoạt, bao gồm
                    thanh toán online qua thẻ ATM/VISA hoặc qua ví điện tử.
                  </p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>
                      Khách hàng lựa chọn sản phẩm giày yêu thích và thêm vào
                      giỏ hàng.
                    </li>
                    <li>Xác thực đơn hàng qua điện thoại hoặc email.</li>
                    <li>
                      Đồng ý với các điều khoản mua hàng, bao gồm phí vận
                      chuyển.
                    </li>
                    <li>
                      Thanh toán qua thẻ ATM, VISA hoặc ví điện tử như Momo,
                      ZaloPay.
                    </li>
                    <li>
                      Hệ thống SneakFit xác nhận thanh toán và chuẩn bị đơn
                      hàng.
                    </li>
                    <li>
                      Khách hàng kiểm tra sản phẩm và ký xác nhận khi nhận hàng.
                    </li>
                  </ul>
                </div>
                <FormControlLabel
                  control={<Checkbox required />}
                  label="Tôi đã đọc và đồng ý với chính sách thanh toán của SneakFit"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-5 bg-white p-4 shadow-md rounded">
              <Typography variant="h6" className="font-semibold mb-4">
                Tóm tắt đơn hàng
              </Typography>
              <div className="space-y-4">
                {cart?.products.map(({ product, quantity, size }) => (
                  <div
                    key={product._id}
                    className="flex items-center space-x-4"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-12 h-12 object-cover"
                    />

                    <Typography variant="body2">
                      {product.title}
                      <br /> Size: {size}<br /> sl: {quantity}  -{" "}
                      {(product.price * quantity).toLocaleString()} VND
                    </Typography>
                  </div>
                ))}
                <FormControl component="fieldset">
                  <FormLabel component="legend">VẬN CHUYỂN</FormLabel>
                  <RadioGroup
                    defaultValue="contactForShipping"
                    onChange={handleShippingChange}
                  >
                    <FormControlLabel
                      value="contactForShipping"
                      control={<Radio />}
                      label="Vận chuyển thường"
                    />
                    <FormControlLabel
                      value="shippingFee"
                      control={<Radio />}
                      label="Giao hàng hỏa tốc (thêm 30,000 VND)"
                    />
                  </RadioGroup>
                </FormControl>
                <Typography className="text-lg font-semibold">
                  Tổng cộng: {totalPrice.toLocaleString()} VND
                </Typography>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  ĐẶT MUA
                </Button>
              </div>
            </div>
          </form>
        )}
      />
    </Container>
  );
};

export default BillPage;
