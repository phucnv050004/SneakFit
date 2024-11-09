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
  const [confirm, setConfirm] = useState(false);
  const [idDelete, setIdDelete] = useState<string | null>(null);
  const [alert, setAlert] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch news data from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get("/news");
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };
    fetchNews();
  }, []);

  // Scroll to top when changing page
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  // Confirm deletion
  const handleConfirm = (id: string) => {
    setConfirm(true);
    setIdDelete(id);
  };

  // Delete a news item
  const handleDelete = async () => {
    if (!idDelete) return;
    try {
      await axios.delete(`/news/${idDelete}`);
      setAlert({ open: true, message: "News deleted successfully!" });
      setNews(news.filter((item) => item._id !== idDelete));
    } catch (error) {
      console.error("Failed to delete news:", error);
      setAlert({ open: true, message: "Failed to delete news." });
    } finally {
      setConfirm(false);
    }
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, message: "" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter news by search term
  const filteredNews = useMemo(() => {
    return news.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [news, searchTerm]);

  // Pagination logic
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div
      ref={containerRef}
      className="container"
      style={{ position: "relative" }}
    >
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
              <TableCell>Tác giả</TableCell>
              <TableCell>Ngày đăng</TableCell>
              <TableCell>Nội dung</TableCell>
              <TableCell>Tác vụ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedNews.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>
                  {new Date(item.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{item.content.substring(0, 50)}...</TableCell>
                <TableCell>
                  <Stack direction={"row"} spacing={1}>
                    <Link to={`/admin/news/edit/${item._id}`}>
                      <Button variant="contained" color="warning">
                        Sửa
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleConfirm(item._id)}
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
          severity="success"
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>

      <ConfirmDialog
        confirm={confirm}
        onConfirm={setConfirm}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminNewsList;
