import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [editData, setEditData] = useState({ name: "", avatar: "" });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      setEditData({ name: res.data.name, avatar: res.data.avatar || "" });
    } catch (err) {
      console.error("❌ Lỗi khi tải profile:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5000/api/users/me", editData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Cập nhật thành công!");
      fetchProfile();
    } catch (err) {
      console.error("❌ Lỗi khi cập nhật:", err);
    }
  };

  if (!user) return <p>Đang tải thông tin...</p>;

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <img src={user.avatar || "https://via.placeholder.com/100"} alt="avatar" width="100" />
      <div>
        <input
          value={editData.name}
          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
        />
        <input
          value={editData.avatar}
          onChange={(e) => setEditData({ ...editData, avatar: e.target.value })}
          placeholder="Link ảnh đại diện"
        />
        <button onClick={handleUpdate}>Cập nhật</button>
      </div>
    </div>
  );
}

export default Profile;
