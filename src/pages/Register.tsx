import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

type registerForm = {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
};

function Register() {
  const [form, setForm] = useState<registerForm>({
    email: "",
    username: "",
    password: "",
    password_confirm: "",
  });

  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="register-container">
      <form className="register-page">
        <h1 className="register-page__title">Create an account</h1>
        <div className="register-page__fields">
          <Input
            name="email"
            label="Email"
            placeholder="email"
            onChange={handleOnChange}
            value={form.email}
          />
          <Input
            name="username"
            label="Username"
            placeholder="username"
            onChange={handleOnChange}
            value={form.username}
          />
          <Input
            name="password"
            label="Password"
            placeholder="password"
            type="password"
            onChange={handleOnChange}
            value={form.password}
          />
          <Input
            name="password_confirm"
            label="Confirm password"
            placeholder="confirm password"
            type="password"
            onChange={handleOnChange}
            value={form.password_confirm}
          />
        </div>
        <div className="register-page__authConfirm">
          <Button name="Sign Up" type={"submit"} />
          <p className="register-page__cta-label">
            Already have an account yet ?{" "}
            <span
              onClick={() => navigate("/login")}
              className="register-page__login-cta"
            >
              Sign in
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
