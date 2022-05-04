import { Today } from '@mui/icons-material';
import * as yup from 'yup';

export const userLoginSchema = yup.object().shape({
    email: yup.string().required('Please enter an email address').email('Please enter a valid email address'),
    password: yup.string().required('Please enter your password'),
  });

  export const ContactSchema = yup.object().shape({
    Name: yup.string().required("Please enter your name"),
    Email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    Message: yup.string().required("Please enter yout message").min(10, "The message must be at least 10 characters long"),
});

export const AddHotelSchema = yup.object().shape({
  Name: yup.string().required("Please enter a name"),
  Description: yup.string().required("Please enter a description"),
  Price: yup.number().required("Please enter price"),
  Information: yup.string().required("Please enter information"),
  imgurl: yup.string().required("Please enter image URL"),
});

export const BookingSchema = yup.object().shape({
  Name: yup.string().required("Please enter your name"),
  Email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  Date: yup.date().required("Please enter date"),
});