import {
  Button,
  Stack,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { NewsFormParams } from "@/interfaces/TNews";

interface NewsFormProps {
  onSubmit: (values: NewsFormParams) => void;
  initialValues: any;
}

const NewsForm: React.FC<NewsFormProps> = ({ onSubmit, initialValues }) => {
  const { handleSubmit, control } = useForm<NewsFormParams>({
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/* Tiêu đề */}
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              fullWidth
              variant="outlined"
              required
            />
          )}
        />

        {/* Tác giả */}
        <Controller
          name="author"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Author"
              fullWidth
              variant="outlined"
              required
            />
          )}
        />

        {/* Nội dung */}
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Content"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              required
            />
          )}
        />

        

        {/* Nút Submit */}
        <Button type="submit" variant="contained" color="primary">
          Add News
        </Button>
      </Stack>
    </form>
  );
};

export default NewsForm;
