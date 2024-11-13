import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notification, Form, Input, Button, Switch } from "antd";
import { NewsFormParams } from "@/interfaces/TNews";

const AdminAddNews = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();

  const onSubmit = async (values: NewsFormParams) => {
    try {
      await axios.post("/articles", values);
      notification.success({
        message: "Thêm bài viết thành công!",
      });
      nav("/admin/news");
    } catch (error) {
      console.error("Error adding news:", error);
      notification.error({
        message: "Không thể thêm bài viết",
      });
    }
  };

  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h5" sx={{ mt: 9 }} textAlign="left">
          Thêm Bài Viết
        </Typography>
        
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          initialValues={{ isShow: true }}
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
          >
            <Input placeholder="Nhập tiêu đề bài viết" />
          </Form.Item>

          <Form.Item
            label="Tác giả"
            name="author"
            rules={[{ required: true, message: "Vui lòng nhập tên tác giả!" }]}
          >
            <Input placeholder="Nhập tên tác giả" />
          </Form.Item>

          <Form.Item
            label="Nội dung"
            name="content"
            rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
          >
            <Input.TextArea rows={4} placeholder="Nhập nội dung bài viết" />
          </Form.Item>

          <Form.Item label="Ảnh" name="images">
            <Input placeholder="Nhập URL ảnh" />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Thêm Bài Viết
            </Button>
          </Form.Item>
        </Form>
      </Stack>
    </Container>
  );
};

export default AdminAddNews;
