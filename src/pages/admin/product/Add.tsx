import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductForm from "@/components/ProductForm";
import { ProductFormParams } from "@/interfaces/TProduct";

const AdminAddProduct = () => {
    const nav = useNavigate();
    const onSubmit = async (values: ProductFormParams) => {
        setTimeout(async () => {
            try {
                await axios.post("/products", values);
                alert("Product added successfully!");
                nav("/admin");
            } catch (error) {
                console.error("Error adding product:", error);
            } 
        }, 1000); // 2 seconds delay
    };
    return (
        <>
            <Container >
                <Stack gap={2}>
                    <Typography variant="h5" sx={{ mt: 9 }} textAlign={"left"}>
                        Add Product
                    </Typography>
                    <ProductForm
                        onSubmit={onSubmit}
                        initialValues={{ isShow: true }}
                    />
                </Stack>
            </Container>
        </>
    )
}

export default AdminAddProduct