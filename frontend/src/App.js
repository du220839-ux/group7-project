
// code frontend
import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [refresh, setRefresh] = useState(false);

  // Gọi khi thêm user thành công để reload danh sách
  const handleUserAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Quản lý User</h1>
      <AddUser onUserAdded={handleUserAdded} />
      <UserList refresh={refresh} />
    </div>
  );
}

export default App;
// code backend
