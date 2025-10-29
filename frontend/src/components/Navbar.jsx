import React from "react";

function Navbar({ onLogout }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("🚪 Đã đăng xuất!");
    if (onLogout) onLogout();
  };

  return (
    <nav>
      <button onClick={() => (window.location.href = "/")}>Trang chủ</button>
      <button onClick={() => (window.location.href = "/profile")}>Cá nhân</button>
      <button onClick={handleLogout}>Đăng xuất</button>
    </nav>
  );
}

export default Navbar;

