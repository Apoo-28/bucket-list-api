const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app'); // Import from app.js

dotenv.config();

console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
