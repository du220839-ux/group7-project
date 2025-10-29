import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token); // Lưu JWT vào localStorage
      alert("✅ Đăng nhập thành công!");
      if (onLogin) onLogin();
    } catch (err) {
      console.error("❌ Lỗi đăng nhập:", err);
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
