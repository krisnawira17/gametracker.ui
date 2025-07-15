import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
// import { login } from "../Services/authServices";
import { useLogin } from "../hook/useAuth";

type loginForm = {
  email: string;
  password: string;
};

function Login() {
  const { login } = useLogin();
  const [form, setForm] = useState<loginForm>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      console.error("login failed: ", err);
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-page">
        <h2 className="login-page__title">Sign in to your account</h2>
        <div className="login-page__fields">
          <Input
            name="email"
            label="Email"
            onChange={handleOnChange}
            placeholder="email"
            value={form.email}
            required={true}
          />
          <Input
            name="password"
            label="Password"
            onChange={handleOnChange}
            placeholder="password"
            value={form.password}
            required={true}
            type="password"
          />
        </div>
        <div className="login-page__authConfirm">
          <Button name="Sign in" type="submit" />
          <p className="login-page__cta-label">
            Don't have an account yet ?{" "}
            <span
              onClick={() => navigate("/register")}
              className="login-page__register-cta"
            >
              Sign up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
