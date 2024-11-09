// server.js
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models/BlogPost');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', blogRoutes);

sequelize.sync().then(() => console.log('DB synced!'));

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
