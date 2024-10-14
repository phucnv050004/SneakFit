import { useState } from "react";

const Evaluate = () => {
  const [activeTab, setActiveTab] = useState("paymentPolicy");
  // Nội dung của các tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "paymentPolicy":
        return (
          <div>
            <p>
              Chính sách thanh toán: Chấp nhận thanh toán qua thẻ Visa,
              MasterCard, và các loại ví điện tử.
            </p>
          </div>
        );
      case "returnPolicy":
        return (
          <div>
            <p>
              Chính sách đổi trả: Đổi trả miễn phí trong 7 ngày kể từ khi nhận
              hàng nếu phát hiện lỗi từ nhà sản xuất.
            </p>
          </div>
        );
      case "comments":
        return (
          <div>
            <h3 className="text-lg font-bold">ĐÁNH GIÁ SẢN PHẨM</h3>
            <p>Giày rất đẹp - Dũng - 23/09/2022</p>
            <p>Giày đẹp lắm.</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      {/* Tabs */}
      <div className="container mt-10 px-20 mx-auto  ">
        <div className="mt-10 mb-10 w-full mr-10 p-4 border rounded-lg shadow-lg bg-white">
          <div className="flex border-b">
            <button
              className={`px-4 py-2 ${activeTab === "paymentPolicy" ? "border-b-2 border-blue-500" : ""}`}
              onClick={() => setActiveTab("paymentPolicy")}
            >
              Chính sách thanh toán
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "returnPolicy" ? "border-b-2 border-blue-500" : ""}`}
              onClick={() => setActiveTab("returnPolicy")}
            >
              Chính sách đổi trả
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "comments" ? "border-b-2 border-blue-500" : ""}`}
              onClick={() => setActiveTab("comments")}
            >
              Bình luận
            </button>
          </div>

          {/* Nội dung của tab */}
          <div className="mt-4 p-4 border rounded-lg bg-white">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Evaluate;
