let users = [];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
};
