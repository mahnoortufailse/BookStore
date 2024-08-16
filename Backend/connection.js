import mongoose from "mongoose";

async function connectMongoDB(url) {
  return await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default connectMongoDB;
