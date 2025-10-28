exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' }
  ]);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Cập nhật user theo ID
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);

  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Xóa user theo ID
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id != id);
  res.json({ message: 'User deleted' });
};
