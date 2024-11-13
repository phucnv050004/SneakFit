import { Button, Stack } from "@mui/material";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { NewsFormParams } from "src/interfaces/TNews";
import { InputText } from "./elements/InputText";

type NewsFormProps = {
  onSubmit: (values: NewsFormParams) => void;
  initialValues?: any;
};

function NewsForm({ onSubmit, initialValues }: NewsFormProps) {
  const validate = (values: NewsFormParams) => {
    const { title, images, content, author } = values;
    const errors: ValidationErrors = {};
    if (!title) errors.title = "Can nhap title vao";
    if (title && title.length < 5) errors.title = "Can nhap it nhat 5 ky tu vao";
    if (!author) errors.author = "Can nhap author vao";
    if (!content) errors.content = "Can nhap content vao";
    if (!images) errors.image = "Can nhap image vao";

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ values }) => (
        <Stack>
          {/* Title */}
          <Field
            name="title"
            render={({ input, meta }) => (
              <InputText input={input} label={"Title"} messageError={meta.touched && meta.error} />
            )}
          />
          
          {/* Author */}
          <Field
            name="author"
            render={({ input, meta }) => (
              <InputText input={input} label={"Author"} messageError={meta.touched && meta.error} />
            )}
          />
          
          {/* Content */}
          <Field<string>
            name="content"
            render={({ input, meta }) => (
              <InputText input={input} label={"Content"} messageError={meta.touched && meta.error} />
            )}
          />
          
          {/* Image */}
          <Field
            name="images"
            render={({ input, meta }) => (
              <InputText input={input} label={"Image"} messageError={meta.touched && meta.error} />
            )}
          />
          
          {/* Submit Button */}
          <Button type="submit" variant="contained" sx={{ mt: 2 }} onClick={() => onSubmit(values)}>
            Submit
          </Button>
        </Stack>
      )}
    />
  );
}

export default NewsForm;
