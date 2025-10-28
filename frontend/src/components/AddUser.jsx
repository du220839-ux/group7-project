import React, { useState } from "react";
import axios from "axios";

function AddUser({ onUserAdded }) {
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔹 Validation
    if (!newUser.name.trim()) {
      alert("❌ Name không được để trống");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(newUser.email)) {
      alert("❌ Email không hợp lệ");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/users", newUser);
      alert("✅ Thêm user thành công!");
      // Reset form sau khi thêm
      setNewUser({ name: "", email: "" });
      if (onUserAdded) onUserAdded();
    } catch (err) {
      console.error("❌ Lỗi khi thêm user:", err);
      alert("❌ Không thể thêm user, vui lòng thử lại.");
    }
  };

  return (
    <div>
      <h2>Thêm User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}

export default AddUser;
