import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewsForm from "@/components/NewsForm";
import { NewsFormParams } from "@/interfaces/TNews";

const AdminAddNews = () => {
  const nav = useNavigate();

  const onSubmit = async (values: NewsFormParams) => {
    try {
      await axios.post("/articles", values); // Đổi đường dẫn API nếu cần
      alert("News added successfully!");
      nav("/admin/news"); // Chuyển hướng về trang danh sách bài viết
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news");
    }
  };

  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h5" sx={{ mt: 9 }} textAlign={"left"}>
          Add News
        </Typography>
        <NewsForm
          onSubmit={onSubmit}
          initialValues={{ isShow: true }}
        />
      </Stack>
    </Container>
  );
};

export default AdminAddNews;
