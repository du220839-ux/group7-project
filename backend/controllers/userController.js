exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' }
  ]);
};

exports.addUser = (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User added', user: newUser });
};
