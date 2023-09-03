import { Form } from "./styles"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextFieldStyled, ErrorText, Button, ButtonWrapper } from "./styles";
import { toast } from 'react-toastify';
import axios from "axios";

const NewProduct = ({ setLoading }) => {
  const initialValues = {
    title: '',
    author: '',
    year: '',
    rating: '',
  };

  const currentDate = new Date();

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    year: Yup.number().required('Required').min(1900, 'Year should be not less, then 1900')
      .max(currentDate.getFullYear(), `Year should be not more, then ${currentDate.getFullYear()}`),
    rating: Yup.number()
      .min(1, 'Rating should be not less, then 1')
      .max(5, 'Rating should be not more, then 5')
      .required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    setLoading(true);
    axios.post(`https://dummyjson.com/products/add`, values).then(() => {
      toast.success('Product has been added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      resetForm();
    }).catch(() => {
      toast.error('Something went wrong :( Please, try again!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }).finally(() => {
      setLoading(false);
    })
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
  };

  return <Form onSubmit={handleSubmit}>
    <div>
      <TextFieldStyled id="outlined-basic" label="Title" variant="outlined" type="text"
        name="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title} />
      {formik.touched.title && formik.errors.title ? (
        <ErrorText>{formik.errors.title}</ErrorText>
      ) : null}
    </div>
    <div>
      <TextFieldStyled id="outlined-basic" label="Author" variant="outlined" type="text"
        name="author"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.author} />
      {formik.touched.author && formik.errors.author ? (
        <ErrorText>{formik.errors.author}</ErrorText>
      ) : null}
    </div>
    <div>
      <TextFieldStyled id="outlined-basic" label="Year" variant="outlined" type="text"
        name="year"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.year} />
      {formik.touched.year && formik.errors.year ? (
        <ErrorText>{formik.errors.year}</ErrorText>
      ) : null}
    </div>
    <div>
      <TextFieldStyled id="outlined-basic" label="Rating" variant="outlined" type="text"
        name="rating"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating} />
      {formik.touched.rating && formik.errors.rating ? (
        <ErrorText>{formik.errors.rating}</ErrorText>
      ) : null}
    </div>
    <ButtonWrapper>
      <Button type="submit">Add New</Button>
    </ButtonWrapper>
  </Form>
}

export default NewProduct;