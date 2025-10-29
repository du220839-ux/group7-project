import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("✅ Đăng ký thành công!");
      console.log(res.data);
    } catch (err) {
      console.error("❌ Lỗi đăng ký:", err);
      alert("Email đã tồn tại hoặc server lỗi!");
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Tên" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

export default Signup;
