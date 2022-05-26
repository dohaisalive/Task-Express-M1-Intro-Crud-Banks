const mongoose = require("mongoose");

const connectDB = async () => {
  const myConnection = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.mjbe5.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  console.log(`you are connected: ${myConnection.connection.host}`);
};

module.exports = connectDB;
