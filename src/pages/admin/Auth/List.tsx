import { TUser } from "@/interfaces/TUser";
import { Button, Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null); // Lưu userId cần xóa

  // Lấy danh sách người dùng
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Xóa người dùng
  const deleteUser = async (userId: string) => {
    try {
      await axios.delete(`/users/${userId}`);
      // Sau khi xóa thành công, gọi lại hàm lấy danh sách người dùng
      getAllUsers();
      setIsModalVisible(false); // Đóng modal sau khi xóa
    } catch (error) {
      console.log("Xóa người dùng thất bại", error);
    }
  };

  // Hiển thị modal xác nhận
  const showDeleteConfirm = (userId: string) => {
    setUserToDelete(userId);
    setIsModalVisible(true);
  };

  // Ẩn modal khi chọn Cancel
  const handleCancel = () => {
    setIsModalVisible(false);
    setUserToDelete(null); // Reset userToDelete
  };

  // Xử lý khi xác nhận xóa
  const handleOk = () => {
    if (userToDelete) {
      deleteUser(userToDelete);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {/* Kiểm tra nếu role không phải là admin thì mới hiển thị nút Xoá */}
                {user.role !== "admin" && (
                  <Button
                    className="bg-red-500"
                    onClick={() => showDeleteConfirm(user._id)} // Hiển thị modal khi nhấn nút
                  >
                    Xoá
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal xác nhận */}
      <Modal
        title="Xác nhận xóa"
        visible={isModalVisible}
        onOk={handleOk} // Xóa người dùng khi nhấn "OK"
        onCancel={handleCancel} // Đóng modal khi nhấn "Cancel"
        okText="Xoá"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa người dùng này không?</p>
      </Modal>
    </div>
  );
}

export default List;
