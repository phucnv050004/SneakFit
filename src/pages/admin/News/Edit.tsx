import {
  Container,
  Stack,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { NewsFormParams } from "@/interfaces/TNews";
import NewsForm from "@/components/NewsForm";

const AdminEditNews = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const [newsData, setNewsData] = useState<NewsFormParams | null>(null);

  // Đóng thông báo
  const handleCloseAlert = () => setAlert({ ...alert, open: false });

  // Fetch dữ liệu tin tức khi trang được tải
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/news/${id}`);
        setNewsData(data); // Điền dữ liệu vào form
      } catch (error) {
        console.error("Error fetching news:", error); 
        setAlert({
          open: true,
          message: "Failed to fetch news details.",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  // Xử lý khi submit form
  const onSubmit = async (values: NewsFormParams) => {
    setLoading(true);
    try {
      // Gửi request PUT để cập nhật tin tức
      await axios.put(`/news/${id}`, values);
      setAlert({
        open: true,
        message: "News updated successfully!",
        severity: "success",
      });
      nav("/admin/news"); // Quay lại danh sách tin tức
    } catch (error) {
      console.error("Error updating news:", error); 
      setAlert({
        open: true,
        message: "Failed to update news.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h5" sx={{ mt: 9 }} textAlign={"left"}>
          Edit News
        </Typography>
        {loading && <CircularProgress />}
        {/* Hiển thị form chỉ khi dữ liệu đã được tải */}
        {newsData && <NewsForm onSubmit={onSubmit} initialValues={newsData} />}
      </Stack>

      {/* Snackbar thông báo */}
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AdminEditNews;
