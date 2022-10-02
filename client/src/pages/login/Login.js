import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BtnPrimary } from "../../components/custom-button/BtnPrimary";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { adminLogin } from '../profile/adminUserAction';

const initialState = {
  email: "fxrender@yahoo6.com",
  password: "Yoshi1988*",
};

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useHistory();

  const [loginInfo, setLoginInfo] = useState(initialState);
  const {isLoading, isAuth } = useSelector(state => state.admin);

  useEffect(() => {
    isAuth && navigate.push("/adminDashboard");
  }, [isAuth, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(loginInfo));
  };

  const inputFields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      value: loginInfo.email,
      onChange: handleChange,
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: loginInfo.password,
      onChange: handleChange,
      required: true,
    },
  ];

  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Log In</h3>
        <hr />
        <div className="input-fields">
          {isLoading && "Loading..."}

          <form onSubmit={handleSubmit}>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} />
            ))}
            <div className="form-bottom">
              <BtnPrimary type='submit' text="Login" />
            </div>
            <div className="text-end">
              New Here?
              <a href="/register">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;