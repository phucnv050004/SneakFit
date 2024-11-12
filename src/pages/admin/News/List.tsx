import ConfirmDialog from "@/components/ConfirmDialog";
import { TNews } from "@/interfaces/TNews";
import AddIcon from "@mui/icons-material/Add";
import {
  Alert,
  Button,
  Paper,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";

const AdminNewsList = () => {
  const [news, setNews] = useState<TNews[]>([]);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState<string | null>(null); // Đảm bảo ID là chuỗi
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch news data from API
  const fetchNews = async () => {
    try {
      const { data } = await axios.get("/articles");
      setNews(data);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      setAlert({
        open: true,
        message: "Failed to fetch articles.",
        severity: "error",
      });
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Scroll to top when changing page
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  // Confirm deletion
  const handleConfirmDelete = (id: string) => {
    setOpenConfirmDialog(true);
    setIdToDelete(id); // Đảm bảo ID là chuỗi
  };

  // Delete a news item
  const handleDelete = async () => {
    if (!idToDelete) return;

    try {
      // Gửi yêu cầu DELETE đến API với ID
      const response = await axios.delete(`/articles/${idToDelete}`);
      setAlert({
        open: true,
        message: "Article deleted successfully!",
        severity: "success",
      });

      // Cập nhật lại danh sách bài viết sau khi xóa
      setNews((prevNews) => prevNews.filter((item) => String(item.id) !== idToDelete));
    } catch (error) {
      console.error("Error deleting article:", error);
      setAlert({
        open: true,
        message: "Failed to delete article.",
        severity: "error",
      });
    } finally {
      setOpenConfirmDialog(false); // Đóng hộp thoại xác nhận
    }
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, message: "", severity: "success" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredNews = useMemo(() => {
    return news.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [news, searchTerm]);

  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredNews, currentPage]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div ref={containerRef} className="container" style={{ position: "relative" }}>
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
        DashBoard/News
      </Typography>

      <Stack direction={"row"} spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Tìm Kiếm Tin Tức..."
          variant="standard"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flex: 1 }}
        />
        <Link to="/admin/news/add">
          <Button variant="contained" color="primary">
            <AddIcon /> Thêm Tin Tức
          </Button>
        </Link>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Tiêu đề</TableCell>
              <TableCell>Ảnh</TableCell>
              <TableCell>Tác giả</TableCell>
              <TableCell>Nội dung</TableCell>
              <TableCell>Tác vụ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedNews.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>
                  {item.images && item.images.length > 0 ? (
                    <img
                      src={item.images}
                      alt={item.title}
                      style={{ width: 100, height: 100, objectFit: "cover" }}
                    />
                  ) : (
                    "No image"
                  )}
                </TableCell>
                <TableCell>{item.author || "Chưa có tác giả"}</TableCell>
                <TableCell>{item.content.substring(0, 50)}...</TableCell>
                <TableCell>
                  <Stack direction={"row"} spacing={1}>
                    <Link to={`/admin/news/edit/${item.id}`}>
                      <Button variant="contained" color="warning">
                        Sửa
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleConfirmDelete(String(item.id))} // Đảm bảo ID là chuỗi
                    >
                      Xóa
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.ceil(filteredNews.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />

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

      <ConfirmDialog
        confirm={openConfirmDialog}
        onConfirm={handleDelete} // Gọi hàm xóa khi xác nhận
        onDelete={() => setOpenConfirmDialog(false)} // Đóng hộp thoại nếu không xác nhận
      />
    </div>
  );
};

export default AdminNewsList;
