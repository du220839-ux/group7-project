const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/users', userRoutes); // <- đường dẫn gốc cho user

// test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
