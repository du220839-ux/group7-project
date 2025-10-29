import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList({ refresh }) {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editData, setEditData] = useState({ name: "", email: "" });

  // Gọi lại khi có refresh (khi thêm user mới)
  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  // Lấy danh sách user từ backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("❌ Lỗi khi lấy danh sách users:", err);
    }
  };

  // Xóa user
  const handleDelete = async (userId) => {
    if (!window.confirm("Bạn có chắc muốn xóa user này?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      fetchUsers();
    } catch (err) {
      console.error("❌ Lỗi khi xóa user:", err);
    }
  };

  // Chỉnh sửa user
  const handleEdit = (user) => {
    setEditingUserId(user._id);
    setEditData({ name: user.name, email: user.email });
  };

  // Lưu user sau khi sửa
  const handleSave = async (userId) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}`, editData);
      alert("✅ Cập nhật thành công!");
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      console.error("❌ Lỗi khi cập nhật user:", err);
    }
  };

  return (
    <div>
      <h2>Danh sách User</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {editingUserId === user._id ? (
              <>
                <input
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />
                <input
                  value={editData.email}
                  onChange={(e) =>
                    setEditData({ ...editData, email: e.target.value })
                  }
                />
                <button onClick={() => handleSave(user._id)}>Lưu</button>
                <button onClick={() => setEditingUserId(null)}>Hủy</button>
              </>
            ) : (
              <>
                {user.name} - {user.email}{" "}
                <button onClick={() => handleEdit(user)}>Sửa</button>
                <button onClick={() => handleDelete(user._id)}>Xóa</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
