import React, { useState } from "react";
import { toast } from "react-toastify";
import { apiRegister } from "../../apis/registerApi";
import { BtnOutline } from "../../components/custom-button/BtnPrimary";
import { CustomInput } from "../../components/custom-input/CustomInput";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [isPending, setIsPending] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const { confirmPassword, ...rest } = formData;
    const result = await apiRegister(rest);

    if (result.status === "success") {
      toast.success(result.message);
      setFormData(initialState);
    } else {
      toast.error(result.message);
    }
    setIsPending(false);
  };

  const handleOnBlur = (e) => {
    const { password, confirmPassword } = formData;

    let error = "";
    if (password !== confirmPassword) {
      error = "Password does not match";
    }
    error && toast.error(error);
    error = "";
  };

  const inputFields = [
    { label: "first Name", type: "text", name: "fName", required: true },
    { label: "last Name", type: "text", name: "lName", required: true },
    { label: "Email", type: "email", name: "email", required: true },
    { label: "Phone", type: "text", name: "phone" },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
      onBlur: handleOnBlur
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      required: true,
      onBlur: handleOnBlur
    },
  ];

  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Register</h3>
        <hr />
        <div className="input-fields">
          {isPending && "Please wait..."}
          <form onSubmit={handleOnSubmit}>
            {inputFields.map((row, i) => (
              <CustomInput key={i} {...row} onChange={handleOnChange} />
            ))}
            <div className="form-bottom">
              <BtnOutline text="Register" disabled={formData.password !== formData.confirmPassword} />
            </div>
            <div className="text-end">
              Already have an account?
              <a href="/admin-user">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;