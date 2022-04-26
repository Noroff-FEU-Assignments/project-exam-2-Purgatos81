import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { userLoginSchema } from "../utils/yupSchemas";
import axios from "axios";
import { AUTH_URL } from "../utils/Api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import {
  LoginFormPageContainer,
  LoginHeadingContainer,
  LoginContactHeading,
  StyledLoginForm,
  StyledLoginLabel,
  StyledLoginAsterix,
  StyledLoginInput,
  StyledLoginButton
} from "../styles/LoginStyles";
 
const LoginForm = () => {
    const navigate = useNavigate();
  
    const [auth, setAuth] = useContext(AuthContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(userLoginSchema),
    });
  
    const loginUser = async (formData) => {
      const responseData = await axios.post(AUTH_URL, {
        identifier: formData.email,
        password: formData.password,
      });
  
      console.log('Response Data: ', responseData);
  
      setAuth(responseData.data);
      navigate('/admin');
    };
  
    const onSubmit = (formData) => {
      console.log('Form Data: ', formData);
  
      loginUser(formData).catch(console.error);
      console.log(auth);
    };
  
    return (
      <LoginFormPageContainer>
        <LoginHeadingContainer>
          <LoginContactHeading>Login Form</LoginContactHeading>
        </LoginHeadingContainer>
        <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLoginLabel HTMLFor="loginEmail">Email<StyledLoginAsterix> *</StyledLoginAsterix></StyledLoginLabel>
          <StyledLoginInput id="loginEmail" {...register('email')} placeholder='Your email...' />
          {errors.email && <span>{errors.email.message}</span>}
          <StyledLoginLabel HTMLFor="loginPassword">Password<StyledLoginAsterix> *</StyledLoginAsterix></StyledLoginLabel>
          <StyledLoginInput id="loginPassword"
            {...register('password')}
            type='password'
            placeholder='Your password...'
          />
          {errors.password && <span>{errors.password.message}</span>}
  
          <StyledLoginButton>Send</StyledLoginButton>
        </StyledLoginForm>
      </LoginFormPageContainer>
    );
  };
  
  export default LoginForm;