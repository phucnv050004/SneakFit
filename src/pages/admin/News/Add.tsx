import NewsForm from "@/components/NewsForm";
import ProductForm from "@/components/ProductForm";
import { NewsFormParams } from "@/interfaces/TNews";
import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminAddNews = () => {
  const nav = useNavigate();
  const onSubmit = async (values: NewsFormParams) => {
    setTimeout(async () => {
      try {
        await axios.post("/news", values);
        alert("New add successfully!");
        nav("/admin");
      } catch (error) {
        console.error("Error adding new:", error);
      }
    }, 1000); // 2 seconds delay
  };
  return (
    <>
      <Container>
        <Stack gap={2}>
          <Typography variant="h5" sx={{ mt: 9 }} textAlign={"left"}>
            Add News
          </Typography>
          <NewsForm onSubmit={onSubmit} initialValues={{ isShow: true }} />
        </Stack>
      </Container>
    </>
  );
};

export default AdminAddNews;
